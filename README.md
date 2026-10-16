# About Me & My Town

A small React (Vite) app with two views: **About Me** and **My Town**. My Town shows the
current temperature from the [Open-Meteo API](https://open-meteo.com/) (no API key needed),
an image that matches the temperature, and a °C / °F toggle.

## Features
- Two views with working navigation (React state, no router needed)
- Weather fetched with `fetch` inside `useEffect`
- Conditional image: ≤ 10 °C → `cold.png`, 11–19 °C → `mild.png`, ≥ 20 °C → `sunny.png`
- "Change to °F" / "Change to °C" button (the image is always chosen from the °C value)
- Loading and error states

## Run locally
```bash
npm install
npm run dev
```

## Customize
- Edit `src/config.js` with your name, bio, town, and the town's latitude/longitude.
- The weather images (`cold.png`, `mild.png`, `sunny.png`) live in `public/images/`; swap them to change the look.

## Deploy (Netlify example)
1. Push this folder to GitHub.
2. On netlify.com choose **Add new site → Import from Git**.
3. Build command `npm run build`, publish directory `dist`.
Vercel works the same way. Put your live URL here: `https://YOUR-SITE-URL`

## Project structure
```
src/
  App.jsx          navigation + page switching
  config.js        personal and town details
  pages/About.jsx
  pages/MyTown.jsx weather fetch, conditional image, unit toggle
  styles.css
```

## AI disclosure
I used Claude (Anthropic) to generate the initial project scaffold, the React components
and the CSS. I then reviewed the code, replaced the placeholder content with my own
details and images, and deployed it myself. <!-- Edit this to describe what YOU actually did -->
