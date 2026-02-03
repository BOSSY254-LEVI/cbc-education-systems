# AI Assistant Setup and Troubleshooting Guide

## ✅ Configuration Status

Your AI Assistant is now configured with:

### Frontend Configuration
- **Environment File**: `Frontend/.env` ✅
- **Backend URL**: `https://cbc-education-system-production.up.railway.app/api/ai-chat`

### Backend Configuration  
- **Environment File**: `Backend/.env` ✅
- **GROQ API Key**: Configured ✅

## 🔍 Troubleshooting Steps

If you're still seeing the error message: *"I apologize, but I'm currently unable to connect to the AI service..."*, follow these steps:

### Step 1: Verify Railway Backend is Running

1. Go to https://railway.app and log in
2. Navigate to your `cbc-education-system` project
3. Click on the **Backend** service
4. Check the **Deployments** tab:
   - ✅ Latest deployment should show as "Active" or "Success"
   - ❌ If it shows "Failed" or "Crashed", check the logs for errors
5. Note the **public URL** (should be: `https://cbc-education-system-production.up.railway.app`)

### Step 2: Test Backend Health

Open your browser or use curl to test:
```bash
curl https://cbc-education-system-production.up.railway.app/health
```

**Expected response:** `{"status":"ok"}`

If this fails:
- ❌ Backend is not running or not accessible
- ❌ The URL might be incorrect
- ❌ Railway service might be sleeping or crashed

### Step 3: Verify GROQ_API_KEY in Railway

1. In Railway, go to your **Backend** service
2. Click on the **Variables** tab  
3. Verify `GROQ_API_KEY` exists and has your valid Groq API key
4. If missing or incorrect:
   - Click **+ New Variable**
   - Name: `GROQ_API_KEY`
   - Value: `your-groq-api-key-from-https://console.groq.com`
   - Save and wait for automatic redeploy

### Step 4: Check CORS Configuration

The backend needs to allow requests from your frontend. Verify `Backend/src/app.js` has:

```javascript
app.use(cors());
```

This allows all origins. For production, you might want to restrict it:

```javascript
app.use(cors({
  origin: ['https://your-frontend-domain.vercel.app', 'http://localhost:8080']
}));
```

### Step 5: Test AI Endpoint Directly

Test the AI chat endpoint:

```bash
curl -X POST https://cbc-education-system-production.up.railway.app/api/ai-chat \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [{"role": "user", "content": "What is CBE?"}],
    "systemPrompt": "You are a helpful AI assistant."
  }'
```

**Expected response:** Should contain an AI-generated message about CBE.

**Common errors:**
- `{"error":"Failed to get AI response"}` - GROQ_API_KEY is missing or invalid
- Connection timeout - Backend is not running
- CORS error - Frontend origin not allowed

### Step 6: Update Frontend Environment Variable in Vercel

If your frontend is deployed on Vercel:

1. Go to https://vercel.com and log in
2. Navigate to your frontend project
3. Go to **Settings** → **Environment Variables**
4. Add or update:
   - **Name**: `VITE_AI_API_ENDPOINT`
   - **Value**: `https://cbc-education-system-production.up.railway.app/api/ai-chat`
5. Save and **redeploy** the frontend

⚠️ **Important**: Vercel requires a redeploy after changing environment variables!

## 🚀 Local Development Setup

To test locally:

### Backend:
```bash
cd Backend
npm install
# Make sure Backend/.env has your GROQ_API_KEY
npm start
```

Backend will run on `http://localhost:3001`

### Frontend:
```bash
cd Frontend  
npm install
# For local testing, update Frontend/.env to: VITE_AI_API_ENDPOINT=http://localhost:3001/api/ai-chat
npm run dev
```

Frontend will run on `http://localhost:8080`

## 📋 Checklist

- [ ] Railway backend is deployed and showing "Active" status
- [ ] Backend health check responds with `{"status":"ok"}`
- [ ] GROQ_API_KEY is set in Railway environment variables
- [ ] AI endpoint returns proper responses when tested directly
- [ ] Frontend `.env` file has correct `VITE_AI_API_ENDPOINT`
- [ ] If using Vercel: Environment variable is set and frontend is redeployed
- [ ] CORS is properly configured in backend

## 🆘 Still Having Issues?

### Error: "Failed to fetch"
- Backend is not accessible from frontend
- Check Railway deployment status
- Verify the URL is correct
- Check browser console for CORS errors

### Error: "Failed to get AI response"  
- GROQ_API_KEY is missing or invalid in Railway
- Check Railway logs for detailed error messages
- Verify API key at https://console.groq.com/keys

### Backend keeps crashing
- Check Railway logs for error messages
- Verify all dependencies are installed
- Check `package.json` has correct start script

## 📚 Additional Resources

- [QUICKFIX.md](QUICKFIX.md) - Quick fixes for common issues
- [DEPLOYMENT.md](DEPLOYMENT.md) - Backend deployment guide
- [VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md) - Frontend deployment guide
- [Frontend/README.md](Frontend/README.md) - Frontend setup instructions
- [Backend/README.md](Backend/README.md) - Backend setup instructions

## ⚙️ Environment Files Reference

### Frontend/.env
```env
VITE_AI_API_ENDPOINT=https://cbc-education-system-production.up.railway.app/api/ai-chat
```

### Backend/.env  
```env
GROQ_API_KEY=your-groq-api-key-here
```

---

**Note**: The `.env` files are already configured in this repository for local development. For production deployments, you need to set environment variables in Railway (backend) and Vercel (frontend) directly through their respective dashboards.
