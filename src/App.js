import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a
            href="https://github.com/cdebadereau/react-weather-application"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Open-sourced code
          </a>{" "}
          made by Cyrielle de Badereau.{" "}
        </footer>
      </div>
    </div>
  );
}
