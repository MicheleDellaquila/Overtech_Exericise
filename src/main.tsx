import "./index.css";
import { StrictMode, type JSX } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const withStrictMode = (comp: JSX.Element) => {
  const isDevEnv = import.meta.env.DEV;
  return isDevEnv ? <StrictMode>{comp}</StrictMode> : comp;
};

createRoot(document.getElementById("root")!).render(withStrictMode(<App />));
