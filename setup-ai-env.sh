#!/bin/bash

# AI Assistant Environment Setup Script
# This script creates the necessary .env files for local development

echo "🔧 Setting up AI Assistant environment files..."
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Setup Backend .env
echo "📦 Setting up Backend environment..."
if [ ! -f "Backend/.env" ]; then
    cat > Backend/.env << 'EOF'
GROQ_API_KEY=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
EOF
    echo -e "${GREEN}✅ Created Backend/.env${NC}"
else
    echo -e "${YELLOW}⚠️  Backend/.env already exists${NC}"
fi

# Setup Frontend .env
echo "🎨 Setting up Frontend environment..."
if [ ! -f "Frontend/.env" ]; then
    cat > Frontend/.env << 'EOF'
# AI Assistant Backend API Endpoint
# Production backend deployed on Railway
VITE_AI_API_ENDPOINT=https://cbc-education-system-production.up.railway.app/api/ai-chat

# For local development, uncomment the line below and comment the line above:
# VITE_AI_API_ENDPOINT=http://localhost:3001/api/ai-chat
EOF
    echo -e "${GREEN}✅ Created Frontend/.env${NC}"
else
    echo -e "${YELLOW}⚠️  Frontend/.env already exists${NC}"
fi

echo ""
echo "✨ Setup complete!"
echo ""
echo "📋 Next steps:"
echo "  1. For local development:"
echo "     - Backend: cd Backend && npm install && npm start"
echo "     - Frontend: cd Frontend && npm install && npm run dev"
echo ""
echo "  2. For production deployment:"
echo "     - See AI_SETUP_GUIDE.md for detailed instructions"
echo ""
echo "💡 Tip: If using local backend, edit Frontend/.env and uncomment the localhost line"
