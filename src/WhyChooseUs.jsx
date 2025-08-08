import React from "react";
import PropTypes from "prop-types";

export default function WhyChooseUs({ lang }) {
  const content = {
    es: {
      title: "¿Por qué elegirnos?",
      list: [
        {
          icon: "🕒",
          title: "Años de experiencia",
          desc: "Desde 2015 brindando soluciones confiables.",
        },
        {
          icon: "💡",
          title: "Tecnología moderna",
          desc: "Herramientas actualizadas y técnicas eficaces.",
        },
        {
          icon: "🌐",
          title: "Soporte bilingüe",
          desc: "Español e inglés para todos nuestros clientes.",
        },
        {
          icon: "🛡️",
          title: "Garantía",
          desc: "30 días en todas las reparaciones.",
        },
      ],
    },
    en: {
      title: "Why Choose Us?",
      list: [
        {
          icon: "🕒",
          title: "Years of Experience",
          desc: "Serving Ajijic since 2015 with trusted service.",
        },
        {
          icon: "💡",
          title: "Latest Technology",
          desc: "Modern tools and efficient techniques.",
        },
        {
          icon: "🌐",
          title: "Bilingual Support",
          desc: "English and Spanish support for all clients.",
        },
        {
          icon: "🛡️",
          title: "Warranty",
          desc: "30-day guarantee on all repairs.",
        },
      ],
    },
  }[lang];

  return (
    <section
      id="whychooseus"
      className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors"
    >
      <h2 className="text-3xl font-bold text-center text-primary mb-12">
        {content.title}
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {content.list.map((item, i) => (
          <div
            key={i}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-center"
          >
            <div className="text-3xl mb-3">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

WhyChooseUs.propTypes = {
  lang: PropTypes.string.isRequired,
};
