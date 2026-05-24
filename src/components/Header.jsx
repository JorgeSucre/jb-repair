import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Header({ lang, setLang, theme, setTheme }) {
  const isSpanish = lang === "es";
  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-40 flex justify-between items-center px-4 sm:px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 shadow-sm backdrop-blur">
      {/* Logo / Brand */}
      <Link
        to="/"
        className="flex items-center gap-3 text-primary font-bold text-lg hover:opacity-90 transition"
        aria-label="jb.repair home"
      >
        <img
          src="/assets/logo.svg"
          alt="jb.repair logo"
          width="32"
          height="32"
          className="w-8 h-8 object-contain"
        />
        <span className="text-base sm:text-lg md:text-xl tracking-tight">
          jb.repair <span className="hidden sm:inline">- Repair in Ajijic</span>
        </span>
      </Link>

      {/* Controls */}
      <div className="flex gap-2 items-center">
        <button
          type="button"
          onClick={() => setLang(isSpanish ? "en" : "es")}
          className="bg-primary text-white px-3 py-1.5 rounded-md text-sm font-semibold shadow-sm hover:opacity-90 transition"
          aria-label={isSpanish ? "Switch to English" : "Cambiar a español"}
        >
          {isSpanish ? "EN" : "ES"}
        </button>

        <button
          type="button"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="border border-gray-300 dark:border-gray-600 px-3 py-1.5 rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? "Light" : "Dark"}
        </button>
      </div>
    </header>
  );
}

Header.propTypes = {
  lang: PropTypes.string.isRequired,
  setLang: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};
