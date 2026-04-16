import SEO from "../../components/SEO.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import { wa } from "../../utils/whatsapp.js";
import { goToContact } from "../../utils/navigation.js";

export default function SecurityCameras({ lang }) {
  // Global language from App.jsx (single source of truth)
  const isEnglish = lang === "en";

  const location = useLocation();
  const navigate = useNavigate();
  const url = `https://jbrepair.info${location.pathname}`;

  return (
    <>
      {/* ================= SEO ================= */}
      <SEO
        title={
          isEnglish
            ? "Security Cameras in Ajijic | Installation & Smart Doorbells"
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
          <span className="block">
            {isEnglish
              ? "Security cameras in Ajijic"
              : "Cámaras de seguridad en Ajijic"}
          </span>
          <span className="block">
            {isEnglish ? "Protect your home" : "Protege tu hogar"}
          </span>
        </h1>

        {/* Intro */}
        <p className="text-lg text-gray-900 dark:text-gray-100">
          {isEnglish
            ? "We install security cameras and smart doorbells."
            : "Instalamos cámaras de seguridad y timbres inteligentes."}
          <br />
          {isEnglish
            ? "Fully configured and ready to use."
            : "Completamente configurados y listos para usar."}
        </p>

        {/* Social proof */}
        <p className="text-sm text-green-600">
          {isEnglish
            ? "⭐ Homes, businesses & rentals"
            : "⭐ Casas, negocios y rentas"}
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
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:opacity-90 hover:scale-[1.02] active:scale-95 hover:brightness-110 transition-all duration-150 text-center"
          >
            {isEnglish ? "Install cameras now" : "Instalar cámaras ahora"}
          </a>
          <button
            onClick={() => goToContact(navigate)}
            className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold text-center hover:bg-primary hover:text-white hover:scale-[1.02] active:scale-95 transition-all duration-150"
          >
            {isEnglish ? "Tell us what you need" : "Cuéntanos qué necesitas"}
          </button>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {isEnglish ? "We reply in minutes" : "Respondemos en minutos"}
        </p>

        <div className="mt-10 space-y-3">
          <h2 className="text-2xl font-semibold">
            {isEnglish
              ? "Security camera installation in Ajijic"
              : "Instalación de cámaras de seguridad en Ajijic"}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-md">
            {isEnglish
              ? "We install and configure security systems so you can monitor your property from anywhere."
              : "Instalamos y configuramos sistemas de seguridad para que puedas monitorear tu propiedad desde cualquier lugar."}
          </p>
        </div>

        {/* Services */}
        <div className="mt-10 space-y-4">
          <h2 className="text-2xl font-semibold">
            {isEnglish ? "What do we install?" : "¿Qué instalamos?"}
          </h2>

          <ul className="list-disc pl-6 text-gray-900 dark:text-gray-100 space-y-2">
            <li>
              {isEnglish
                ? "Indoor & outdoor cameras"
                : "Cámaras interior y exterior"}
            </li>
            <li>{isEnglish ? "Smart doorbells" : "Timbres inteligentes"}</li>
            <li>{isEnglish ? "Remote monitoring" : "Monitoreo remoto"}</li>
            <li>{isEnglish ? "DVR / NVR systems" : "Sistemas DVR / NVR"}</li>
            <li>{isEnglish ? "Full coverage" : "Cobertura completa"}</li>
          </ul>
        </div>
      </section>
    </>
  );
}
