import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
