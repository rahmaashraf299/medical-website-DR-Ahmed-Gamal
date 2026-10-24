# websiteahmed

## Project Overview
websiteahmed is a responsive, multilingual frontend web application built with **React** and **Vite**. It provides medical information, video galleries, podcasts, and pregnancy‑related resources in both Arabic and English. Users can browse videos by category, search, and watch Instagram Reels directly within the app.

**Live Demo:** [View Website](https://drahmedgamal.surge.sh/)

## Technologies Used
- React 19
- Vite 8
- Tailwind CSS 4
- Framer Motion
- Lucide‑react
- React Router DOM 7
- JavaScript (ESM)

## Features
- Bilingual interface (Arabic ⇄ English) via a custom language context
- Video gallery with category filtering and full‑text search
- Embedded Instagram Reels playback in a modal lightbox
- Responsive layout for mobile, tablet, and desktop
- Animations powered by Framer Motion
- Icon set from Lucide‑react
- Dark‑mode ready styling with Tailwind CSS

## Project Structure (simplified)
```
websiteahmed/
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  ├─ context/
│  ├─ data/
│  ├─ pages/
│  ├─ translations/
│  ├─ App.jsx
│  ├─ App.css
│  ├─ index.css
│  └─ main.jsx
├─ scripts/
│  └─ download‑thumbnails.js
├─ vite.config.js
├─ package.json
├─ .gitignore
└─ README.md
```

## Prerequisites
- Node.js v18 or newer
- npm (or yarn)
- Git (for cloning)

## Installation & Setup
```bash
# Clone the repository (replace <your-username> with your GitHub username)
git clone https://github.com/<your-username>/websiteahmed.git

# Enter the project directory
cd websiteahmed

# Install dependencies
npm install
```

## Running the Application
- Development server (hot‑module reloading):
```bash
npm run dev
```
  Opens http://localhost:5173 in your browser.
- Production build:
```bash
npm run build
```
  Outputs compiled files to the `dist/` directory.
- Preview the production build:
```bash
npm run preview
```
- Lint the code:
```bash
npm run lint
```

## Scripts (from `package.json`)
| Script   | Description |
|----------|-------------|
| `dev`    | Starts Vite dev server |
| `build`  | Generates optimized production build |
| `preview`| Serves the production build locally |
| `lint`   | Runs Oxlint for code quality |

## Environment Variables
The project does not require any environment variables.

