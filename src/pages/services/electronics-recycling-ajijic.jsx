import SEO from "../../components/SEO.jsx";
import PropTypes from "prop-types";
import { wa } from "../../utils/whatsapp.js";
import { useLocation, useNavigate } from "react-router-dom";
import { goToContact } from "../../utils/navigation.js";

export default function ElectronicsRecycling({ lang }) {
  const isEnglish = lang === "en";
  const location = useLocation();
  const navigate = useNavigate();
  const url = `https://jbrepair.info${location.pathname}`;

  const title = isEnglish
    ? "Electronics Recycling in Ajijic | Refurbish & Reuse"
    : "Reciclaje de electrónicos en Ajijic | jb.repair";

  const description = isEnglish
    ? "Electronics recycling in Ajijic. We evaluate old laptops, phones, tablets and small devices for reuse, repair, parts or responsible handling."
    : "Reciclaje de electrónicos en Ajijic. Evaluamos laptops, celulares, tablets y dispositivos pequeños para reutilizar, reparar o aprovechar piezas.";

  const message = isEnglish
    ? "Hi, I have some old electronics I would like to recycle in Ajijic."
    : "Hola, tengo electrónicos que quiero reciclar en Ajijic.";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description,
    url,
    serviceType: isEnglish
      ? "Electronics recycling and refurbishing"
      : "Reciclaje y reacondicionamiento de electrónicos",
    provider: {
      "@type": "LocalBusiness",
      name: "jb.repair",
      url: "https://jbrepair.info",
      areaServed: "Ajijic, Chapala, Lake Chapala",
    },
    areaServed: [
      { "@type": "City", name: "Ajijic" },
      { "@type": "City", name: "Chapala" },
      { "@type": "AdministrativeArea", name: "Lake Chapala" },
    ],
    availableLanguage: isEnglish
      ? ["English", "Spanish"]
      : ["Spanish", "English"],
  };

  return (
    <>
      <SEO
        title={title}
        description={description}
        url={url}
        locale={isEnglish ? "en_US" : "es_MX"}
        keywords={
          isEnglish
            ? "electronics recycling ajijic, e-waste ajijic, recycle laptops ajijic, recycle phones ajijic, electronics reuse lake chapala"
            : "reciclaje de electrónicos ajijic, residuos electrónicos ajijic, reciclar laptops ajijic, reciclar celulares ajijic, reutilización electrónica ribera de chapala"
        }
      />
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>

      <section className="py-10 md:py-16 px-4 max-w-5xl mx-auto space-y-5">
        <div className="mb-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="text-sm text-primary underline hover:opacity-80 transition"
            aria-label={isEnglish ? "Go back" : "Regresar"}
          >
            {isEnglish ? "← Back" : "← Regresar"}
          </button>
        </div>

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
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
        {isEnglish
          ? "Have old, slow, broken or unused electronics in Ajijic?"
          : "¿Tienes electrónicos viejos, lentos, dañados o sin uso en Ajijic?"}
        <br />
        {isEnglish
          ? "We evaluate them for repair, refurbishing, reuse, parts, or responsible handling so fewer devices become electronic waste."
          : "Los evaluamos para reparar, reacondicionar, reutilizar, aprovechar piezas o darles un manejo responsable para reducir residuos electrónicos."}
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
          type="button"
          onClick={() => goToContact(navigate)}
          className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold text-center hover:bg-primary hover:text-white hover:scale-[1.02] active:scale-95 transition-all duration-150"
        >
          {isEnglish ? "Tell us what you have" : "Cuéntanos qué tienes"}
        </button>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        {isEnglish
          ? "Send photos or a short list and we will tell you the next step."
          : "Envíanos fotos o una lista breve y te diremos el siguiente paso."}
      </p>

      {/* WHAT WE ACCEPT */}
      <div className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold">
          {isEnglish ? "What we accept" : "Qué aceptamos"}
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc pl-6 text-gray-700 dark:text-gray-300">
          {(isEnglish
            ? [
                "Laptops",
                "Desktop computers",
                "Phones",
                "Tablets",
                "Game consoles",
                "Cables, chargers and accessories",
                "Small electronics",
              ]
            : [
                "Laptops",
                "Computadoras de escritorio",
                "Celulares",
                "Tablets",
                "Consolas",
                "Cables, cargadores y accesorios",
                "Electrónicos pequeños",
              ]
          ).map((item) => (
            <li key={item}>{item}</li>
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
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl">
          {isEnglish
            ? "Recycling and reusing electronics helps reduce waste, extend device life, recover usable parts, and support a more sustainable community around Ajijic and Lake Chapala."
            : "Reciclar y reutilizar electrónicos ayuda a reducir residuos, extender la vida útil de los dispositivos, recuperar piezas útiles y apoyar una comunidad más sostenible en Ajijic y la Ribera de Chapala."}
        </p>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
          {(isEnglish
            ? [
                "Reduce electronic waste",
                "Reuse working devices",
                "Recover parts from damaged devices",
                "Help the local community",
              ]
            : [
                "Reduce residuos electrónicos",
                "Reutiliza dispositivos funcionales",
                "Recupera piezas de dispositivos dañados",
                "Apoya a la comunidad local",
              ]
          ).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      {/* WHAT WE DO */}
      <div className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold">
          {isEnglish ? "What we do" : "Qué hacemos"}
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc pl-6 text-gray-700 dark:text-gray-300">
          {(isEnglish
            ? [
                "Check device condition",
                "Repair when practical",
                "Refurbish for reuse",
                "Recover usable parts",
              ]
            : [
                "Revisar la condición del equipo",
                "Reparar cuando sea viable",
                "Reacondicionar para reutilizar",
                "Recuperar piezas útiles",
              ]
          ).map((item) => (
            <li key={item}>{item}</li>
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
            2.{" "}
            {isEnglish
              ? "Send photos or a device list"
              : "Envíanos fotos o una lista de equipos"}
          </li>
          <li>
            3.{" "}
            {isEnglish
              ? "We evaluate the best reuse or recycling path"
              : "Evaluamos la mejor opción de reutilización o reciclaje"}
          </li>
          <li>
            4.{" "}
            {isEnglish
              ? "We coordinate pickup or drop-off when possible"
              : "Coordinamos recolección o entrega cuando sea posible"}
          </li>
        </ol>
      </div>

      {/* NOTE */}
      <p className="text-sm text-gray-500 dark:text-gray-400 max-w-2xl">
        {isEnglish
          ? "Devices may be refurbished, reused for parts, or redirected based on condition. Please contact us before bringing batteries, large appliances, or damaged screens."
          : "Los dispositivos pueden ser reacondicionados, reutilizados para piezas o redirigidos según su condición. Contáctanos antes de traer baterías, electrodomésticos grandes o pantallas dañadas."}
      </p>
    </section>
    </>
  );
}

ElectronicsRecycling.propTypes = {
  lang: PropTypes.string.isRequired,
};
