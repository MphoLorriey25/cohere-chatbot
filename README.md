# 🤖 Cohere Chatbot by Mpho

A beautiful, simple AI chatbot powered by [Cohere](https://cohere.ai) language generation API.

---

## 🔗 Live Demo

Check out the chatbot here:  
[https://cohere-chatbot-t4mr.vercel.app/](https://cohere-chatbot-t4mr.vercel.app/)

---

## 🚀 Features

- Modern, responsive UI with smooth chat bubbles
- Powered by Cohere's API for natural language responses
- Lightweight and easy to deploy on Vercel or similar platforms
- Personalized branding with creator name "Mpho"
- Simple code structure for easy customization and extension

---

## 🛠️ Setup and Deployment

### Prerequisites

- Node.js environment (for local testing)
- [Cohere API key](https://dashboard.cohere.ai/api-keys)
- Vercel account for deployment

### Environment Variables

Create a `.env` file or add in your Vercel dashboard:

```

COHERE\_API\_KEY=your\_cohere\_api\_key\_here

```

### Run Locally

1. Clone the repository
2. Install dependencies (if you add any backend packages)
3. Start your development server (or deploy on Vercel)

### Deploy on Vercel

1. Push your repo to GitHub
2. Connect GitHub repo to Vercel
3. Add the environment variable `COHERE_API_KEY` in Vercel project settings
4. Deploy and enjoy!

---

## 🧑‍💻 Code Overview

- `public/index.html` — Frontend UI with TailwindCSS styling
- `public/main.js` — Frontend JavaScript handling chat interaction and UI updates
- `api/chat.js` — Serverless function to proxy requests to Cohere API and return chatbot replies

---

## 🎨 Customization

- Change the gradient and colors in `index.html` for your brand
- Modify chat bubble styles in `main.js`
- Extend backend in `api/chat.js` to add context or memory

---

## 💬 Feedback and Contributions

Feel free to open issues or pull requests!  
Created with ❤️ by Mpho.

---

## 📄 License

MIT License © 2025 Mpho
```

---
