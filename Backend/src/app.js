const express = require("express");
const cors = require("cors");
const aiRoutes = require("./routes/ai.routes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", aiRoutes);

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

module.exports = app;
