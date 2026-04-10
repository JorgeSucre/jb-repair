import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { wa } from "../utils/whatsapp.js";

export default function FAQ({ lang }) {
  const t = {
    es: {
      title: "Preguntas frecuentes",
      items: [
        {
          q: "¿Van a domicilio?",
          a: "Sí, ofrecemos servicio a domicilio en Ajijic y zonas cercanas. Vamos a tu casa o negocio.",
        },
        {
          q: "¿Qué tan rápido pueden ayudar?",
          a: "En la mayoría de los casos el mismo día. Respondemos en minutos por WhatsApp.",
        },
        {
          q: "¿Qué tipo de problemas solucionan?",
          a: "Computadoras lentas, fallas de WiFi, celulares, impresoras y soporte técnico general.",
        },
        {
          q: "¿Tiene garantía?",
          a: "Sí, todas las reparaciones incluyen garantía de 30 días.",
        },
        {
          q: "¿Hablan inglés?",
          a: "Sí, atendemos en inglés y español sin problema.",
        },
      ],
    },
    en: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "Do you offer home service?",
          a: "Yes, we provide on-site service in Ajijic and nearby areas. We come to your home or business.",
        },
        {
          q: "How fast can you help?",
          a: "In most cases, the same day. We usually reply within minutes on WhatsApp.",
        },
        {
          q: "What kind of issues do you fix?",
          a: "Slow computers, WiFi problems, phones, printers, and general tech support.",
        },
        {
          q: "Do you offer warranty?",
          a: "Yes, all repairs include a 30-day warranty.",
        },
        {
          q: "Do you speak English?",
          a: "Yes, we provide support in both English and Spanish.",
        },
      ],
    },
  }[lang];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const message =
    lang === "en"
      ? "Hi, I have a question after reading your FAQ about a tech issue in Ajijic"
      : "Hola, tengo una duda después de ver las preguntas frecuentes sobre un problema técnico en Ajijic";

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section id="faq" className="py-10 md:py-12 transition-colors">
      <div className="px-4 max-w-3xl mx-auto">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-6">
          {t.title}
        </h2>

        <div className="max-w-3xl mx-auto space-y-3">
          {t.items.map((item, i) => (
            <div
              key={item.q}
              className="border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:border-primary transition-all duration-300"
            >
              <button
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                className="w-full text-left px-4 py-3 font-semibold flex justify-between items-center text-gray-800 dark:text-gray-100 transition"
              >
                {item.q}
                <span
                  className={`text-lg transition-transform duration-200 ${openIndex === i ? "rotate-180" : "rotate-0"}`}
                >
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              <div
                ref={(el) => (contentRefs.current[i] = el)}
                style={{
                  height:
                    openIndex === i
                      ? contentRefs.current[i]?.scrollHeight + "px"
                      : "0px",
                }}
                className="px-4 overflow-hidden text-gray-600 dark:text-gray-400 text-sm transition-all duration-300 ease-in-out"
              >
                <p className="pt-1 pb-4">{item.a}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA aligned with form */}
        <div className="text-center mt-6">
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-primary">
            {lang === "en" ? "Still have questions?" : "¿Aún tienes dudas?"}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {lang === "en"
              ? "Tell us what’s happening and we’ll help you quickly."
              : "Cuéntanos qué está pasando y te ayudamos rápido."}
          </p>

          <a
            href={wa(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-5 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg transition"
          >
            {lang === "en" ? "Ask your question now" : "Resolver mi duda"}
          </a>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
            {lang === "en" ? (
              <>
                Prefer a form? Go to the{" "}
                <a href="#contact" className="text-primary underline">
                  contact form
                </a>
                .
              </>
            ) : (
              <>
                ¿Prefieres un formulario? Ve al{" "}
                <a href="#contact" className="text-primary underline">
                  formulario de contacto
                </a>
                .
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}

FAQ.propTypes = {
  lang: PropTypes.string.isRequired,
};
