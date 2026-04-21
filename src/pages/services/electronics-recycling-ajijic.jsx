import React from "react";
import SEO from "../../components/SEO.jsx";
import { wa } from "../../utils/whatsapp.js";
import { useNavigate } from "react-router-dom";

export default function ElectronicsRecycling({ lang }) {
  const isEnglish = lang === "en";
  const navigate = useNavigate();
  const message = isEnglish
    ? "Hi, I have some old electronics I’d like to recycle in Ajijic."
    : "Hola, tengo electrónicos que quiero reciclar en Ajijic.";

  return (
    <section className="py-10 md:py-16 px-4 max-w-5xl mx-auto space-y-5">
      <div className="mb-4">
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-primary underline hover:opacity-80 transition"
        >
          {isEnglish ? "← Back" : "← Regresar"}
        </button>
      </div>
      <SEO
        title={
          isEnglish
            ? "Electronics Recycling in Ajijic | Reuse & E-Waste"
            : "Reciclaje de Electrónicos en Ajijic | Reutilización y E-Waste"
        }
        description={
          isEnglish
            ? "We recycle and refurbish electronics in Ajijic. Give your devices a second life and reduce e-waste."
            : "Reciclamos y reacondicionamos electrónicos en Ajijic. Dale una segunda vida a tus dispositivos y reduce el e-waste."
        }
      />

      {/* HERO */}
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
        <span className="block">
          {isEnglish
            ? "Electronics recycling in Ajijic"
            : "Reciclaje de electrónicos en Ajijic"}
        </span>
        <span className="block">
          {isEnglish
            ? "Give your devices a second life"
            : "Dale una segunda vida a tus dispositivos"}
        </span>
      </h1>

      {/* INTRO */}
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-md">
        {isEnglish
          ? "Have old or broken electronics?"
          : "¿Tienes electrónicos viejos o dañados?"}
        <br />
        {isEnglish
          ? "We refurbish and reuse devices to reduce e-waste."
          : "Reacondicionamos y reutilizamos dispositivos para reducir residuos electrónicos."}
      </p>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <a
          href={wa(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:opacity-90 hover:scale-[1.02] active:scale-95 hover:brightness-110 transition-all duration-150 text-center"
        >
          {isEnglish ? "Contact on WhatsApp" : "Contactar por WhatsApp"}
        </a>
        <button
          onClick={() => {
            navigate("/");
            setTimeout(() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }, 100);
          }}
          className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold text-center hover:bg-primary hover:text-white hover:scale-[1.02] active:scale-95 transition-all duration-150"
        >
          {isEnglish ? "Tell us what you have" : "Cuéntanos qué tienes"}
        </button>
      </div>

      {/* WHAT WE ACCEPT */}
      <div className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold">
          {isEnglish ? "What we accept" : "Qué aceptamos"}
        </h2>
        <ul className="grid grid-cols-2 gap-2 text-gray-700 dark:text-gray-300">
          {(isEnglish
            ? [
                "Laptops",
                "Desktop computers",
                "Phones",
                "Tablets",
                "Game consoles",
                "Small electronics",
              ]
            : [
                "Laptops",
                "Computadoras de escritorio",
                "Celulares",
                "Tablets",
                "Consolas",
                "Electrónicos pequeños",
              ]
          ).map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>

      {/* WHY RECYCLE */}
      <div className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold">
          {isEnglish
            ? "Why recycle electronics in Ajijic"
            : "Por qué reciclar electrónicos en Ajijic"}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-md">
          {isEnglish
            ? "Recycling electronics helps reduce waste, extend device life, and support a more sustainable community in Ajijic."
            : "Reciclar electrónicos ayuda a reducir residuos, extender la vida útil de los dispositivos y apoyar una comunidad más sostenible en Ajijic."}
        </p>
        <ul className="text-gray-700 dark:text-gray-300 space-y-1">
          {(isEnglish
            ? ["Reduce e-waste", "Reuse working devices", "Help the community"]
            : [
                "Reduce residuos electrónicos",
                "Reutiliza dispositivos funcionales",
                "Apoya a la comunidad",
              ]
          ).map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>

      {/* WHAT WE DO */}
      <div className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold">
          {isEnglish ? "What we do" : "Qué hacemos"}
        </h2>
        <ul className="grid grid-cols-2 gap-2 text-gray-700 dark:text-gray-300">
          {(isEnglish
            ? ["Repair", "Refurbish", "Reuse", "Repurpose"]
            : ["Reparar", "Reacondicionar", "Reutilizar", "Reaprovechar"]
          ).map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>

      {/* HOW IT WORKS */}
      <div className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold">
          {isEnglish ? "How it works" : "Cómo funciona"}
        </h2>
        <ol className="space-y-2 text-gray-700 dark:text-gray-300 max-w-md">
          <li>1. {isEnglish ? "Contact us" : "Contáctanos"}</li>
          <li>
            2. {isEnglish ? "Tell us what you have" : "Cuéntanos qué tienes"}
          </li>
          <li>
            3.{" "}
            {isEnglish ? "We coordinate pickup" : "Coordinamos la recolección"}
          </li>
        </ol>
      </div>

      {/* NOTE */}
      <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md">
        {isEnglish
          ? "We may refurbish devices for reuse or parts depending on condition."
          : "Los dispositivos pueden ser reutilizados o desarmados según su condición."}
      </p>
    </section>
  );
}
