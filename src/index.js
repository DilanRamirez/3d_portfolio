import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Logo } from "@pmndrs/branding";
import "./styles.css";

function Overlay() {
  return (
    <div className="intro-container">
      <div className="name-wrapper">
        <p className="title-name fullname">Dilan Ramirez</p>
        <p className="ocupation">Software Engineer</p>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
