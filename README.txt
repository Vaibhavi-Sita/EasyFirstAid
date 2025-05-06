Easy First Aid Application
=========================

A modern web application designed to provide quick and accessible first aid information and guidance.

Project Structure
----------------
The project consists of two main components:
1. Frontend (React + TypeScript)
2. Backend (Node.js + Express)

Frontend
--------
Location: /frontend
- Built with React 19 and TypeScript
- Uses Material-UI (MUI) for modern UI components
- Features:
  * Modern, responsive user interface
  * React Router for navigation
  * Markdown support for content rendering
  * TypeScript for type safety

Backend
-------
Location: /backend2
- Node.js server with Express
- Features:
  * RESTful API endpoints
  * Google Generative AI integration
  * CORS support
  * Environment variable configuration

Getting Started
--------------
1. Frontend Setup:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

2. Backend Setup:
   ```bash
   cd backend2
   npm install
   npm run dev
   ```

Prerequisites
------------
- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)
- Google AI API key (for backend functionality)

Environment Setup
---------------
1. Create a .env file in the backend2 directory with the following variables:
   ```
   GEMINI_API_KEY=your_api_key_here
   PORT=3001
   ```

2. Important Security Notes:
   - Never commit .env files to version control
   - Keep your API keys secure and private
   - Use environment variables for all sensitive information
   - The .gitignore file is configured to prevent committing sensitive files

Development
----------
- Frontend runs on: http://localhost:5173 (default Vite port)
- Backend runs on: http://localhost:3000 (default Express port)

Building for Production
---------------------
Frontend:
```bash
cd frontend
npm run build
```

Backend:
```bash
cd backend2
npm start
```

Dependencies
-----------
Frontend:
- React 19
- Material-UI 7
- React Router 7
- TypeScript
- Vite

Backend:
- Express
- Google Generative AI
- CORS
- dotenv
- body-parser

Security Best Practices
---------------------
1. Environment Variables:
   - All sensitive configuration is stored in .env files
   - .env files are excluded from version control
   - Use .env.example to document required variables

2. API Keys:
   - Never hardcode API keys in the source code
   - Use environment variables for all API keys
   - Rotate API keys regularly
   - Use appropriate API key restrictions

3. Version Control:
   - .gitignore is configured to exclude:
     * Environment files (.env)
     * Dependencies (node_modules)
     * Build outputs (dist, build)
     * IDE files (.vscode, .idea)
     * System files (.DS_Store, Thumbs.db)
     * Log files
     * Temporary files
