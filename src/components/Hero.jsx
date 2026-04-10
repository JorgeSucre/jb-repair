import React from "react";
import PropTypes from "prop-types";
import { wa } from "../utils/whatsapp.js";

export default function Hero({ lang }) {
  const t = {
    es: {
      title1: "¿Problemas con tu computadora o WiFi",
      title2: "en Ajijic?",
      subtitle1: "Reparamos computadoras, WiFi y dispositivos.",
      subtitle2: "Directamente en tu hogar.",
      primary: "Arreglar mi problema ahora",
      secondary: "Ver cómo podemos ayudarte",
      socialProof:
        "⭐ Recomendado por clientes en Ajijic • +1000 equipos reparados",
      urgency:
        "Atención el mismo día en la mayoría de casos • Respuesta rápida",
      services:
        "Laptops • Celulares • Soporte a domicilio • Mac & Windows • Redes",
      footer: "Respondemos en minutos • Sin compromiso",
      miniTestimonial:
        "⭐ “Me arregló la laptop en una sola visita. Súper recomendado.”",
    },
    en: {
      title1: "Computer or WiFi problems",
      title2: "in Ajijic?",
      subtitle1: "We fix computers, WiFi issues, and devices.",
      subtitle2: "Right at your home.",
      primary: "Fix my problem now",
      secondary: "See how we can help",
      socialProof: "⭐ Trusted by expats & locals • 1000+ devices repaired",
      urgency: "Same-day service in most cases • Fast response",
      services: "Laptops • Phones • On-site support • Mac & Windows • Networks",
      footer: "We reply in minutes • No obligation",
      miniTestimonial:
        "⭐ “He fixed my laptop in one visit — highly recommended.”",
    },
  }[lang];

  const message =
    lang === "es"
      ? "Hola, necesito ayuda con un problema técnico en Ajijic"
      : "Hi, I need help with a technical issue in Ajijic";

  return (
    <section className="text-center py-10 md:py-16 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="px-4 max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">
          <span className="block">{t.title1}</span>
          <span className="block">{t.title2}</span>
        </h1>

        <div className="flex flex-col items-center gap-2 mb-4">
          <p className="text-sm md:text-base font-medium text-green-600 dark:text-green-400">
            {t.socialProof}
          </p>
          <p className="text-sm md:text-base font-medium text-red-500 dark:text-red-400">
            {t.urgency}
          </p>
        </div>

        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-md mx-auto mb-5 leading-relaxed">
          <span className="block">{t.subtitle1}</span>
          <span className="block">{t.subtitle2}</span>
        </p>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-4">
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
