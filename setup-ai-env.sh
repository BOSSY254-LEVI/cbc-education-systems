#!/bin/bash
set -e  # Exit on error
set -u  # Exit on undefined variable

# AI Assistant Environment Setup Script
# This script creates the necessary .env files for local development

echo "🔧 Setting up AI Assistant environment files..."
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Prompt for GROQ API key
echo -e "${BLUE}🔑 GROQ API Key Setup${NC}"
echo "Get your free API key from: https://console.groq.com/keys"
echo ""
read -s -p "Enter your GROQ API key (or press Enter to use placeholder): " GROQ_API_KEY
echo ""  # New line after hidden input

# Use placeholder if empty
if [ -z "$GROQ_API_KEY" ]; then
    GROQ_API_KEY="your-groq-api-key-here"
    echo -e "${YELLOW}⚠️  Using placeholder. Replace with your actual key in Backend/.env${NC}"
fi

# Prompt for backend URL
echo ""
echo -e "${BLUE}🌐 Backend URL Setup${NC}"
echo "Options:"
echo "  1) Production Railway: https://cbc-education-system-production.up.railway.app/api/ai-chat"
echo "  2) Local development: http://localhost:3001/api/ai-chat"
echo ""
read -p "Choose option (1 or 2, default: 1): " BACKEND_CHOICE

if [ "$BACKEND_CHOICE" = "2" ]; then
    BACKEND_URL="http://localhost:3001/api/ai-chat"
else
    BACKEND_URL="https://cbc-education-system-production.up.railway.app/api/ai-chat"
fi

# Setup Backend .env
echo ""
echo "📦 Setting up Backend environment..."
if [ ! -f "Backend/.env" ]; then
    cat > Backend/.env << EOF
GROQ_API_KEY=$GROQ_API_KEY
EOF
    echo -e "${GREEN}✅ Created Backend/.env${NC}"
else
    echo -e "${YELLOW}⚠️  Backend/.env already exists (skipping)${NC}"
fi

# Setup Frontend .env
echo "🎨 Setting up Frontend environment..."
if [ ! -f "Frontend/.env" ]; then
    cat > Frontend/.env << EOF
# AI Assistant Backend API Endpoint
# Current configuration: $( [ "$BACKEND_CHOICE" = "2" ] && echo "Local Development" || echo "Production (Railway)" )
VITE_AI_API_ENDPOINT=$BACKEND_URL
EOF
    echo -e "${GREEN}✅ Created Frontend/.env${NC}"
else
    echo -e "${YELLOW}⚠️  Frontend/.env already exists (skipping)${NC}"
fi

echo ""
echo "✨ Setup complete!"
echo ""
echo "📋 Next steps:"
echo "  1. Start Backend: cd Backend && npm install && npm start"
echo "  2. Start Frontend: cd Frontend && npm install && npm run dev"
echo ""
echo "💡 Tips:"
echo "  - Edit Frontend/.env to switch between local/production backend"
echo "  - See AI_SETUP_GUIDE.md for deployment instructions"
echo "  - Never commit .env files to version control"
