# Easy First Aid Backend

This is the backend server for the Easy First Aid application. It provides a chat interface that integrates with Google's Gemini API to provide first aid guidance in different modes (Kids and Elderly).

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with the following variables:
```
PORT=3001
GEMINI_API_KEY=your_gemini_api_key_here
```

3. Start the server:
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

## API Endpoints

### POST /api/chat
Send a chat message to the AI assistant.

Request body:
```json
{
  "message": "string",
  "mode": "kids" | "elderly",
  "topic": "string" (optional)
}
```

Response:
```json
{
  "response": "string"
}
```

### GET /api/health
Health check endpoint.

Response:
```json
{
  "status": "ok"
}
```

## Features

- Supports two modes: Kids and Elderly
- Customized responses based on the selected mode
- Topic-specific context for more relevant responses
- Error handling and logging
- CORS enabled for frontend integration
- Powered by Google's Gemini AI 