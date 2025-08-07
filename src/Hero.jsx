import React from "react";
import PropTypes from "prop-types";

export default function Hero({ lang }) {
  const t = {
    es: {
      title: "Soluciones Técnicas Profesionales en Ajijic",
      subtitle: "Reparación y soporte para todos tus dispositivos.",
      primary: "Solicitar reparación",
      secondary: "Consulta gratuita",
    },
    en: {
      title: "Professional Tech Repair in Ajijic",
      subtitle: "Repair and support for all your devices.",
      primary: "Book a Repair",
      secondary: "Free Consultation",
    },
  }[lang];

  return (
    <section className="text-center py-20 px-4 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors">
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
        {t.title}
      </h1>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10">
        {t.subtitle}
      </p>
      <div className="flex justify-center gap-6 flex-wrap">
        <a
          href="#contact"
          className="bg-primary text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition"
        >
          {t.primary}
        </a>
        <a
          href="#contact"
          className="border-2 border-primary text-primary font-semibold px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition"
        >
          {t.secondary}
        </a>
      </div>
    </section>
  );
}

Hero.propTypes = {
  lang: PropTypes.string.isRequired,
};
