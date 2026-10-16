import { useState } from "react";
import About from "./pages/About.jsx";
import MyTown from "./pages/MyTown.jsx";

const PAGES = { about: "About Me", town: "My Town" };

export default function App() {
  const [page, setPage] = useState("about");

  return (
    <div className="app">
      <header>
        <nav aria-label="Main">
          {Object.entries(PAGES).map(([key, label]) => (
            <button
              key={key}
              className={page === key ? "tab active" : "tab"}
              aria-current={page === key ? "page" : undefined}
              onClick={() => setPage(key)}
            >
              {label}
            </button>
          ))}
        </nav>
      </header>
      <main>{page === "about" ? <About /> : <MyTown />}</main>
    </div>
  );
}
