# Vercel Deployment Guide

This guide explains how to deploy the **Frontend** of the CBC Education System to Vercel.

## Important Notes

- **Frontend Only**: Vercel deploys only the frontend (React application)
- **Backend Separately**: The backend is deployed separately on Railway (see [DEPLOYMENT.md](DEPLOYMENT.md))
- **No Backend on Vercel**: The Backend folder is explicitly ignored via `.vercelignore`

## Prerequisites

- A Vercel account (sign up at https://vercel.com)
- GitHub repository connected to Vercel

## Deployment Steps

### Option 1: Automatic Deployment (Recommended)

1. **Connect Repository to Vercel**
   - Go to https://vercel.com/dashboard
   - Click "New Project"
   - Import your `cbc-education-system` repository
   - Vercel will auto-detect the configuration from `vercel.json`

2. **Configuration**
   - Vercel will automatically use the settings from `vercel.json`:
     - Build Command: `cd Frontend && npm install && npm run build`
     - Output Directory: `Frontend/dist`
     - Install Command: `npm install --prefix Frontend`
   
3. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your frontend will be available at `https://your-project.vercel.app`

### Option 2: Manual Deployment via CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from the root directory
cd /path/to/cbc-education-system
vercel

# For production deployment
vercel --prod
```

## Project Structure

```
cbc-education-system/
├── Frontend/          # React app (deployed to Vercel)
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.ts
├── Backend/           # Express API (deployed to Railway - IGNORED by Vercel)
├── vercel.json        # Vercel configuration
├── .vercelignore      # Files to ignore during deployment
└── VERCEL_DEPLOYMENT.md
```

## Configuration Files

### vercel.json

The `vercel.json` file configures:
- Build commands specific to the Frontend directory
- Output directory (`Frontend/dist`)
- SPA routing (all routes redirect to `/index.html`)
- Caching headers for static assets

### .vercelignore

Explicitly excludes:
- Backend folder (deployed separately)
- Documentation files
- Environment files
- Git metadata

## Environment Variables

The frontend uses environment variables for configuration:

### Required Environment Variables

- **`VITE_AI_API_ENDPOINT`**: The URL of your backend API for the AI Assistant
  - Example: `https://your-railway-app.up.railway.app/api/ai-chat`
  - This must be set in Vercel's environment variables for the AI Assistant to work

### Setting Environment Variables in Vercel

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add any required variables (e.g., `VITE_AI_API_ENDPOINT`)
4. Choose which environments to apply them to (Production, Preview, Development)
5. Redeploy for changes to take effect

**Note**: The backend API URL is configured via the `VITE_AI_API_ENDPOINT` environment variable in Vercel, not in the code. See the "Connecting Frontend to Backend" section below for details.

## Connecting Frontend to Backend

After deploying both frontend (Vercel) and backend (Railway):

1. **Get your Railway backend URL** (e.g., `https://your-app.up.railway.app`)

2. **Set the environment variable in Vercel**:
   - Go to your Vercel project → Settings → Environment Variables
   - Add a new variable:
     - **Name**: `VITE_AI_API_ENDPOINT`
     - **Value**: `https://your-railway-app.up.railway.app/api/ai-chat`
   - Apply to all environments (Production, Preview, Development)
   - Click "Save"

3. **Redeploy the frontend**:
   - Vercel will automatically redeploy when you save the environment variable
   - Or trigger a manual redeploy from the Deployments tab

4. **Verify the connection**:
   - Open your deployed frontend
   - Click the AI Assistant button (bottom right)
   - Send a test message
   - You should receive a response from the AI

## Troubleshooting

### Build Fails

**Issue**: Build command not found or fails

**Solution**: 
- Ensure `vercel.json` is properly configured
- Check that `Frontend/package.json` has the correct build script
- Verify Node.js version matches the project requirement (>=18.18.0 as specified in Frontend/package.json)

### Assets Not Loading

**Issue**: Images or static files return 404

**Solution**:
- Ensure assets are in `Frontend/public/` directory
- Check that the build outputs them to `dist/`
- Verify paths in your code use absolute paths (e.g., `/favicon.jpg`)

### SPA Routing Issues

**Issue**: Direct navigation to routes returns 404

**Solution**:
- This is already handled by the `rewrites` section in `vercel.json`
- All routes are redirected to `/index.html` for client-side routing

### Backend Errors

**Issue**: API calls fail from the deployed frontend

**Solution**:
- Verify your backend is deployed and running on Railway
- Check CORS settings in the backend allow requests from your Vercel domain
- Ensure the `VITE_AI_API_ENDPOINT` environment variable in Vercel is correct
- Verify the backend has a valid `GROQ_API_KEY` set in Railway
- Check backend deployment logs in Railway for errors

## Monitoring Deployments

1. **Build Logs**: Available in the Vercel dashboard under "Deployments"
2. **Runtime Logs**: Check the "Functions" or "Analytics" tab
3. **Performance**: Use Vercel Analytics for performance monitoring

## Automatic Deployments

Vercel automatically deploys:
- **Production**: When you push to the `main` branch
- **Preview**: When you create a pull request

To disable automatic deployments:
1. Go to Project Settings → Git
2. Configure which branches trigger deployments

## Security Notes

- Frontend deployments are static and serverless
- API keys should NEVER be in frontend code
- Backend API should validate all requests
- Use environment variables for sensitive configuration

## Support

For issues with:
- **Vercel Deployment**: Check Vercel documentation or support
- **Backend Connection**: See [DEPLOYMENT.md](DEPLOYMENT.md)
- **Application Issues**: Check the repository issues

## Summary

✅ Frontend → Vercel (Static SPA)  
✅ Backend → Railway (API Server)  
✅ Automatic builds on git push  
✅ SPA routing configured  
✅ Assets properly cached  
