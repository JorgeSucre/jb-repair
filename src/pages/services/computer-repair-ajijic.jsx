import SEO from "../../components/SEO.jsx";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import { wa } from "../../utils/whatsapp.js";
import { goToContact } from "../../utils/navigation.js";

export default function ComputerRepair({ lang }) {
  // This page uses the global `lang` prop passed from App.jsx.
  // Do NOT detect language here to avoid inconsistencies across pages.
  const isEnglish = lang === "en";

  const location = useLocation();
  const navigate = useNavigate();
  const url = `https://jbrepair.info${location.pathname}`;

  return (
    <>
      <SEO
        title={
          isEnglish
            ? "Computer Repair in Ajijic | Laptop & Mac Repair"
            : "Reparación de laptops en Ajijic | jb.repair"
        }
        description={
          isEnglish
            ? "Computer repair in Ajijic. Fix slow laptops, system errors, and hardware issues. Same-day service."
            : "Reparación de laptops en Ajijic. Solucionamos equipos lentos, errores y fallas con servicio a domicilio."
        }
        url={url}
        locale={isEnglish ? "en_US" : "es_MX"}
      />

      <section className="py-12 md:py-16 px-4 max-w-4xl mx-auto space-y-6">
        {/* HERO */}
        <button
          type="button"
          onClick={() => window.history.back()}
          className="mb-6 text-sm text-primary hover:underline"
          aria-label={isEnglish ? "Go back" : "Regresar"}
        >
          {isEnglish ? "← Back" : "← Regresar"}
        </button>

        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          <span className="block">
            {isEnglish
              ? "Computer problems in Ajijic"
              : "Problemas con tu computadora en Ajijic"}
          </span>
          <span className="block">
            {isEnglish ? "We fix them fast" : "Los solucionamos rápido"}
          </span>
        </h1>

        <p className="text-lg text-gray-900 dark:text-gray-100 mb-4">
          {isEnglish
            ? "We fix slow, broken, or crashing computers."
            : "Reparamos computadoras lentas, dañadas o con fallas."}
          <br />
          {isEnglish
            ? "On-site service in Ajijic."
            : "Servicio a domicilio en Ajijic."}
        </p>

        <p className="text-sm text-green-600 mb-6">
          {isEnglish
            ? "⭐ 1000+ devices repaired • Same-day service"
            : "⭐ +1000 equipos reparados • Atención el mismo día"}
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          {/* WhatsApp CTA (fast contact) */}
          <a
            href={wa(
              isEnglish
                ? "Hi, I need help with my laptop in Ajijic"
                : "Hola, necesito ayuda con mi laptop en Ajijic",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-primary text-center"
          >
            {isEnglish ? "Fix my laptop now" : "Arreglar mi laptop ahora"}
          </a>

          {/* Form CTA (more formal contact) */}
          <button
            type="button"
            onClick={() => goToContact(navigate)}
            className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold text-center hover:bg-primary hover:text-white transition"
          >
            {isEnglish ? "Tell us what’s happening" : "Cuéntanos qué pasa"}
          </button>
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400">
          {isEnglish ? "We reply in minutes" : "Respondemos en minutos"}
        </p>

        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold">
            {isEnglish
              ? "Computer repair and laptop service in Ajijic"
              : "Reparación de computadoras y laptops en Ajijic"}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-md">
            {isEnglish
              ? "We diagnose and fix computer issues fast, improving speed, performance, and reliability."
              : "Diagnosticamos y solucionamos problemas de computadoras rápidamente, mejorando velocidad y rendimiento."}
          </p>
        </div>

        <div className="mt-12 space-y-4">
          <h2 className="text-2xl font-semibold">
            {isEnglish
              ? "What problems do we fix?"
              : "¿Qué problemas solucionamos?"}
          </h2>

          <ul className="list-disc pl-6 text-gray-900 dark:text-gray-100 space-y-2">
            <li>{isEnglish ? "Slow computer" : "Computadora lenta"}</li>
            <li>{isEnglish ? "Won’t turn on" : "No enciende"}</li>
            <li>{isEnglish ? "Overheating" : "Sobrecalentamiento"}</li>
            <li>{isEnglish ? "SSD upgrade" : "Upgrade a SSD"}</li>
            <li>
              {isEnglish ? "System reinstall" : "Reinstalación del sistema"}
            </li>
            <li>{isEnglish ? "System errors" : "Errores del sistema"}</li>
          </ul>
        </div>

        {/* TOOLKIT SECTION */}
        <div className="mt-16 p-5 md:p-7 rounded-3xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 border border-gray-200 dark:border-gray-800 shadow-2xl relative overflow-hidden backdrop-blur-sm">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none opacity-70"></div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 shadow-sm">
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                  />
                </svg>
                Built by jb.repair • Open Source
              </span>

              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                {isEnglish
                  ? "Professional Mac maintenance toolkit"
                  : "Herramienta profesional de mantenimiento para Mac"}
              </h3>

              <p className="text-sm md:text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 max-w-lg">
                {isEnglish
                  ? "jb-toolkit is an open-source macOS maintenance and optimization toolkit built by jb.repair. It helps clean caches, run diagnostics, improve system performance, and automate common maintenance tasks directly from Terminal."
                  : "jb-toolkit es una herramienta de mantenimiento y optimización para macOS, desarrollada por jb.repair y disponible como proyecto de código abierto. Permite limpiar cachés, ejecutar diagnósticos, mejorar el rendimiento del sistema y automatizar tareas comunes directamente desde la Terminal."}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {isEnglish
                  ? "Free, transparent, and maintained by jb.repair."
                  : "Gratis, transparente y mantenido por jb.repair."}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 md:min-w-[220px] w-full md:w-auto">
              <a
                href="https://github.com/JorgeSucre/jb-ToolKit/archive/refs/heads/main.zip"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-primary text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 hover:bg-primary/90 transition-all duration-200 text-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                {isEnglish ? "Download Toolkit" : "Descargar herramienta"}
              </a>

              <a
                href="https://github.com/JorgeSucre/jb-ToolKit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/60 text-gray-700 dark:text-gray-200 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-[1.02] active:scale-95 transition-all duration-200 text-sm shadow-sm"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                {isEnglish ? "View on GitHub" : "Ver en GitHub"}
              </a>
            </div>
          </div>

          {/* Quick Terminal Run Block */}
          <div className="mt-6 p-4 rounded-2xl bg-gray-950 text-gray-200 font-mono text-xs md:text-sm border border-gray-800 shadow-inner flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 overflow-x-auto">
            <span className="select-all whitespace-nowrap">
              git clone https://github.com/JorgeSucre/jb-ToolKit.git && cd
              jb-ToolKit
            </span>
            <button
              onClick={() => {
                navigator.clipboard.writeText(
                  "git clone https://github.com/JorgeSucre/jb-ToolKit.git && cd jb-ToolKit",
                );
                alert(
                  isEnglish
                    ? "Command copied to clipboard!"
                    : "¡Comando copiado al portapapeles!",
                );
              }}
              className="text-gray-300 hover:text-white px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-150 shrink-0 text-xs font-semibold"
              title={isEnglish ? "Copy command" : "Copiar comando"}
            >
              {isEnglish ? "Copy" : "Copiar"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

ComputerRepair.propTypes = {
  lang: PropTypes.string.isRequired,
};
