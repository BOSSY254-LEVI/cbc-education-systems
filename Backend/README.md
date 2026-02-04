# CBC Education System - Backend

This is the AI Assistant backend for the CBC Education Platform, powered by OpenRouter's AI models.

## 🚀 Quick Start

### Prerequisites
- Node.js >= 18.0.0
- An OpenRouter API key (get one at https://openrouter.ai/keys)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
```bash
cp .env.example .env
```

3. Edit `.env` and add your OpenRouter API key:
```
OPENROUTER_API_KEY=your_actual_openrouter_api_key_here
```

4. Start the server:
```bash
npm start
```

The server will run on port 3001 by default.

## 🔧 Configuration

### Environment Variables

- `OPENROUTER_API_KEY` (required): Your OpenRouter API key
- `PORT` (optional): Server port (default: 3001)

### For Railway Deployment

If deploying to Railway or other hosting platforms:

1. Go to your project settings
2. Add the environment variable:
   - Name: `OPENROUTER_API_KEY`
   - Value: Your OpenRouter API key
3. Redeploy the application

## 📡 API Endpoints

### POST /api/ai-chat

Chat with the AI assistant.

**Request Body:**
```json
{
  "messages": [
    {"role": "user", "content": "What is CBE?"}
  ],
  "systemPrompt": "You are a helpful AI assistant."
}
```

**Response:**
```json
{
  "message": "CBE stands for Competency-Based Education..."
}
```

### GET /health

Health check endpoint.

**Response:**
```json
{
  "status": "ok"
}
```

## 🐛 Troubleshooting

### "Failed to get AI response" error

This error usually means:
1. The `OPENROUTER_API_KEY` is not set or is invalid
2. The OpenRouter API is not accessible (network issues)

**Solution:**
- Verify your API key is correctly set in the `.env` file
- Check that the API key is valid at https://openrouter.ai/keys
- If deploying to a platform like Railway, ensure the environment variable is set in the platform's settings

### Connection refused

- Make sure the server is running on the correct port
- Check that no firewall is blocking the connection

