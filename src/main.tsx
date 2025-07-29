import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { HeroProvider } from './context/HeroContext';
import { ScrollProvider } from "./context/ScrollContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <HeroProvider>
        <ScrollProvider>
          <App />
        </ScrollProvider>
      </HeroProvider>
  </React.StrictMode>
);