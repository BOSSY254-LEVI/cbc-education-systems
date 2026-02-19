const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// Database connection configuration
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  max: 30, // Increased maximum number of clients in the pool
  min: 5,  // Increased minimum number of clients in the pool
  idle: 5000, // Close idle clients after 5 seconds (faster cleanup)
  connectionTimeoutMillis: 5000, // Return an error after 5 seconds if connection could not be established
  idleTimeoutMillis: 60000, // Close idle clients after 60 seconds
  statement_timeout: 30000, // 30 second query timeout
  query_timeout: 30000, // 30 second query timeout
});

// Test database connection
pool.on('connect', () => {
  console.log('🗄️  Connected to Supabase database');
});

pool.on('error', (err) => {
  console.error('❌ Database connection error:', err);
});

// Enhanced query function with error handling and logging
const query = async (text, params) => {
  const start = Date.now();
  try {
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log(`📊 Query executed in ${duration}ms`, { text, rows: res.rowCount });
    return res;
  } catch (error) {
    console.error('❌ Database query error:', error);
    throw error;
  }
};

// Transaction wrapper for atomic operations
const transaction = async (callback) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const result = await callback(client);
    await client.query('COMMIT');
    return result;
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('❌ Transaction failed, rolling back:', error);
    throw error;
  } finally {
    client.release();
  }
};

module.exports = {
  query,
  transaction,
  pool
};