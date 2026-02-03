# CBC Education System - Backend

This is the AI Assistant backend for the CBC Education Platform, powered by Groq's LLaMA model.

## 🚀 Quick Start

### Prerequisites
- Node.js >= 18.0.0
- A Groq API key (get one at https://console.groq.com/keys)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
```bash
cp .env.example .env
```

3. Edit `.env` and add your Groq API key:
```
GROQ_API_KEY=your_actual_groq_api_key_here
```

4. Start the server:
```bash
npm start
```

The server will run on port 3001 by default.

## 🔧 Configuration

### Environment Variables

- `GROQ_API_KEY` (required): Your Groq API key
- `PORT` (optional): Server port (default: 3001)

### For Railway Deployment

If deploying to Railway or other hosting platforms:

1. Go to your project settings
2. Add the environment variable:
   - Name: `GROQ_API_KEY`
   - Value: Your Groq API key
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
1. The `GROQ_API_KEY` is not set or is invalid
2. The Groq API is not accessible (network issues)

**Solution:**
- Verify your API key is correctly set in the `.env` file
- Check that the API key is valid at https://console.groq.com/keys
- If deploying to a platform like Railway, ensure the environment variable is set in the platform's settings

### Connection refused

- Make sure the server is running on the correct port
- Check that no firewall is blocking the connection

