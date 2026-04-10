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
            ? "Laptop Repair in Ajijic | jb.repair"
            : "Reparación de laptops en Ajijic | jb.repair"
        }
        description={
          isEnglish
            ? "Fix slow laptops, system errors, and hardware issues in Ajijic. Fast, on-site service."
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
          {isEnglish
            ? "Laptop repair in Ajijic – on-site service"
            : "Reparación de laptops en Ajijic a domicilio"}
        </h1>

        <p className="text-lg text-gray-900 dark:text-gray-100 mb-4">
          {isEnglish
            ? "We fix slow, broken, or malfunctioning laptops — directly at your home in Ajijic. Fast diagnosis and reliable solutions."
            : "Reparamos laptops lentas, dañadas o con fallas — directamente en tu hogar en Ajijic. Diagnóstico rápido y soluciones confiables."}
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
            {isEnglish ? "Contact via form" : "Contactar por formulario"}
          </a>
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400">
          {isEnglish
            ? "We usually reply within minutes"
            : "Respondemos en minutos"}
        </p>

        {/* SERVICIOS */}
        <div className="mt-12 space-y-4">
          <h2 className="text-2xl font-semibold">
            {isEnglish
              ? "What problems do we fix?"
              : "¿Qué problemas solucionamos?"}
          </h2>

          <ul className="list-disc pl-6 text-gray-900 dark:text-gray-100 space-y-2">
            <li>
              {isEnglish
                ? "Slow or freezing laptop"
                : "Laptop lenta o congelándose"}
            </li>
            <li>
              {isEnglish ? "Laptop not turning on" : "Equipo que no enciende"}
            </li>
            <li>{isEnglish ? "Overheating issues" : "Sobrecalentamiento"}</li>
            <li>
              {isEnglish ? "Upgrade to SSD" : "Cambio de disco duro a SSD"}
            </li>
            <li>
              {isEnglish
                ? "System reinstall without data loss"
                : "Formateo sin pérdida de archivos"}
            </li>
            <li>
              {isEnglish
                ? "System errors (Windows / macOS)"
                : "Errores de sistema (Windows / macOS)"}
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
