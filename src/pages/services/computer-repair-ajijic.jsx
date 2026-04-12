import SEO from "../../components/SEO.jsx";
import { useLocation } from "react-router-dom";
import { wa } from "../../utils/whatsapp.js";

export default function computerRepair({ lang }) {
  // This page uses the global `lang` prop passed from App.jsx.
  // Do NOT detect language here to avoid inconsistencies across pages.
  const isEnglish = lang === "en";

  const location = useLocation();
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
          onClick={() => window.history.back()}
          className="mb-6 text-sm text-primary hover:underline"
          aria-label="Go back"
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
          <a
            href="/#contact"
            className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold text-center hover:bg-primary hover:text-white transition"
          >
            {isEnglish ? "Tell us what’s happening" : "Cuéntanos qué pasa"}
          </a>
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

        {/* SERVICIOS */}
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
      </section>
    </>
  );
}
