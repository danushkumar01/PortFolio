# Danush Kumar K — Portfolio

A modern, responsive developer portfolio built with React, Tailwind CSS, and Framer Motion. Features smooth animations, dark theme, and a clean minimal design.

## Live Demo

> _Coming soon — deploy on Vercel, Netlify, or Firebase Hosting_

## Tech Stack

| Category  | Technologies                        |
| --------- | ----------------------------------- |
| Framework | React 19, Vite                      |
| Styling   | Tailwind CSS 4, PostCSS             |
| Animation | Framer Motion                       |
| Icons     | Lucide React                        |
| Linting   | ESLint                              |

## Features

- Responsive design across mobile, tablet, and desktop
- Smooth scroll animations with Framer Motion
- Dark theme with animated gradient backgrounds
- Modular component architecture
- Single data file for easy content updates
- Skills grouped by category with icons
- Project cards with live demo and source links
- Contact section with email and social links

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/danushkumar01/portfolio.git
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

The production build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── public/
├── src/
│   ├── App.jsx               # All components (Navbar, Hero, About, Skills, Projects, Contact, Footer)
│   ├── App.css               # Custom styles and gradient animations
│   ├── main.jsx              # Entry point
│   ├── index.css             # Global styles
│   └── data/
│       └── portfolioData.js  # All portfolio content (edit this to customize)
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Customization

All content is managed in `src/data/portfolioData.js`:

- **personalInfo** — Name, role, tagline, description, email, location
- **socialLinks** — GitHub, LinkedIn, etc.
- **skills** — Grouped by category (Backend, Frontend, Database, Currently Learning)
- **projects** — Title, description, tags, live URL, GitHub URL
- **navLinks** — Navigation menu items

## License

MIT

---

Built by [Danush Kumar K](https://github.com/danushkumar01)
