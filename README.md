# DEMA Website (Vite + React + MUI)

Starter site scaffold for DEMA (Digital Enterprises Management Association) using Vite, React and MUI with a navy-blue theme and reusable components (Header, Footer, Layout).

## Getting Started

1. Install dependencies

```bash
npm install
```

2. Run dev server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Project Structure

- `index.html` - app entry
- `package.json` - project metadata and scripts
- `src/main.jsx` - bootstraps React and MUI theme
- `src/theme.js` - central MUI theme (navy blue)
- `src/styles.css` - global styles
- `src/App.jsx` - top-level app with routing
- `src/components/` - Header, Footer, Layout (reusable across sites)
- `src/pages/` - example pages (Home, About, Events)

## Notes

- Modify `src/theme.js` to change primary/navy color or typography
- Components are intentionally simple and reusable so they can be adapted for future sites
- Uses React Router for page navigation

## Prerequisites

Before installing dependencies, make sure you have Node.js and npm installed:

```bash
node --version
npm --version
```

Recommended: Node.js 20+ and the corresponding npm that ships with it. If you don't have Node/npm installed or need to upgrade:

- [Node.js download & install](https://nodejs.org/en/download/)
- [npm documentation](https://docs.npmjs.com/)

For version management (recommended):

- [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm)

## License

This repository is for DEMA internal use.
