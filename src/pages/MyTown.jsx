import { useEffect, useState } from "react";
import { town } from "../config.js";

// Conditional rendering rule: <=10 cold, 11-19 mild, >=20 sunny (all in °C)
function pickImage(tempC) {
  if (tempC <= 10) return { src: "images/cold.png", alt: "Cold weather" };
  if (tempC < 20) return { src: "images/mild.png", alt: "Mild weather" };
  return { src: "images/sunny.png", alt: "Sunny weather" };
}

const toF = (c) => (c * 9) / 5 + 32;

export default function MyTown() {
  const [tempC, setTempC] = useState(null);
  const [unit, setUnit] = useState("C");
  const [error, setError] = useState(null);

  useEffect(() => {
    // Open-Meteo: free, no API key required
    const url =
      `https://api.open-meteo.com/v1/forecast?latitude=${town.latitude}` +
      `&longitude=${town.longitude}&current=temperature_2m&temperature_unit=celsius`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`Weather request failed (${res.status})`);
        return res.json();
      })
      .then((data) => setTempC(data.current.temperature_2m))
      .catch((err) => setError(err.message));
  }, []);

  // Always compare in °C so the image doesn't change when the unit toggles
  const image = tempC !== null ? pickImage(Math.round(tempC)) : null;
  const shown = tempC === null ? null : unit === "C" ? tempC : toF(tempC);

  return (
    <section className="card">
      <h1>{town.name}</h1>
      <p>{town.description}</p>

      <div className="weather">
        <h2>Right now</h2>
        {error && <p className="error">Couldn't load the weather: {error}</p>}
        {!error && tempC === null && <p>Loading weather…</p>}
        {image && (
          <>
            <img src={image.src} alt={image.alt} width="220" />
            <p className="temp">
              {shown.toFixed(1)}°{unit}
            </p>
            <button onClick={() => setUnit(unit === "C" ? "F" : "C")}>
              Change to °{unit === "C" ? "F" : "C"}
            </button>
          </>
        )}
      </div>

      <h2>Worth knowing</h2>
      <ul>
        {town.facts.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </section>
  );
}
