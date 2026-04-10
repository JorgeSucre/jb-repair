import SEO from "../../components/SEO.jsx";
import { Link } from "react-router-dom";
import { wa } from "../../utils/whatsapp.js";
export default function TechSupport({ lang }) {
  // Use global language from App.jsx (single source of truth)
  const isEnglish = lang === "en";

  return (
    <>
      {/* ================= SEO ================= */}
      <SEO
        title={
          isEnglish
            ? "Tech Support in Ajijic | On-Site Help for Any Issue | jb.repair"
            : "Soporte técnico en Ajijic | Ayuda a domicilio | jb.repair"
        }
        description={
          isEnglish
            ? "Need tech support in Ajijic? We help with computers, emails, passwords, WiFi, and everyday tech issues. Friendly, on-site service available."
            : "¿Necesitas soporte técnico en Ajijic? Ayudamos con computadoras, correos, contraseñas, WiFi y problemas tecnológicos diarios."
        }
        url={"https://jbrepair.info/tech-support-ajijic"}
        locale={isEnglish ? "en_US" : "es_MX"}
      />

      {/* ================= MAIN ================= */}
      <section className="py-12 md:py-16 px-4 max-w-4xl mx-auto space-y-6">
        {/* Back button */}
        <button
          onClick={() => window.history.back()}
          className="text-sm text-primary hover:underline mb-4"
          aria-label="Go back"
        >
          {isEnglish ? "← Back" : "← Regresar"}
        </button>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          {isEnglish
            ? "Tech Support in Ajijic — On-Site Help You Can Trust"
            : "Soporte técnico en Ajijic a domicilio"}
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-900 dark:text-gray-100 mb-4">
          {isEnglish
            ? "We help with computers, accounts, WiFi, and everyday tech problems — directly at your home in Ajijic."
            : "Te ayudamos con computadoras, cuentas, WiFi y problemas tecnológicos — directamente en tu hogar en Ajijic."}
        </p>

        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {isEnglish ? (
            <>
              If your issue is related to internet or connectivity, you may need
              a full{" "}
              <Link
                to="/wifi-installation-ajijic"
                className="text-primary underline"
              >
                WiFi installation or mesh setup
              </Link>
              , or help with{" "}
              <Link
                to="/wifi-problems-ajijic"
                className="text-primary underline"
              >
                fixing WiFi problems
              </Link>
              .
            </>
          ) : (
            <>
              Si tu problema está relacionado con internet o conectividad, puede
              que necesites una{" "}
              <Link
                to="/wifi-installation-ajijic"
                className="text-primary underline"
              >
                instalación de WiFi o sistema mesh
              </Link>
              , o ayuda para{" "}
              <Link
                to="/wifi-problems-ajijic"
                className="text-primary underline"
              >
                solucionar problemas de WiFi
              </Link>
              .
            </>
          )}
        </p>

        {/* Highlight */}
        <p className="text-green-600 text-sm mb-6">
          ⭐{" "}
          {isEnglish
            ? "Trusted local service • Same-day visits available"
            : "Servicio confiable local • Atención el mismo día"}
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={wa(
              isEnglish
                ? "Hi, I need help with a tech issue in Ajijic"
                : "Hola, necesito ayuda con un problema técnico en Ajijic",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-primary text-white px-5 py-2.5 rounded-lg font-semibold shadow-sm hover:opacity-90 transition text-center"
          >
            {isEnglish ? "Fix my issue now" : "Arreglar mi problema ahora"}
          </a>
          <a
            href="/#contact"
            className="w-full sm:w-auto border-2 border-primary text-primary px-5 py-2.5 rounded-lg font-semibold text-center hover:bg-primary hover:text-white transition"
          >
            {isEnglish ? "Contact via form" : "Contactar por formulario"}
          </a>
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
          {isEnglish
            ? "We usually reply within minutes"
            : "Respondemos en minutos"}
        </p>

        {/* Problems */}
        <h2 className="text-2xl font-semibold mb-3">
          {isEnglish ? "Common issues we help with" : "Problemas comunes"}
        </h2>

        <ul className="list-disc pl-6 text-gray-900 dark:text-gray-100 space-y-2 mb-6">
          {(isEnglish
            ? [
                "I can’t access my email or accounts",
                "I forgot my passwords",
                "My computer is acting strange",
                "I need help setting up a new device",
                "Things just aren’t working like they should",
              ]
            : [
                "No puedo acceder a mis cuentas",
                "Olvidé mis contraseñas",
                "Mi computadora falla",
                "Necesito configurar un equipo nuevo",
                "Las cosas no funcionan correctamente",
              ]
          ).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {/* Services */}
        <h2 className="text-2xl font-semibold mb-3">
          {isEnglish ? "What we can help you with" : "Qué podemos ayudarte"}
        </h2>

        <ul className="list-disc pl-6 text-gray-900 dark:text-gray-100 space-y-2 mb-6">
          <li>
            {isEnglish ? "Password recovery" : "Recuperación de contraseñas"}
          </li>
          <li>
            {isEnglish
              ? "Account setup (email, Apple ID, Google)"
              : "Configuración de cuentas (correo, Apple ID, Google)"}
          </li>
          <li>
            {isEnglish
              ? "Backups and data transfer"
              : "Respaldos y transferencia de datos"}
          </li>
          <li>
            {isEnglish
              ? "WiFi and connectivity issues"
              : "Problemas de WiFi y conectividad"}
          </li>
          <li>
            {isEnglish
              ? "General tech troubleshooting"
              : "Problemas generales de tecnología"}
          </li>
        </ul>

        {/* Areas */}
        <p className="text-gray-600 dark:text-gray-400">
          {isEnglish
            ? "Serving Ajijic, Chapala, San Antonio Tlayacapan, and the Lake Chapala area."
            : "Atendemos Ajijic, Chapala, San Antonio Tlayacapan y alrededores."}
        </p>
      </section>
    </>
  );
}
