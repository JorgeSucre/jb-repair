import SEO from "../../components/SEO.jsx";
import { useLocation } from "react-router-dom";
import { wa } from "../../utils/whatsapp.js";

export default function PhoneRepair({ lang }) {
  // Use global language from App.jsx (single source of truth)
  const isEnglish = lang === "en";
  const location = useLocation();
  const url = `https://jbrepair.info${location.pathname}`;

  return (
    <>
      <SEO
        title={
          isEnglish
            ? "Phone Repair in Ajijic | Screen, Battery & Charging Fix"
            : "Reparación de celulares en Ajijic | jb.repair"
        }
        description={
          isEnglish
            ? "Phone repair in Ajijic. Fix screens, battery, and charging issues. Same-day service."
            : "Reparación de celulares en Ajijic. Pantallas, batería y problemas de carga con servicio rápido a domicilio."
        }
        url={url}
        locale={isEnglish ? "en_US" : "es_MX"}
      />

      {/* Main container */}
      <section className="py-12 md:py-16 px-4 max-w-4xl mx-auto space-y-6">
        {/* Back button */}
        <button
          onClick={() => window.history.back()}
          className="text-sm text-primary hover:underline"
          aria-label={isEnglish ? "Go back" : "Regresar"}
        >
          {isEnglish ? "← Back" : "← Regresar"}
        </button>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-primary">
          <span className="block">
            {isEnglish
              ? "Phone problems in Ajijic"
              : "Problemas con tu celular en Ajijic"}
          </span>
          <span className="block">
            {isEnglish ? "We fix them fast" : "Los solucionamos rápido"}
          </span>
        </h1>

        {/* Intro */}
        <p className="text-lg text-gray-900 dark:text-gray-100">
          {isEnglish
            ? "We fix screens, battery, and charging issues."
            : "Reparamos pantalla, batería y problemas de carga."}
          <br />
          {isEnglish
            ? "On-site service in Ajijic."
            : "Servicio a domicilio en Ajijic."}
        </p>

        {/* Social proof */}
        <p className="text-sm text-green-600">
          {isEnglish
            ? "⭐ 1000+ devices repaired • Same-day service"
            : "⭐ +1000 equipos reparados • Atención el mismo día"}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* WhatsApp CTA */}
          <a
            href={wa(
              isEnglish
                ? "Hi, I need help with my phone in Ajijic"
                : "Hola, necesito ayuda con mi celular en Ajijic",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:opacity-90 transition text-center"
          >
            {isEnglish ? "Fix my phone now" : "Arreglar mi celular ahora"}
          </a>

          {/* Contact form CTA */}
          <a
            href="/#contact"
            className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold text-center hover:bg-primary hover:text-white transition"
          >
            {isEnglish ? "Tell us what’s happening" : "Cuéntanos qué pasa"}
          </a>
        </div>

        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold">
            {isEnglish
              ? "Phone repair service in Ajijic"
              : "Reparación de celulares en Ajijic"}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-md">
            {isEnglish
              ? "We diagnose and fix phone issues fast, restoring performance and reliability."
              : "Diagnosticamos y solucionamos problemas de celulares rápidamente, mejorando su funcionamiento."}
          </p>
        </div>

        {/* Services section */}
        <div className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold">
            {isEnglish ? "What do we repair?" : "¿Qué reparamos?"}
          </h2>

          <ul className="list-disc pl-6 text-gray-900 dark:text-gray-100 space-y-1">
            <li>{isEnglish ? "Screen replacement" : "Pantalla"}</li>
            <li>{isEnglish ? "Battery" : "Batería"}</li>
            <li>{isEnglish ? "Charging issues" : "Problemas de carga"}</li>
            <li>{isEnglish ? "System errors" : "Errores del sistema"}</li>
            <li>{isEnglish ? "Water damage" : "Daño por agua"}</li>
          </ul>
        </div>
      </section>
    </>
  );
}
