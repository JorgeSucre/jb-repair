export default function Header({ lang, setLang, theme, setTheme }) {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm">
      {/* Logo / Brand */}
      <a
        href="/"
        className="flex items-center gap-3 text-primary font-bold text-lg hover:opacity-90 transition"
      >
        <img
          src="/assets/logo.svg"
          alt="jb.repair logo"
          className="w-8 h-8 object-contain"
        />
        <span className="text-lg md:text-xl tracking-tight">
          jb.repair — Repair in Ajijic
        </span>
      </a>

      {/* Controls */}
      <div className="flex gap-2 items-center">
        <button
          onClick={() => setLang(lang === "es" ? "en" : "es")}
          className="bg-primary text-white px-3 py-1.5 rounded-md text-sm font-semibold shadow-sm hover:opacity-90 transition"
        >
          {lang === "es" ? "EN 🇺🇸🇨🇦" : "ES 🇲🇽"}
        </button>

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="border border-gray-300 dark:border-gray-600 px-3 py-1.5 rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
}
