import React, { useState } from "react";
import PropTypes from "prop-types";

export default function FAQ({ lang }) {
  const t = {
    es: {
      title: "Preguntas frecuentes",
      items: [
        {
          q: "¿El diagnóstico tiene costo?",
          a: "No, el diagnóstico inicial es completamente gratuito.",
        },
        {
          q: "¿Cuánto tarda una reparación?",
          a: "La mayoría se resuelven en 24 a 48 horas, según el equipo y el problema.",
        },
        {
          q: "¿Tienen servicio a domicilio?",
          a: "Sí, acudimos a tu domicilio dentro de Ajijic y zonas cercanas.",
        },
        {
          q: "¿Qué tipo de computadoras reparan?",
          a: "Trabajamos con equipos Windows, macOS y algunas distribuciones Linux.",
        },
        {
          q: "¿Puedo perder mi información?",
          a: "Siempre que sea posible, hacemos respaldo antes de cualquier reparación.",
        },
        {
          q: "¿Tienen garantía?",
          a: "Sí, todas nuestras reparaciones tienen 30 días de garantía.",
        },
        {
          q: "¿Qué métodos de pago aceptan?",
          a: "Aceptamos efectivo, transferencias SPEI y pagos vía PayPal.",
        },
        {
          q: "¿Atienden empresas?",
          a: "Sí, trabajamos con empresas para reparaciones o soporte técnico puntual.",
        },
      ],
    },
    en: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "Is diagnostics free?",
          a: "Yes, the initial diagnostics are completely free.",
        },
        {
          q: "How long does a repair take?",
          a: "Most repairs are completed within 24 to 48 hours, depending on the issue.",
        },
        {
          q: "Do you offer on-site support?",
          a: "Yes, we offer on-site service in Ajijic and nearby areas.",
        },
        {
          q: "What type of computers do you repair?",
          a: "We work with Windows, macOS, and some Linux distributions.",
        },
        {
          q: "Will I lose my data?",
          a: "We always try to back up your data before starting any repair.",
        },
        {
          q: "Do you offer warranty?",
          a: "Yes, we offer a 30-day warranty on all repairs.",
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept cash, bank transfers (SPEI), and PayPal.",
        },
        {
          q: "Do you work with businesses?",
          a: "Yes, we work with companies for specific repair or support needs.",
        },
      ],
    },
  }[lang];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      id="faq"
      className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors"
    >
      <h2 className="text-3xl font-bold text-center text-primary mb-10">
        {t.title}
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {t.items.map((item, i) => (
          <div
            key={i}
            className="border border-gray-300 dark:border-gray-700 rounded-lg"
          >
            <button
              onClick={() => toggle(i)}
              className="w-full text-left px-4 py-3 font-semibold flex justify-between items-center text-gray-800 dark:text-gray-100"
            >
              {item.q}
              <span className="text-xl">{openIndex === i ? "−" : "+"}</span>
            </button>
            {openIndex === i && (
              <div className="px-4 pb-4 text-gray-600 dark:text-gray-400 text-sm">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

FAQ.propTypes = {
  lang: PropTypes.string.isRequired,
};
