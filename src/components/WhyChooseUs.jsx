import React from "react";
import PropTypes from "prop-types";
import { wa } from "../utils/whatsapp.js";
import { Link } from "react-router-dom";

export default function WhyChooseUs({ lang }) {
  const content = {
    es: {
      title: "¿Por qué nuestros clientes nos eligen?",
      list: [
        {
          icon: "⚡",
          title: "Servicio el mismo día",
          desc: "Se resuelve en una sola visita.",
        },
        {
          icon: "🏠",
          title: "Vamos a tu casa",
          desc: "Vamos a tu casa. Sin traslados.",
        },
        {
          icon: "🌎",
          title: "Atención para extranjeros",
          desc: "Atención en inglés y español.",
        },
        {
          icon: "🛠️",
          title: "Soluciones reales",
          desc: "Diagnóstico correcto. Solución definitiva.",
        },
        {
          icon: "🛡️",
          title: "Garantía incluida",
          desc: "Incluye garantía de 30 días.",
        },
        {
          icon: "💬",
          title: "Respuesta rápida",
          desc: "Respondemos en minutos.",
        },
      ],
    },
    en: {
      title: "Why choose us in Ajijic",
      list: [
        {
          icon: "⚡",
          title: "Same-day service",
          desc: "Fixed in one visit.",
        },
        {
          icon: "🏠",
          title: "We come to you",
          desc: "We come to you. No travel.",
        },
        {
          icon: "🌎",
          title: "Expat-friendly service",
          desc: "English & Spanish support.",
        },
        {
          icon: "🛠️",
          title: "We fix it right",
          desc: "Accurate fix. No temporary patches.",
        },
        {
          icon: "🛡️",
          title: "Warranty included",
          desc: "30-day warranty included.",
        },
        {
          icon: "💬",
          title: "Fast response",
          desc: "We reply in minutes.",
        },
      ],
    },
  }[lang];

  const message =
    lang === "es"
      ? "Hola, necesito ayuda con un problema técnico en Ajijic"
      : "Hi, I need help with a technical issue in Ajijic";

  return (
    <section
      id="whychooseus"
      className="mt-6 md:mt-8 py-8 md:py-10 text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-5">
          {content.title}
        </h2>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
          {content.list.map((item) => (
            <div
              key={item.title}
              className={`p-3 rounded-lg shadow-sm border flex flex-col md:flex-row items-center md:items-start gap-2 transition ${
                item.icon === "⚡"
                  ? "bg-primary/10 border-primary hover:bg-primary/15 hover:shadow-md dark:bg-primary/20"
                  : "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow-sm"
              }`}
            >
              <div className="text-xl md:text-2xl shrink-0">{item.icon}</div>
              <div className="text-center md:text-left">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-snug max-w-[160px] md:max-w-none">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-3">
            {lang === "en" ? (
              <>
                Need help with your computer or WiFi? We fix it fast. <br />
                ♻️ We also help reduce e-waste in Ajijic.{" "}
                <Link
                  to="/electronics-recycling-ajijic"
                  className="text-primary underline"
                >
                  Learn more
                </Link>
              </>
            ) : (
              <>
                ¿Problemas con tu computadora o WiFi? Lo resolvemos rápido.{" "}
                <br />
                ♻️ También ayudamos a reducir residuos electrónicos en Ajijic.{" "}
                <Link
                  to="/electronics-recycling-ajijic"
                  className="text-primary underline"
                >
                  Ver más
                </Link>
              </>
            )}
          </p>

          <a
            href={wa(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition"
          >
            {lang === "en"
              ? "Fix my problem now"
              : "Arreglar mi problema ahora"}
          </a>

          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            {lang === "en"
              ? "We usually reply in minutes"
              : "Respondemos en minutos"}
          </p>
        </div>
      </div>
    </section>
  );
}

WhyChooseUs.propTypes = {
  lang: PropTypes.string.isRequired,
};
