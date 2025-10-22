# 🩺 Easy First Aid

**A Modern AI‑Powered First Aid Assistant**  
Helping kids and older adults get **quick, accessible, and reliable** medical guidance in emergencies.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-20-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Backend-lightgrey?logo=express)
![MUI](https://img.shields.io/badge/MUI-7-blue?logo=mui)
![License](https://img.shields.io/badge/License-MIT-green.svg)

---

## 🚀 Overview

**Easy First Aid** is a full‑stack web application that provides instant, easy‑to‑understand first aid guidance.  
Built for accessibility and responsiveness, it integrates **Google Generative AI** to deliver conversational help for emergency scenarios.

---

## 🏗️ Project Structure

```
EasyFirstAid/
├── frontend/   # React + TypeScript + Vite
└── backend2/   # Node.js + Express + Google AI Integration
```

---

## 🎨 Frontend (React + TypeScript)

**Location:** `frontend`

**Features**
- Modern, responsive UI with Material UI
- Intuitive navigation via React Router
- Markdown rendering for formatted first aid content
- TypeScript for strong typing and scalability

**Tech Stack**
- React 19
- Vite
- Material UI 7
- React Router 7
- TypeScript

---

## ⚙️ Backend (Node.js + Express)

**Location:** `backend2`

**Features**
- RESTful API endpoints for first aid categories
- Integrated with Google Generative AI for natural guidance
- CORS and environment variable configuration
- Modular structure for easy maintenance

**Tech Stack**
- Node.js + Express
- Google Generative AI
- dotenv, CORS, body-parser

---

## 🧰 Getting Started

### Prerequisites
- [Node.js (LTS)](https://nodejs.org)
- npm (comes with Node)
- Google AI API key

### Setup and Run

**Frontend**
```bash
cd frontend
npm install
npm run dev
```
Runs on **http://localhost:5173**

**Backend**
```bash
cd backend2
npm install
npm run dev
```
Runs on **http://localhost:3000**

---

## 🔐 Environment Setup

Create a `.env` file in `backend2`:

```bash
GEMINI_API_KEY=your_api_key_here
PORT=3001
```

**Security Tips**
- Never commit `.env` files
- Keep API keys private
- Use `.env.example` to document required variables
- Rotate keys periodically

---

## 🛠️ Build for Production

**Frontend**
```bash
cd frontend
npm run build
```

**Backend**
```bash
cd backend2
npm start
```

---

## 🧩 Dependencies Summary

| Component   | Key Libraries                                               |
|------------|--------------------------------------------------------------|
| Frontend   | React 19, TypeScript, Vite, Material UI, React Router        |
| Backend    | Express, Google Generative AI, dotenv, CORS, body-parser     |

---

## 🛡️ Security and Version Control

`.gitignore` includes:
- `.env` files
- `node_modules/`, `dist/`, `build/`
- IDE configs (`.vscode`, `.idea`)
- System files (`.DS_Store`, `Thumbs.db`)
- Logs and temporary files

---

## 💡 Future Enhancements
- Voice‑assisted interaction
- AI‑powered image recognition for injuries
- Offline‑first mobile support
- Multi‑language assistance

---

**Developed by [Sita Vaibhavi Gunturi](https://github.com/Vaibhavi-Sita)**  
Built with ❤️ using React, Node.js, and Google Generative AI.
