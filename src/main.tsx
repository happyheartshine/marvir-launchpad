import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Set initial theme before React renders to prevent flash
const getInitialTheme = (): "dark" | "light" => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }
  return "dark";
};

const initialTheme = getInitialTheme();
document.documentElement.classList.remove("light", "dark");
document.documentElement.classList.add(initialTheme);

createRoot(document.getElementById("root")!).render(<App />);
