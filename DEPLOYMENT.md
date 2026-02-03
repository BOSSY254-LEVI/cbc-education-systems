# Deployment Guide for Railway

This guide will help you deploy the CBC Education System backend to Railway and configure the Groq API key.

## Prerequisites

- A Railway account (sign up at https://railway.app)
- A Groq API key (get one at https://console.groq.com/keys)

## Step 1: Create a New Project on Railway

1. Go to https://railway.app
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Connect your GitHub account if not already connected
5. Select the `cbc-education-system` repository

## Step 2: Configure the Backend Service

1. Railway should automatically detect the `Backend` directory
2. If not, configure the build settings:
   - **Root Directory**: `Backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

## Step 3: Add Environment Variables

This is the **critical step** to fix the AI assistant connection issue:

1. In your Railway project, click on the Backend service
2. Go to the **Variables** tab
3. Click **+ New Variable**
4. Add the following variable:
   - **Variable Name**: `GROQ_API_KEY`
   - **Variable Value**: Your Groq API key (e.g., `gsk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`)
5. Click **Add**

## Step 4: Deploy

1. Railway will automatically deploy your backend
2. Wait for the deployment to complete
3. You'll get a public URL like `https://your-app-name.up.railway.app`

## Step 5: Update Frontend Configuration

1. Open `Frontend/src/components/ai-assistant/AIAssistant.tsx`
2. Update the `AI_API_ENDPOINT` constant with your Railway URL:
   ```typescript
   const AI_API_ENDPOINT = 'https://your-app-name.up.railway.app/api/ai-chat';
   ```
3. Commit and push the changes

## Step 6: Test the AI Assistant

1. Open your deployed frontend application
2. Click on the AI Assistant button (bottom right)
3. Try sending a message like "What is CBE?"
4. You should receive a response from the AI assistant

## Troubleshooting

### AI Assistant still shows "unable to connect" error

1. **Check the environment variable:**
   - Go to Railway → Your Backend Service → Variables
   - Verify `GROQ_API_KEY` is set correctly
   - Make sure there are no extra spaces or quotes

2. **Check the deployment logs:**
   - Go to Railway → Your Backend Service → Deployments
   - Click on the latest deployment
   - Check the logs for any errors

3. **Verify the API key is valid:**
   - Go to https://console.groq.com/keys
   - Check if your API key is active
   - You can create a new one if needed

4. **Check the backend URL in frontend:**
   - Open `Frontend/src/components/ai-assistant/AIAssistant.tsx`
   - Verify `AI_API_ENDPOINT` matches your Railway URL
   - Make sure it ends with `/api/ai-chat`

### Backend won't start

1. Check the build logs in Railway
2. Make sure Node.js version is >= 18.0.0
3. Verify all dependencies are installed correctly

## Alternative: Environment Variable via Railway CLI

You can also set environment variables using the Railway CLI:

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Link to your project
railway link

# Set the environment variable
railway variables set GROQ_API_KEY=your_groq_api_key_here

# Redeploy
railway up
```

## Security Notes

- **Never commit your API key to Git**
- The `.env` file is already in `.gitignore` to prevent accidental commits
- Use environment variables on the hosting platform for production deployments
- Rotate your API key regularly for security

## Support

If you continue to have issues:
1. Check the Railway deployment logs
2. Verify your Groq API key is valid
3. Ensure the backend service is running on Railway
4. Test the health endpoint: `https://your-app-name.up.railway.app/health`

