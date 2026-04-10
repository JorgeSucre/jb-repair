import SEO from "../../components/SEO.jsx";
import { Link } from "react-router-dom";
import { wa } from "../../utils/whatsapp.js";
import { useLocation } from "react-router-dom";

export default function DeviceRepair({ lang }) {
  const isEnglish = lang === "en";
  const location = useLocation();
  const url = `https://jbrepair.info${location.pathname}`;

  return (
    <>
      {/* ================= SEO ================= */}
      <SEO
        title={
          isEnglish
            ? "Laptop & Phone Repair in Ajijic | jb.repair"
            : "Reparación de laptops y celulares en Ajijic | jb.repair"
        }
        description={
          isEnglish
            ? "Laptop and phone repair in Ajijic. Fast, on-site service for computers and mobile devices."
            : "Reparación de laptops y celulares en Ajijic. Servicio rápido a domicilio para computadoras y dispositivos."
        }
        url={url}
        locale={isEnglish ? "en_US" : "es_MX"}
      />

      {/* ================= MAIN ================= */}
      <section className="py-12 md:py-16 px-4 max-w-5xl mx-auto space-y-6">
        {/* Back */}
        <button
          onClick={() => window.history.back()}
          className="text-sm text-primary hover:underline"
        >
          {isEnglish ? "← Back" : "← Regresar"}
        </button>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-primary">
          {isEnglish
            ? "Laptop & Phone Repair in Ajijic"
            : "Reparación de laptops y celulares en Ajijic"}
        </h1>

        {/* Social proof */}
        <p className="text-sm text-green-600">
          {isEnglish
            ? "⭐ 1000+ devices repaired • Same-day service"
            : "⭐ +1000 equipos reparados • Atención el mismo día"}
        </p>

        {/* Intro */}
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
          {isEnglish
            ? "We fix slow laptops, broken phones, and device issues fast — directly at your home in Ajijic."
            : "Reparamos laptops lentas, celulares dañados y problemas técnicos — directamente en tu hogar en Ajijic."}
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={wa(
              isEnglish
                ? "Hi, I need help with a device (laptop/phone) in Ajijic"
                : "Hola, necesito ayuda con un dispositivo (laptop/celular) en Ajijic",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-5 py-2.5 rounded-lg font-semibold shadow-md hover:opacity-90 transition text-center"
          >
            {isEnglish ? "Fix my device now" : "Arreglar mi equipo ahora"}
          </a>

          <a
            href="/#contact"
            className="border-2 border-primary text-primary px-5 py-2.5 rounded-lg font-semibold text-center hover:bg-primary hover:text-white transition"
          >
            {isEnglish ? "Contact via form" : "Contactar por formulario"}
          </a>
        </div>

        {/* Internal links (SEO boost) */}
        <div className="mt-6 text-sm text-gray-600 dark:text-gray-400 space-y-2">
          <p>
            {isEnglish
              ? "Looking for something specific?"
              : "¿Buscas algo más específico?"}
          </p>

          <div className="flex flex-col gap-1">
            <Link to="/wifi-problems-ajijic" className="text-primary underline">
              {isEnglish
                ? "Solve WiFi problems"
                : "Solucionar problemas de WiFi"}
            </Link>

            <Link to="/tech-support-ajijic" className="text-primary underline">
              {isEnglish ? "General tech support" : "Soporte técnico general"}
            </Link>
          </div>
        </div>

        {/* ================= SERVICES ================= */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {/* Laptops */}
          <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-bold mb-2">
              {isEnglish
                ? "💻 Laptop & Computer Repair"
                : "💻 Reparación de laptops"}
            </h2>

            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>
                •{" "}
                {isEnglish
                  ? "Slow or freezing computer"
                  : "Computadora lenta o trabada"}
              </li>
              <li>• {isEnglish ? "SSD upgrades" : "Actualización a SSD"}</li>
              <li>• {isEnglish ? "System errors" : "Errores de sistema"}</li>
            </ul>

            <Link
              to="/computer-repair-ajijic"
              className="mt-3 inline-block text-primary font-semibold"
            >
              {isEnglish ? "View details →" : "Ver detalles →"}
            </Link>
          </div>

          {/* Phones */}
          <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-bold mb-2">
              {isEnglish
                ? "📱 Phone & Tablet Repair"
                : "📱 Reparación de celulares"}
            </h2>

            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>• {isEnglish ? "Broken screen" : "Pantalla rota"}</li>
              <li>• {isEnglish ? "Battery issues" : "Problemas de batería"}</li>
              <li>• {isEnglish ? "Charging issues" : "Problemas de carga"}</li>
            </ul>

            <Link
              to="/phone-repair-ajijic"
              className="mt-3 inline-block text-primary font-semibold"
            >
              {isEnglish ? "View details →" : "Ver detalles →"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
