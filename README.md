# Sentiment & Emotion Analysis Dashboard using DistilBERT

A React-based web application that allows users to upload PDF documents and analyze their sentiment and emotional content using the DistilBERT NLP model.

## Overview

This project provides a clean frontend interface for PDF document ingestion, designed to connect with a DistilBERT-powered backend for real-time sentiment and emotion analysis. Users can upload any PDF, which is then processed and analyzed to extract emotional tone and sentiment scores.

## Features

- 📄 **PDF Upload Interface** — Simple file picker to upload PDF documents
- 🔍 **Sentiment Analysis** — Detects positive, negative, or neutral sentiment using DistilBERT
- 🎭 **Emotion Detection** — Identifies emotions (joy, sadness, anger, fear, surprise, etc.)
- ⚡ **Fast Inference** — Powered by DistilBERT, a lightweight and efficient transformer model
- 📊 **Result Display** — Shows analysis response directly in the UI

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, JavaScript |
| HTTP Client | Axios |
| NLP Model | DistilBERT (via backend API) |
| Styling | CSS |
| Build Tool | Create React App |

## Project Structure

```
pdf-uploader/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── favicon.ico
├── src/
│   ├── App.js           # Root component
│   ├── App.css          # App styles
│   ├── PdfUploader.js   # PDF upload & API integration
│   ├── index.js         # Entry point
│   └── index.css        # Global styles
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js >= 14
- npm or yarn
- A running DistilBERT backend API (set your endpoint in `PdfUploader.js`)

### Installation

```bash
# Clone the repository
git clone https://github.com/Akankshamasih05/Sentiment-Emotion-Analysis-Dashboard-using-DistilBERT.git

# Navigate into the project
cd Sentiment-Emotion-Analysis-Dashboard-using-DistilBERT

# Install dependencies
npm install

# Start the development server
npm start
```

The app will run at `http://localhost:3000`.

### Backend Configuration

In `src/PdfUploader.js`, replace the placeholder with your DistilBERT API endpoint:

```js
const response = await axios.post('YOUR_ENDPOINT_URL', formData, config);
```

## How It Works

1. User selects a PDF file via the upload interface
2. The file is sent as `multipart/form-data` to the DistilBERT backend
3. The backend processes the text and returns sentiment/emotion predictions
4. Results are displayed in the UI

## Available Scripts

```bash
npm start       # Run in development mode
npm run build   # Build for production
npm test        # Run tests
```

## Author

**Akankshamasih05**
