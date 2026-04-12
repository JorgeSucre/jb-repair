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
      <section className="py-10 md:py-16 px-4 max-w-4xl mx-auto space-y-5">
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
          <span className="block">
            {isEnglish ? "Tech support in Ajijic" : "Soporte técnico en Ajijic"}
          </span>
          <span className="block">
            {isEnglish ? "We fix it fast" : "Lo solucionamos rápido"}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-900 dark:text-gray-100 mb-4 max-w-md">
          {isEnglish
            ? "We help with computers, accounts, and tech issues."
            : "Te ayudamos con computadoras, cuentas y tecnología."}
          <br />
          {isEnglish
            ? "On-site service in Ajijic."
            : "Servicio a domicilio en Ajijic."}
        </p>

        <p className="text-gray-700 dark:text-gray-300 mb-4 max-w-md">
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
            ? "Local service • Same-day"
            : "Servicio local • Mismo día"}
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
            className="w-full sm:w-auto bg-primary text-white px-5 py-2.5 rounded-lg font-semibold shadow-sm hover:opacity-90 hover:scale-[1.02] active:scale-95 hover:brightness-110 transition-all duration-150 text-center"
          >
            {isEnglish ? "Fix my issue now" : "Arreglar mi problema ahora"}
          </a>
          <a
            href="/#contact"
            className="w-full sm:w-auto border-2 border-primary text-primary px-5 py-2.5 rounded-lg font-semibold text-center hover:bg-primary hover:text-white hover:scale-[1.02] active:scale-95 transition-all duration-150"
          >
            {isEnglish ? "Tell us what’s happening" : "Cuéntanos qué pasa"}
          </a>
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
          {isEnglish ? "We reply in minutes" : "Respondemos en minutos"}
        </p>

        {/* Problems */}
        <h2 className="text-2xl font-semibold mb-3">
          {isEnglish ? "Common issues we help with" : "Problemas comunes"}
        </h2>

        <ul className="list-disc pl-6 text-gray-900 dark:text-gray-100 space-y-2 mb-6">
          {(isEnglish
            ? [
                "Can’t access accounts",
                "Forgot passwords",
                "Computer acting strange",
                "Set up new device",
                "Things not working",
              ]
            : [
                "No acceso a cuentas",
                "Olvidé contraseñas",
                "Computadora falla",
                "Configurar equipo",
                "No funciona bien",
              ]
          ).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            {isEnglish
              ? "On-site tech support in Ajijic"
              : "Soporte técnico a domicilio en Ajijic"}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-md">
            {isEnglish
              ? "We diagnose and fix everyday tech issues fast, so your devices work as expected."
              : "Diagnosticamos y solucionamos problemas tecnológicos rápidamente para que todo funcione correctamente."}
          </p>
        </div>

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
