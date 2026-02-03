# Quick Fix Guide - AI Assistant Connection Issue

## Problem
The AI assistant shows the error: "I apologize, but I'm currently unable to connect to the AI service..."

## Root Cause
The backend environment variable `GROQ_API_KEY` is not configured with your real Groq API key on the Railway deployment.

## Solution

### Step 1: Set Environment Variable on Railway

1. Go to https://railway.app and log in
2. Navigate to your `cbc-education-system` project
3. Click on the **Backend** service
4. Go to the **Variables** tab
5. Look for `GROQ_API_KEY`:
   - If it exists with value `dummy_key_for_testing`, edit it
   - If it doesn't exist, click **+ New Variable**
6. Set the value to: `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`
7. Click **Add** or **Save**

### Step 2: Redeploy

Railway will automatically redeploy the backend with the new environment variable.

Wait for the deployment to complete (usually takes 1-2 minutes).

### Step 3: Test

1. Open your application
2. Click the AI Assistant button (bottom right corner)
3. Send a test message like "What is CBE?"
4. You should now receive a proper AI response!

## What Was Fixed in This PR

1. ✅ Added `.env` files to `.gitignore` to prevent committing API keys
2. ✅ Created `.env.example` template for local development
3. ✅ Updated local `.env` with the real API key (for testing)
4. ✅ Added comprehensive documentation:
   - Backend setup guide
   - Railway deployment instructions
   - Troubleshooting tips

## For Local Development

If you want to test the AI assistant locally:

```bash
cd Backend
npm install
# Make sure .env has: GROQ_API_KEY=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
npm start
```

Then update the frontend to point to `http://localhost:3001/api/ai-chat`.

## Need Help?

See the full deployment guide in [DEPLOYMENT.md](DEPLOYMENT.md) or the backend README in [Backend/README.md](Backend/README.md).

