# Quick Fix Guide - AI Assistant Configuration

## Problem
The AI assistant shows the error: "I apologize, but I'm currently unable to connect to the AI service..."

## Root Causes

There are two potential issues:

1. **Frontend not configured**: The frontend doesn't know where the backend API is located
2. **Backend not configured**: The backend doesn't have a valid Groq API key

## Solutions

### Fix 1: Configure Frontend Environment Variable

#### For Local Development

1. Go to the `Frontend` directory
2. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
3. The default configuration uses `http://localhost:3001/api/ai-chat`
4. Make sure your backend is running locally on port 3001

#### For Production (Vercel)

1. Go to https://vercel.com and log in
2. Navigate to your frontend project
3. Go to **Settings** → **Environment Variables**
4. Add a new variable:
   - **Name**: `VITE_AI_API_ENDPOINT`
   - **Value**: `https://your-backend-url.up.railway.app/api/ai-chat`
5. Replace `your-backend-url` with your actual Railway deployment URL
6. Click **Save**
7. Redeploy the frontend (Vercel will do this automatically)

### Fix 2: Configure Backend Environment Variable

⚠️ **Security Note**: Your Groq API key is sensitive information. Never commit it to version control or share it publicly. Keep it confidential and store it only in environment variables.

1. Go to https://railway.app and log in
2. Navigate to your `cbc-education-system` project
3. Click on the **Backend** service
4. Go to the **Variables** tab
5. Look for `GROQ_API_KEY`:
   - If it exists with value `dummy_key_for_testing`, edit it
   - If it doesn't exist, click **+ New Variable**
6. Set the value to your real Groq API key from https://console.groq.com/keys
7. Click **Save**
8. Railway will automatically redeploy the backend

Wait for the deployment to complete (usually takes 1-2 minutes).

### Test the Connection

1. Open your application (local or deployed)
2. Click the AI Assistant button (bottom right corner)
3. Send a test message like "What is CBE?"
4. You should now receive a proper AI response!

## What Was Fixed in This PR

1. ✅ Made API endpoint configurable via environment variables
2. ✅ Added `.env.example` template for frontend
3. ✅ Created comprehensive Frontend README with setup instructions
4. ✅ Updated deployment documentation for Vercel and Railway
5. ✅ Added troubleshooting guide

## For Local Development

If you want to test the AI assistant locally:

**Backend:**
```bash
cd Backend
npm install
# Create .env file with: GROQ_API_KEY=your_groq_api_key_here
npm start
```

**Frontend:**
```bash
cd Frontend
npm install
# Create .env file with: VITE_AI_API_ENDPOINT=http://localhost:3001/api/ai-chat
npm run dev
```

The frontend will be at http://localhost:8080 and will connect to the backend at http://localhost:3001.

## Troubleshooting

### Frontend can't connect to backend

**Symptoms**: Network error, CORS error, or "Failed to fetch"

**Check**:
- Is the backend running? Test: `curl http://localhost:3001/health` (should return `{"status":"ok"}`)
- Is `VITE_AI_API_ENDPOINT` set correctly in `.env`?
- For production: Is `VITE_AI_API_ENDPOINT` set in Vercel environment variables?

### Backend returns error

**Symptoms**: AI Assistant shows "unable to connect" but backend is running

**Check**:
- Is `GROQ_API_KEY` set in backend's `.env` (local) or Railway variables (production)?
- Is the Groq API key valid? Check at https://console.groq.com/keys
- Check backend logs for specific error messages

## Need Help?

See the full deployment guides:
- [Frontend README](Frontend/README.md) - Frontend setup and configuration
- [DEPLOYMENT.md](DEPLOYMENT.md) - Backend deployment on Railway
- [VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md) - Frontend deployment on Vercel

