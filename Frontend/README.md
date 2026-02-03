# CBC Education Platform - Frontend

This is the frontend application for the CBC Education Platform, built with React, TypeScript, and Vite.

## Getting Started

### Prerequisites

- Node.js >= 18.18.0
- npm or yarn

### Installation

```bash
npm install
```

### Environment Variables

The frontend uses environment variables for configuration. Create a `.env` file in the `Frontend` directory by copying the example:

```bash
cp .env.example .env
```

#### Available Environment Variables

- `VITE_AI_API_ENDPOINT`: The URL for the AI Assistant backend API
  - **Local Development**: `http://localhost:3001/api/ai-chat`
  - **Production**: Set this to your deployed backend URL (e.g., `https://your-backend.railway.app/api/ai-chat`)

**Example `.env` file:**

```env
# For local development
VITE_AI_API_ENDPOINT=http://localhost:3001/api/ai-chat
```

**For production deployment on Vercel:**

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add `VITE_AI_API_ENDPOINT` with your production backend URL
4. Example: `https://your-backend.railway.app/api/ai-chat`

### Development

Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:8080`

### Build

Build for production:

```bash
npm run build
```

The build output will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

### Testing

Run tests:

```bash
npm test
```

### Linting

```bash
npm run lint
```

## Project Structure

```
Frontend/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── ai-assistant/ # AI Assistant chat component
│   │   └── ui/           # shadcn/ui components
│   ├── pages/            # Page components
│   ├── contexts/         # React contexts
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── assets/           # Static assets (images, videos, etc.)
│   ├── App.tsx           # Main App component
│   └── main.tsx          # Application entry point
├── public/               # Public static files
├── .env.example          # Environment variables template
├── vite.config.ts        # Vite configuration
└── package.json          # Project dependencies
```

## Key Features

- **AI Assistant**: Chat with an AI assistant for CBE-related questions (requires backend)
- **Curriculum Explorer**: Browse and explore CBE curriculum
- **Progress Tracking**: Track student competency progress
- **Assessments**: Create and manage assessments
- **Evidence Upload**: Upload evidence of competency mastery

## AI Assistant Configuration

The AI Assistant requires a backend server to be running. See the [Backend README](../Backend/README.md) for setup instructions.

### Troubleshooting AI Assistant

If you see the error "I apologize, but I'm currently unable to connect to the AI service":

1. **Check Backend is Running**:
   - Ensure the backend server is running on the configured port (default: 3001)
   - Test the backend health endpoint: `curl http://localhost:3001/health`

2. **Verify Environment Variable**:
   - Check that `VITE_AI_API_ENDPOINT` in your `.env` file points to the correct backend URL
   - For local development: `http://localhost:3001/api/ai-chat`

3. **Check Backend Configuration**:
   - Ensure the backend has a valid `GROQ_API_KEY` set in its `.env` file
   - See [Backend README](../Backend/README.md) for backend setup

4. **Rebuild Frontend** (if you changed `.env`):
   - Stop the dev server
   - Run `npm run dev` again
   - Environment variables are embedded at build time

## Deployment

### Vercel (Recommended)

The project is pre-configured for Vercel deployment with `vercel.json` in the root directory.

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the configuration
3. Add environment variables in Vercel project settings:
   - `VITE_AI_API_ENDPOINT`: Your production backend URL

See [VERCEL_DEPLOYMENT.md](../VERCEL_DEPLOYMENT.md) for detailed deployment instructions.

## Technologies Used

- **React 18**: UI framework
- **TypeScript**: Type-safe JavaScript
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Re-usable component library
- **React Router**: Client-side routing
- **Lucide React**: Icon library

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## License

See the root [LICENSE](../LICENSE) file for details.
