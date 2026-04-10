import React from "react";
import PropTypes from "prop-types";
import { wa } from "../utils/whatsapp.js";

export default function Hero({ lang }) {
  const t = {
    es: {
      title: "¿Problemas con tu computadora o WiFi en Ajijic?",
      subtitle:
        "Reparamos computadoras lentas, problemas de WiFi y fallas en tus dispositivos — directamente en tu hogar. Servicio confiable en Ajijic.",
      primary: "Arreglar mi problema ahora",
      secondary: "Ver cómo podemos ayudarte",
      socialProof:
        "⭐ Recomendado por clientes en Ajijic • +1000 equipos reparados",
      urgency:
        "Atención el mismo día en la mayoría de casos • Respuesta rápida",
      services:
        "Reparación de laptops • Reparación de celulares • Soporte técnico a domicilio • Mac y Windows • Redes e impresoras",
      footer: "Respondemos en minutos • Sin compromiso • Diagnóstico honesto",
      miniTestimonial:
        "⭐ “Me arregló la laptop en una sola visita. Súper recomendado.”",
    },
    en: {
      title: "Computer or WiFi Problems in Ajijic? We Fix It Fast",
      subtitle:
        "We fix slow computers, WiFi issues, and device problems fast — right at your home. Reliable service for expats and locals in Ajijic.",
      primary: "Fix my problem now",
      secondary: "See how we can help",
      socialProof: "⭐ Trusted by expats & locals • 1000+ devices repaired",
      urgency: "Same-day service in most cases • Fast response",
      services:
        "Laptop repair • Phone repair • On-site tech support • Mac & Windows • Networks & printers",
      footer: "We usually reply in minutes • No obligation • Honest diagnosis",
      miniTestimonial:
        "⭐ “He fixed my laptop in one visit — highly recommended.”",
    },
  }[lang];

  const message =
    lang === "es"
      ? "Hola, necesito ayuda con un problema técnico en Ajijic"
      : "Hi, I need help with a technical issue in Ajijic";

  return (
    <section className="text-center py-12 md:py-16 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="px-4 max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">
          {t.title}
        </h1>

        <div className="flex flex-col items-center gap-2 mb-4">
          <p className="text-sm md:text-base font-medium text-green-600 dark:text-green-400">
            {t.socialProof}
          </p>
          <p className="text-sm md:text-base font-medium text-red-500 dark:text-red-400">
            {t.urgency}
          </p>
        </div>

        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6 md:mb-7 leading-relaxed">
          {t.subtitle}
        </p>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-5">
          {t.services}
        </p>

        <div className="flex justify-center gap-3 flex-wrap mt-6">
          {lang === "es" ? (
            <>
              <a
                href={wa(message)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp para reparación en Ajijic"
                className="bg-primary text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:opacity-90 hover:scale-[1.02] transition"
              >
                {t.primary}
              </a>
              <a
                href="#contact"
                aria-label="Ir al formulario de contacto"
                className="border-2 border-primary text-primary font-semibold px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition"
              >
                {t.secondary}
              </a>
            </>
          ) : (
            <>
              <a
                href={wa(message)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact on WhatsApp"
                className="bg-primary text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:opacity-90 hover:scale-[1.02] transition"
              >
                {t.primary}
              </a>
              <a
                href="#contact"
                aria-label="Go to contact form"
                className="border-2 border-primary text-primary font-semibold px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition"
              >
                {t.secondary}
              </a>
            </>
          )}
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
          {t.footer}
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300 mt-3 italic">
          {t.miniTestimonial}
        </p>
      </div>
    </section>
  );
}

Hero.propTypes = {
  lang: PropTypes.string.isRequired,
};
