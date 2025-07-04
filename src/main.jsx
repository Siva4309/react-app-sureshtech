import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Counter from "./Counter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <Counter initialScore={0} />
    <Counter initialScore={10} /> */}
  </StrictMode>
);
