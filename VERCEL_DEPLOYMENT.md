# Vercel Deployment Guide

This document provides instructions for deploying the CBC Education Platform to Vercel.

## Prerequisites

- A Vercel account ([sign up here](https://vercel.com/signup))
- A Web3Forms access key ([get one free here](https://web3forms.com))

## Environment Variables

Before deploying, you need to configure the following environment variables in Vercel:

### Required Variables

1. **`VITE_WEB3FORMS_KEY`** - Access key for the contact form
   - Get your free access key at [https://web3forms.com](https://web3forms.com)
   - This is **required** for the contact form to work
   - Without this, users will see an error when trying to submit the contact form
   - **Note:** Web3Forms keys are public client-side keys (like Stripe publishable keys) that are designed to be embedded in frontend code. They are protected by domain restrictions and rate limiting in your Web3Forms dashboard.

2. **`VITE_AI_API_ENDPOINT`** (Optional) - URL for the AI Assistant backend
   - Example: `https://your-backend.railway.app/api/ai-chat`
   - Only needed if you want to enable the AI Assistant feature

## Setting Up Environment Variables in Vercel

### Method 1: Via Vercel Dashboard (Recommended)

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Navigate to **Settings** → **Environment Variables**
4. Add each variable:
   - Click **Add New**
   - Enter the variable name (e.g., `VITE_WEB3FORMS_KEY`)
   - Enter the value (your Web3Forms access key)
   - Select environments: **Production**, **Preview**, and **Development**
   - Click **Save**

### Method 2: Via Vercel CLI

```bash
# Install Vercel CLI if you haven't already
npm i -g vercel

# Add environment variables
vercel env add VITE_WEB3FORMS_KEY
# When prompted, enter your access key and select all environments

vercel env add VITE_AI_API_ENDPOINT
# When prompted, enter your backend URL and select all environments
```

## Deployment Steps

### First-Time Deployment

1. **Connect to Vercel**:
   ```bash
   vercel
   ```
   Follow the prompts to link your project

2. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

### Automatic Deployments

Once connected to Vercel:

- **Production**: Every push to `main` branch triggers a production deployment
- **Preview**: Every push to other branches creates a preview deployment
- **Pull Requests**: Preview deployments are automatically created for PRs

## Verifying the Deployment

After deployment:

1. **Check Build Logs**:
   - Go to your Vercel project
   - Click on the latest deployment
   - Review the build logs for any errors

2. **Test the Contact Form**:
   - Navigate to the `/contact` page on your deployed site
   - Fill out and submit the form
   - You should receive a confirmation message
   - If you see "Form ID/Access key must be a string", verify the `VITE_WEB3FORMS_KEY` is set correctly

3. **Check Environment Variables**:
   - Open browser console (F12)
   - Look for debug messages about environment variables
   - Note: The actual key value won't be shown for security, but you'll see its length

## Troubleshooting

### Contact Form Error: "Form ID/Access key must be a string"

**Cause**: The `VITE_WEB3FORMS_KEY` environment variable is not set or is empty.

**Solution**:
1. Go to Vercel Dashboard → Settings → Environment Variables
2. Verify `VITE_WEB3FORMS_KEY` is present
3. Ensure there are no extra spaces in the value
4. Make sure it's enabled for the correct environment (Production/Preview/Development)
5. Redeploy the application

### Changes to Environment Variables Not Reflected

**Cause**: Environment variables are embedded at build time for Vite applications.

**Solution**:
1. After changing environment variables in Vercel
2. Trigger a new deployment:
   - Via Dashboard: Go to Deployments → Click "..." → Redeploy
   - Via CLI: `vercel --prod`
   - Via Git: Push a new commit

### Build Failures

**Common Issues**:

1. **Missing Dependencies**:
   - Check `package.json` is committed
   - Ensure `package-lock.json` is committed

2. **TypeScript Errors**:
   - Run `npm run build` locally first
   - Fix any TypeScript errors before pushing

3. **Environment Variable Issues**:
   - Vite environment variables must be prefixed with `VITE_`
   - Check the variable names are exactly as expected

## Project Configuration

The project uses the `vercel.json` configuration file in the root directory:

```json
{
  "buildCommand": "cd Frontend && npm install && npm run build",
  "outputDirectory": "Frontend/dist",
  "installCommand": "npm install --prefix Frontend",
  "devCommand": "cd Frontend && npm run dev",
  "framework": null
}
```

This configuration:
- Builds the Frontend React app
- Outputs to `Frontend/dist`
- Serves the SPA with proper routing

## Security Notes

- **Never commit `.env` files** to the repository
- Environment variables in Vercel are encrypted and stored securely
- Only use public access keys (like Web3Forms) in frontend environment variables
- Keep sensitive API keys (like OpenAI, database credentials) on the backend only

## Support

For deployment issues:
- Check [Vercel Documentation](https://vercel.com/docs)
- Review build logs in Vercel Dashboard
- Check the [Frontend README](./Frontend/README.md) for local development setup

## Updating the Deployment

To update your deployed application:

1. Make your changes locally
2. Test thoroughly: `npm run build` and `npm run preview`
3. Commit and push to your repository
4. Vercel will automatically deploy the changes

For environment variable updates:
1. Update in Vercel Dashboard
2. Trigger a redeploy (changes won't take effect until rebuild)
