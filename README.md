# About Me & My Town

A small React web app with two pages: **About Me** and **My Town**. The My Town page shows the live temperature for Halifax, Nova Scotia, with a picture that matches the weather and a button to switch between °C and °F.

**Live site:** https://stupendous-piroshki-66cafb.netlify.app
**GitHub repo:** https://github.com/ahanahp/REACT--ASSIGNMENT-1--A00497567

## What the app does
- **Two views with navigation:** the tabs at the top switch between About Me and My Town without reloading the page.
- **Live weather:** the app fetches the current temperature from the [Open-Meteo API](https://open-meteo.com/), which is free and needs no API key.
- **Image based on temperature:**
  - 10°C or below shows `cold.png`
  - 11 to 19°C shows `mild.png`
  - 20°C or above shows `sunny.png`
- **Temperature toggle:** the "Change to °F" button converts the temperature, and the same button switches it back to °C. The image is always chosen using the °C value, so it doesn't change when the unit changes.
- **Loading and error messages:** the page says "Loading weather…" while waiting and shows a message if the weather can't be loaded.

## Technologies
React, Vite, JavaScript, CSS, and the Open-Meteo API. The site is hosted on Netlify and the code is stored on GitHub.

## Project structure
```
src/
  App.jsx            navigation and page switching
  config.js          my details and my town's details
  main.jsx           app entry point
  styles.css         styling
  pages/
    About.jsx        About Me page
    MyTown.jsx       weather fetch, image logic, unit toggle
public/images/       cold.png, mild.png, sunny.png
```

## How to run it locally
1. Install [Node.js](https://nodejs.org).
2. Download or clone this repository.
3. In the project folder, run:
```
   npm install
   npm run dev
```
4. Open the address shown in the terminal, usually http://localhost:5173.

## Deployment
The site is deployed on Netlify and connected to this GitHub repository. Netlify rebuilds it automatically each time I push a change. Build command: `npm run build`. Publish directory: `dist`.
