import SEO from "../../components/SEO.jsx";
import { useLocation } from "react-router-dom";
import { wa } from "../../utils/whatsapp.js";

export default function SecurityCameras({ lang }) {
  // Global language from App.jsx (single source of truth)
  const isEnglish = lang === "en";

  const location = useLocation();
  const url = `https://jbrepair.info${location.pathname}`;

  return (
    <>
      {/* ================= SEO ================= */}
      <SEO
        title={
          isEnglish
            ? "Security Cameras & Doorbells in Ajijic | jb.repair"
            : "Cámaras de seguridad en Ajijic | jb.repair"
        }
        description={
          isEnglish
            ? "Security camera and smart doorbell installation in Ajijic. Protect your home with reliable systems."
            : "Instalación de cámaras de seguridad y timbres inteligentes en Ajijic. Protege tu hogar con sistemas confiables."
        }
        url={url}
        locale={isEnglish ? "en_US" : "es_MX"}
      />

      {/* ================= MAIN ================= */}
      <section className="py-12 md:py-16 px-4 max-w-4xl mx-auto space-y-6">
        {/* Back button */}
        <button
          onClick={() => window.history.back()}
          className="text-sm text-primary hover:underline"
          aria-label="Go back"
        >
          {isEnglish ? "← Back" : "← Regresar"}
        </button>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-primary">
          {isEnglish
            ? "Security cameras & smart doorbells in Ajijic"
            : "Cámaras de seguridad y timbres inteligentes en Ajijic"}
        </h1>

        {/* Intro */}
        <p className="text-lg text-gray-900 dark:text-gray-100">
          {isEnglish
            ? "We install security cameras and smart doorbells to protect your home or business — fully configured and ready to use."
            : "Instalamos cámaras de seguridad y timbres inteligentes para proteger tu hogar o negocio — completamente configurados y listos para usar."}
        </p>

        {/* Social proof */}
        <p className="text-sm text-green-600">
          {isEnglish
            ? "⭐ Ideal for homes, businesses and rentals"
            : "⭐ Ideal para casas, negocios y propiedades en renta"}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* WhatsApp CTA (primary conversion action with prefilled message) */}
          <a
            href={wa(
              isEnglish
                ? "Hi, I want to install security cameras or a smart doorbell in Ajijic"
                : "Hola, quiero instalar cámaras de seguridad o un timbre inteligente en Ajijic",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:opacity-90 transition text-center"
          >
            {isEnglish
              ? "Install security system now"
              : "Instalar sistema de seguridad"}
          </a>

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

        {/* Services */}
        <div className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold">
            {isEnglish ? "What do we install?" : "¿Qué instalamos?"}
          </h2>

          <ul className="list-disc pl-6 text-gray-900 dark:text-gray-100 space-y-2">
            <li>
              {isEnglish
                ? "Indoor & outdoor cameras"
                : "Cámaras interiores y exteriores"}
            </li>
            <li>
              {isEnglish
                ? "Smart video doorbells"
                : "Timbres inteligentes con video"}
            </li>
            <li>
              {isEnglish
                ? "Remote monitoring setup"
                : "Monitoreo remoto desde tu celular"}
            </li>
            <li>{isEnglish ? "DVR / NVR systems" : "Sistemas DVR / NVR"}</li>
            <li>
              {isEnglish
                ? "Full property coverage"
                : "Cobertura completa de la propiedad"}
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
