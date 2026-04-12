import React from "react";
import SEO from "../../components/SEO.jsx";
import { wa } from "../../utils/whatsapp.js";

export default function WifiService({ lang = "en" }) {
  const isEnglish = lang === "en";

  const title = isEnglish
    ? "WiFi Problems in Ajijic | Repair, Installation & Troubleshooting"
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
          <span className="block">
            {isEnglish
              ? "WiFi problems in Ajijic"
              : "Problemas de WiFi en Ajijic"}
          </span>
          <span className="block">
            {isEnglish ? "We fix them fast" : "Los solucionamos rápido"}
          </span>
        </h1>

        {/* Intro */}
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          {isEnglish
            ? "We fix slow WiFi, drops, and coverage issues."
            : "Solucionamos WiFi lento, desconexiones y problemas de cobertura."}
          <br />
          {isEnglish
            ? "We also install full-home mesh networks."
            : "También instalamos redes mesh para cobertura completa."}
        </p>

        {/* Symptoms */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            {isEnglish ? "Common WiFi issues" : "Problemas comunes de WiFi"}
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-200">
            {(isEnglish
              ? [
                  "Slow WiFi",
                  "Keeps disconnecting",
                  "Weak signal",
                  "Works near router only",
                  "Devices lose connection",
                  "Streaming buffers",
                ]
              : [
                  "WiFi lento",
                  "Se desconecta",
                  "Señal débil",
                  "Solo funciona cerca del router",
                  "Dispositivos pierden conexión",
                  "Streaming se traba",
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
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:opacity-90 hover:scale-[1.02] active:scale-95 hover:brightness-110 transition-all duration-150 text-center"
          >
            {isEnglish ? "Fix my WiFi now" : "Arreglar mi WiFi ahora"}
          </a>

          <a
            href="/#contact"
            className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold text-center hover:bg-primary hover:text-white hover:scale-[1.02] active:scale-95 transition-all duration-150"
          >
            {isEnglish ? "Tell us what’s happening" : "Cuéntanos qué pasa"}
          </a>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            {isEnglish
              ? "WiFi repair and installation in Ajijic"
              : "Reparación e instalación de WiFi en Ajijic"}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-md">
            {isEnglish
              ? "We diagnose and fix WiFi problems fast, improving speed and coverage in your home or business."
              : "Diagnosticamos y solucionamos problemas de WiFi rápidamente, mejorando velocidad y cobertura en tu hogar o negocio."}
          </p>
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
                  "WiFi setup",
                  "Mesh installation",
                  "Speed issues",
                  "Dead zones",
                  "Connection drops",
                  "Router optimization",
                ]
              : [
                  "Configuración WiFi",
                  "Instalación mesh",
                  "Internet lento",
                  "Zonas sin señal",
                  "Desconexiones",
                  "Optimización de router",
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
                  "Fixed in one visit",
                  "We come to you",
                  "English & Spanish",
                  "Reliable service",
                ]
              : [
                  "Se resuelve en una visita",
                  "Vamos a tu casa",
                  "Inglés y español",
                  "Servicio confiable",
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
