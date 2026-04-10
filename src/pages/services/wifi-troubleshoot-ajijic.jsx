import React from "react";
import SEO from "../../components/SEO.jsx";
import { wa } from "../../utils/whatsapp.js";

export default function WifiService({ lang = "en" }) {
  const isEnglish = lang === "en";

  const title = isEnglish
    ? "WiFi Installation & Repair in Ajijic | jb.repair"
    : "Instalación y reparación de WiFi en Ajijic | jb.repair";

  const description = isEnglish
    ? "WiFi installation, troubleshooting and optimization in Ajijic. Fix slow internet, dead zones, drops, and set up mesh networks. On-site service."
    : "Instalación, reparación y optimización de WiFi en Ajijic. Solucionamos internet lento, zonas sin señal, desconexiones y redes mesh. Servicio a domicilio.";

  const message = isEnglish
    ? "Hi, I need help with my WiFi in Ajijic (wifi page)"
    : "Hola, necesito ayuda con mi WiFi en Ajijic (página wifi)";

  return (
    <>
      <SEO
        title={title}
        description={description}
        url="https://jbrepair.info/wifi-problems-ajijic"
        locale={isEnglish ? "en_US" : "es_MX"}
      />

      <section className="py-14 px-4 max-w-4xl mx-auto">
        {/* Back */}
        <div className="mb-4">
          <a
            href="/"
            className="text-primary text-sm"
            aria-label={isEnglish ? "Go back" : "Regresar"}
          >
            {isEnglish ? "← Back" : "← Regresar"}
          </a>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          {isEnglish
            ? "WiFi installation & repair in Ajijic — fast & reliable"
            : "Instalación y reparación de WiFi en Ajijic — rápida y confiable"}
        </h1>

        {/* Intro */}
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          {isEnglish
            ? "We fix slow WiFi, connection drops, and coverage issues. We also install new networks and mesh systems for full-home coverage — usually the same day."
            : "Solucionamos WiFi lento, desconexiones y problemas de cobertura. También instalamos redes nuevas y sistemas mesh para cobertura completa — generalmente el mismo día."}
        </p>

        {/* Symptoms */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            {isEnglish ? "Common WiFi issues" : "Problemas comunes de WiFi"}
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-200">
            {(isEnglish
              ? [
                  "WiFi is very slow",
                  "Internet keeps disconnecting",
                  "Weak signal in some rooms",
                  "WiFi works near router but not far away",
                  "Devices randomly lose connection",
                  "Streaming or video calls keep buffering",
                ]
              : [
                  "El WiFi está muy lento",
                  "El internet se desconecta constantemente",
                  "Señal débil en algunas áreas",
                  "El WiFi funciona cerca del router pero no lejos",
                  "Los dispositivos pierden conexión",
                  "Streaming o videollamadas con interrupciones",
                ]
            ).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <a
            href={wa(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:opacity-90 transition text-center"
          >
            {isEnglish ? "Fix my WiFi now" : "Arreglar mi WiFi ahora"}
          </a>

          <a
            href="/#contact"
            className="bg-gray-800 dark:bg-white dark:text-black text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:opacity-90 transition text-center"
          >
            {isEnglish ? "Describe your issue" : "Describe tu problema"}
          </a>
        </div>

        {/* What we do */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            {isEnglish
              ? "What we can help you with"
              : "En qué podemos ayudarte"}
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-200">
            {(isEnglish
              ? [
                  "WiFi installation and setup",
                  "Mesh network installation",
                  "Fix slow internet speeds",
                  "Eliminate dead zones",
                  "Fix connection drops",
                  "Router configuration and optimization",
                ]
              : [
                  "Instalación y configuración de WiFi",
                  "Instalación de redes mesh",
                  "Solución de internet lento",
                  "Eliminar zonas sin señal",
                  "Solucionar desconexiones",
                  "Configuración y optimización de routers",
                ]
            ).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Why choose us */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">
            {isEnglish ? "Why choose us" : "Por qué elegirnos"}
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-200">
            {(isEnglish
              ? [
                  "Same-day service available",
                  "On-site support in Ajijic",
                  "English & Spanish support",
                  "Reliable and honest service",
                ]
              : [
                  "Servicio el mismo día",
                  "Atención a domicilio en Ajijic",
                  "Atención en inglés y español",
                  "Servicio confiable y honesto",
                ]
            ).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
