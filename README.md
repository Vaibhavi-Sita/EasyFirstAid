# 🩺 Easy First Aid

> **AI-Powered First Aid Assistant** – A modern web app that helps kids and older adults get quick, accessible, and reliable medical guidance during emergencies.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-20-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Backend-lightgrey?logo=express)
![MUI](https://img.shields.io/badge/MUI-7-blue?logo=mui)
![License](https://img.shields.io/badge/License-MIT-green.svg)

---

## 🖼️ Preview

<p align="center">
  <img src="resources/images/landing.png" alt="Landing Page" width="22%"/>
  <img src="resources/images/elder.png" alt="Elderly Option" width="22%"/>
  <img src="resources/images/elderuichat.png" alt="Categories" width="22%"/>
  <img src="resources/images/kiduichat.png" alt="Details View" width="22%"/>
</p>

---

## 🚀 Overview
Easy First Aid provides **AI-driven emergency instructions** through an intuitive and accessible web interface.  
It integrates **Google Generative AI** for intelligent response generation and supports **voice & text guidance** for first aid scenarios.

---

## 🏗️ Architecture

```
EasyFirstAid/
├── frontend/   # React + TypeScript + Vite + MUI
└── backend2/   # Node.js + Express + Google Generative AI
```

- **Frontend:** Modern, responsive UI with React, TypeScript, and Material-UI.  
- **Backend:** RESTful Express server integrated with Google’s Generative AI for contextual guidance.  
- **Security:** Environment variables handled via `.env`; CORS and API key isolation enforced.

---

## ⚙️ Quick Start

### Prerequisites
- [Node.js (LTS)](https://nodejs.org)
- npm (bundled with Node)
- Google AI API Key

### Run Locally
```bash
# Frontend
cd frontend
npm install
npm run dev

# Backend
cd backend2
npm install
npm run dev
```
Frontend → **http://localhost:5173**  
Backend → **http://localhost:3000**

---

## 🔐 Environment Setup
Create `.env` inside `backend2`:
```
GEMINI_API_KEY=your_api_key_here
PORT=3001
```

> 🧠 Keep `.env` private. Do not commit keys. Use `.env.example` to document required variables.

---

## 🧩 Tech Stack

| Layer | Tools |
|-------|--------|
| **Frontend** | React 19 · TypeScript 5 · Vite · Material UI 7 · React Router 7 |
| **Backend** | Node.js 20 · Express 5 · Google Generative AI · dotenv · CORS · body-parser |

---

## 🛡️ Highlights
- Built for **accessibility** (visual clarity, readable layout, responsive design).  
- **AI-powered** contextual answers with Google’s Generative AI.  
- Modular full-stack setup for easy scaling and deployment.  
- Secured API key and config management.

---

## 💡 Future Enhancements
- Voice-assisted interactions  
- AI-based image recognition for injuries  
- Offline-first mobile PWA support  
- Multi-language assistance  

---

👩‍💻 **Developed by [Sita Vaibhavi Gunturi](https://github.com/Vaibhavi-Sita)**  
Built with ❤️ using React, Node.js, and Google Generative AI.
