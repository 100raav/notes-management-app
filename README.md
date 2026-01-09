# 📝 Notes Management App (React + Vite)

A clean, modern, and fully functional **Notes Management Application** built using **React JS** and **Vite**.  
This project was developed as part of a **React JS internship assessment**, with a focus on **React fundamentals**, **component-based architecture**, and **UI state management**.

---

## 🌟 Preview

🚀 **Live Application:**  
🔗 https://notes-management-app-t3a2.vercel.app/

---

## 🚀 Features

- ➕ Add notes with a required title and optional description  
- ➕ Persistent storage of notes using localstorage
- 📋 View notes in a clean card-based layout  
- ❌ Delete notes instantly  
- ⏳ Loading state on initial render  
- 📭 Empty state when no notes exist  
- ⚠️ Inline validation without browser alerts  
- 🎨 Responsive and visually appealing UI  
- ✨ Smooth hover and transition effects  

---

## 🧠 Tech Stack

- **React JS**
- **Vite**
- **JavaScript (ES6+)**
- **CSS**

> Built strictly using React fundamentals.  

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── NoteForm.jsx      # Form for adding new notes
│   ├── NoteList.jsx      # Container for displaying all notes
│   ├── NoteItem.jsx      # Individual note component
│   ├── Loader.jsx        # Loading spinner component
│   └── EmptyState.jsx   # Empty state display
├── App.jsx               # Main application component
├── main.jsx              # Application entry point
└── index.css             # Global styles


## State Management Flow

graph LR
    A[App.jsx] --> B[useState<br/>notes, loading];
    B --> C[NoteForm];
    B --> D[NoteList];
    C --> E[addNote handler];
    D --> F[deleteNote handler];
    E --> B;
    F --> B;

## 🎯 UI States Implemented

| State | Description |
|-----|-------------|
Loading | Displayed on app startup |
Empty | Shown when no notes exist |
Error | Inline validation for empty title |
Disabled Button | Prevents invalid submissions |

---

## ▶️ Getting Started

# Prerequisites

Node.js (v16 or higher), 
npm or yarn

Installation
Clone the repository

bash
git clone https://github.com/yourusername/notes-management-app.git
cd notes-management-app
Install dependencies

bash
npm install
# or
yarn install
Start development server

bash
npm run dev
# or
yarn dev
Open in browser

text
http://localhost:5173
