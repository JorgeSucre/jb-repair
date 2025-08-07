import React from "react";
import PropTypes from "prop-types";

export default function Testimonials({ lang }) {
  const t = {
    es: {
      title: "Testimonios de clientes",
      reviews: [
        {
          name: "Carlos M.",
          text: "Excelente servicio, rápido y profesional. Recomendado al 100%.",
        },
        {
          name: "Lucía G.",
          text: "Me salvaron la laptop justo antes de una entrega importante. ¡Gracias!",
        },
        {
          name: "David T.",
          text: "Atención muy amable y precios justos. Volveré sin duda.",
        },
      ],
    },
    en: {
      title: "Customer Testimonials",
      reviews: [
        {
          name: "Carlos M.",
          text: "Excellent, fast and professional service. 100% recommended.",
        },
        {
          name: "Lucía G.",
          text: "They saved my laptop right before a big deadline. Thank you!",
        },
        {
          name: "David T.",
          text: "Very friendly and fair prices. I'll definitely come back.",
        },
      ],
    },
  }[lang];

  return (
    <section className="py-20 px-4 bg-gray-100 dark:bg-gray-800 transition-colors">
      <h2 className="text-3xl font-bold text-center text-primary mb-12">
        {t.title}
      </h2>
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {t.reviews.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-sm"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              "{item.text}"
            </p>
            <p className="text-sm font-semibold text-gray-800 dark:text-white">
              — {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

Testimonials.propTypes = {
  lang: PropTypes.string.isRequired,
};
