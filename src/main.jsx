// Node modules
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Project files
import App from "./App.jsx";
import "./styles/style.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
