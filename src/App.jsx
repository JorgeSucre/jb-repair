import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// Pages
import Home from "./pages/home/Home.jsx";

// Services
import ComputerRepair from "./pages/services/computer-repair-ajijic.jsx";
import PhoneRepair from "./pages/services/phone-repair-ajijic.jsx";
import WifiService from "./pages/services/wifi-problems-ajijic.jsx";
import SecurityCameras from "./pages/services/security-cameras-ajijic.jsx";

// Hubs
import DeviceRepair from "./pages/hubs/device-repair.jsx";
import TechSupport from "./pages/hubs/tech-support.jsx";

// Header
import Header from "./components/Header.jsx";

function getInitialLang() {
  if (typeof window === "undefined") return "es";
  const saved = window.localStorage.getItem("lang");
  if (saved === "en" || saved === "es") return saved;
  return window.navigator.language.startsWith("es") ? "es" : "en";
}

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  const saved = window.localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function App() {
  const location = useLocation();
  const [lang, setLang] = useState(getInitialLang);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    if (typeof document !== "undefined") {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      document.documentElement.lang = lang;
    }
    if (typeof window !== "undefined") {
      window.localStorage.setItem("lang", lang);
      window.localStorage.setItem("theme", theme);
    }
  }, [lang, theme]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-primary/5 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Controls */}
      <Header lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />

      <main>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home lang={lang} />} />

          {/* Services */}
          <Route
            path="/computer-repair-ajijic"
            element={<ComputerRepair lang={lang} />}
          />
          <Route
            path="/phone-repair-ajijic"
            element={<PhoneRepair lang={lang} />}
          />
          <Route
            path="/wifi-problems-ajijic"
            element={<WifiService lang={lang} />}
          />
          <Route
            path="/security-cameras-ajijic"
            element={<SecurityCameras lang={lang} />}
          />

          {/* Hubs */}
          <Route
            path="/device-repair-ajijic"
            element={<DeviceRepair lang={lang} />}
          />
          <Route
            path="/tech-support-ajijic"
            element={<TechSupport lang={lang} />}
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}
