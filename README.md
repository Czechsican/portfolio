# Portfolio

A single page app built with Vite, React, TypeScript and React Router, tested with Vitest and Testing Library.

## Set up

```sh
npm install react react-dom react-router-dom
npm install -D vite @vitejs/plugin-react typescript vitest @vitest/coverage-v8 jsdom \
  @testing-library/react @testing-library/jest-dom @testing-library/user-event \
  @types/react @types/react-dom
```

## Run

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm test` | Run the tests once |
| `npm run test:watch` | Run the tests as you edit |
| `npm run coverage` | Run the tests with a coverage report (also written to `coverage/index.html`) |
| `npm run typecheck` | Check types |
| `npm run build` | Typecheck and build to `dist/` |

## Edit your content

- Your name and tagline: `src/content/site.ts`
- Websites, photography and print projects: `src/content/projects.ts`
- About page copy: `src/pages/About.tsx`
- Images: put files in `public/images/` and reference them as `/images/file.jpg` with alt text. Projects without a cover show a halftone placeholder.

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/websites`, `/websites/:slug` | Website list and project pages |
| `/photography`, `/photography/:slug` | Photography list and series pages |
| `/print` | Print work (one page) |
| `/about` | About |

## Deploying

The app uses real URLs (not `#` URLs), so your host must serve `index.html` for any path that isn't a file. Netlify needs a `_redirects` file containing `/* /index.html 200`; Vercel and Cloudflare Pages have a single-page-app option.
