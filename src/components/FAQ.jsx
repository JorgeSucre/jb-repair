import { Link } from "react-router-dom";
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
          a: "Sí, vamos a tu casa o negocio en Ajijic y alrededores.",
        },
        {
          q: "¿Qué tan rápido pueden ayudar?",
          a: "Generalmente el mismo día. Respondemos en minutos.",
        },
        {
          q: "¿Qué tipo de problemas solucionan?",
          a: "Computadoras, WiFi, celulares, impresoras y soporte general.",
        },
        {
          q: "¿Tiene garantía?",
          a: "Sí, incluye 30 días de garantía.",
        },
        {
          q: "¿Hablan inglés?",
          a: "Sí, en inglés y español.",
        },
        {
          q: "¿Aceptan electrónicos viejos o dañados?",
          a: "Sí, aceptamos electrónicos para reutilizar y reducir residuos. Puedes ver más aquí: ",
        },
      ],
    },
    en: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "Do you offer home service?",
          a: "Yes, we come to your home or business in Ajijic.",
        },
        {
          q: "How fast can you help?",
          a: "Usually the same day. We reply in minutes.",
        },
        {
          q: "What do you fix?",
          a: "Computers, WiFi, phones, printers, and tech support.",
        },
        {
          q: "Is there a warranty?",
          a: "Yes, includes a 30-day warranty.",
        },
        {
          q: "Do you speak English?",
          a: "Yes, in English and Spanish.",
        },
        {
          q: "Do you accept old or broken electronics?",
          a: "Yes, we accept electronics to refurbish and reduce e-waste. Learn more here: ",
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

        <div className="max-w-3xl mx-auto space-y-2">
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
                <p className="pt-1 pb-4 max-w-md">
                  {item.a}
                  {item.q.includes("electrónicos") ||
                  item.q.includes("electronics") ? (
                    <Link
                      to="/electronics-recycling-ajijic"
                      className="text-primary underline ml-1"
                    >
                      {lang === "en" ? "Learn more" : "Ver más"}
                    </Link>
                  ) : null}
                </p>
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
              ? "Tell us what’s happening. We’ll help fast."
              : "Cuéntanos qué pasa. Te ayudamos rápido."}
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
