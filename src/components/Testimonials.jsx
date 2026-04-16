import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { wa } from "../utils/whatsapp.js";

export default function Testimonials({ lang }) {
  const isEnglish = lang === "en";

  const message = isEnglish
    ? "Hi, I saw your reviews and need help with a tech issue in Ajijic"
    : "Hola, vi tus reseñas y necesito ayuda con un problema técnico en Ajijic";

  const reviews = [
    {
      name: "Gabriela Escatel",
      title: isEnglish
        ? "Great Service in Ajijic"
        : "Excelente servicio en Ajijic",
      text: isEnglish
        ? "Great service in Ajijic. Affordable, adaptable to client needs, and always willing to help with anything I needed. Highly recommended."
        : "¡Un gran servicio en Ajijic! Accesible en costo, adaptable a las necesidades del cliente y con toda la disposición de ayudarme con lo que necesitaba. ¡Lo recomiendo!",
    },
    {
      name: "Lynn Scott",
      title: isEnglish
        ? "Reliable Ongoing Support"
        : "Soporte confiable constante",
      text: isEnglish
        ? "I have worked with Jorge and his team many times and they have been great. I really appreciate all his help."
        : "He trabajado con Jorge y su equipo muchas veces y siempre han sido excelentes. Aprecio mucho toda su ayuda.",
    },
    {
      name: "Laura Pratt",
      title: isEnglish
        ? "WiFi Fixed in One Visit"
        : "WiFi arreglado en una sola visita",
      text: isEnglish
        ? "Our WiFi barely worked across the house. Jorge fixed coverage, set up everything, and made it reliable in one visit. Fast, professional, and speaks English."
        : "Nuestro WiFi no funcionaba bien en toda la casa. Jorge arregló la cobertura y dejó todo funcionando en una sola visita. Rápido, profesional y confiable.",
    },
    {
      name: "Ale Robledo",
      title: isEnglish
        ? "Fast Computer Repair at Home"
        : "Reparación rápida a domicilio",
      text: isEnglish
        ? "He fixed my computer and did a full cleaning. Super fast, very professional, and came directly to my home. Even offered a warranty."
        : "Reparó mi computadora y le dio mantenimiento completo. Muy rápido, profesional y con servicio a domicilio. Incluso ofreció garantía.",
    },
    {
      name: "Janis Richman",
      title: isEnglish
        ? "Reliable Tech Support Anytime"
        : "Soporte confiable en todo momento",
      text: isEnglish
        ? "My go-to for any tech issue. Always responsive, knowledgeable, and genuinely cares about results. Even helps with quick questions anytime."
        : "Mi opción principal para cualquier problema tecnológico. Siempre responde rápido, sabe lo que hace y realmente se preocupa por ayudarte.",
    },
    {
      name: "Maria Díaz",
      title: isEnglish
        ? "Faster Than Guadalajara"
        : "Más rápido que Guadalajara",
      text: isEnglish
        ? "I replaced my iPhone battery locally instead of waiting days in Guadalajara. Fast, trustworthy, and excellent service."
        : "Reemplacé la batería de mi iPhone aquí sin esperar días en Guadalajara. Rápido, confiable y excelente servicio.",
    },
    {
      name: "Christine Laberge",
      title: isEnglish ? "Professional & Reliable" : "Profesional y confiable",
      text: isEnglish
        ? "Punctual, efficient, knowledgeable, and respectful. Exactly the kind of service you want when dealing with tech issues."
        : "Puntual, eficiente, con mucho conocimiento y muy respetuoso. Justo el tipo de servicio que buscas.",
    },
    {
      name: "Rob Maitland",
      title: isEnglish ? "Highly Recommended" : "Altamente recomendado",
      text: isEnglish
        ? "Very good at what he does. Straightforward, effective, and reliable."
        : "Muy bueno en lo que hace. Directo, efectivo y confiable.",
    },
    {
      name: "Lina Quetzali Robledo Corona",
      title: isEnglish ? "Excellent Laptop Repair" : "Excelente reparación",
      text: isEnglish
        ? "Fixed my laptop perfectly. 10/10 service. Best option in Ajijic."
        : "Me arregló mi laptop y 10/10. La mejor opción en Ajijic.",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const isPaused = useRef(false);
  const touchStartX = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPaused.current || document.hidden) return;

      setVisible(false);
      setTimeout(() => {
        setStartIndex((prev) => (prev + 1) % reviews.length);
        setVisible(true);
      }, 250);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const visibleReviews = Array.from(
    { length: reviews.length },
    (_, i) => reviews[(startIndex + i) % reviews.length],
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "jb.repair",
    image: "https://jbrepair.info",
    url: "https://jbrepair.info",
    telephone: "+52 311 175 1369",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ajijic",
      addressCountry: "MX",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: reviews.length.toString(),
    },
    review: reviews.slice(0, 5).map((r) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: r.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      reviewBody: r.text,
    })),
  };

  return (
    <section className="py-8 md:py-10 px-3 text-gray-900 dark:text-white transition-colors duration-300">
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-4">
        {isEnglish ? "Google Reviews" : "Reseñas de Google"}
      </h2>
      <p className="text-xs text-primary text-center font-semibold mb-1">
        {isEnglish ? "Top rated in Ajijic" : "Mejor calificado en Ajijic"}
      </p>

      <div className="max-w-4xl mx-auto">
        <div
          onMouseEnter={() => (isPaused.current = true)}
          onMouseLeave={() => (isPaused.current = false)}
          onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            const delta = e.changedTouches[0].clientX - touchStartX.current;
            if (Math.abs(delta) > 50) {
              setVisible(false);
              setTimeout(() => {
                setStartIndex((prev) =>
                  delta < 0
                    ? (prev + 1) % reviews.length
                    : (prev - 1 + reviews.length) % reviews.length,
                );
                setVisible(true);
              }, 200);
            }
          }}
          className={`grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
        >
          {visibleReviews.map((review, index) => {
            const isWifi = review.title.toLowerCase().includes("wifi");
            const isComputer =
              review.title.toLowerCase().includes("computer") ||
              review.title.toLowerCase().includes("laptop");

            return (
              <div
                key={review.name}
                className={`bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-2 md:p-3 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary dark:hover:bg-gray-800 hover:scale-[1.015] transition-all duration-300 flex flex-col justify-between ${
                  index === 0
                    ? "col-span-2 md:col-span-2 p-4 md:p-5 border-primary shadow-md bg-gradient-to-br from-primary/5 to-transparent transition-transform duration-500"
                    : isWifi
                      ? "border-blue-400/40"
                      : isComputer
                        ? "border-green-400/40"
                        : ""
                }`}
              >
                {index === 0 && (
                  <span className="text-[10px] uppercase tracking-wide text-primary font-semibold mb-1 inline-block">
                    {isEnglish ? "Top review" : "Mejor reseña"}
                  </span>
                )}
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold">
                    {review.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div className="text-yellow-400 text-sm hover:animate-[pulse_1.5s_ease-in-out]">
                    ★★★★★
                  </div>
                </div>
                <p
                  className={`text-xs md:text-sm font-semibold text-gray-800 dark:text-gray-100 mb-1 ${index === 0 ? "text-sm md:text-base font-bold" : ""}`}
                >
                  {review.title}
                </p>
                <p
                  className={`text-xs text-gray-600 dark:text-gray-300 mb-2 ${index === 0 ? "text-sm md:text-base line-clamp-none" : "line-clamp-3"}`}
                >
                  <span className="text-primary mr-1">“</span>
                  {review.text}
                  <span className="text-primary ml-1">”</span>
                </p>
                {index === 0 && (
                  <div className="h-px w-full bg-primary/20 my-2" />
                )}
                <p
                  className={`text-[11px] md:text-xs font-medium text-gray-800 dark:text-gray-200 ${index === 0 ? "text-sm" : ""}`}
                >
                  {review.name}
                </p>
              </div>
            );
          })}
        </div>
        {/* Google review actions */}
        <div className="text-center mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center">
          <a
            href="https://g.page/r/CSkOaH6h6oOgEAI/review"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 hover:brightness-110 transition-all duration-150"
          >
            {isEnglish ? "Write a review" : "Escribir una reseña"}
          </a>

          <a
            href="https://g.page/r/CSkOaH6h6oOgEAI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline text-sm flex items-center justify-center hover:opacity-80 transition"
          >
            {isEnglish
              ? "See all reviews on Google"
              : "Ver todas las reseñas en Google"}
          </a>
          <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
            ⭐ 5.0 • 15+ {isEnglish ? "reviews" : "reseñas"}
          </span>
        </div>
        {/* Soft CTA to WhatsApp */}
        <div className="text-center mt-7">
          <a
            href={wa(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-5 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 hover:brightness-110 transition-all duration-150"
          >
            {isEnglish
              ? "Get help in minutes on WhatsApp"
              : "Recibe ayuda en minutos por WhatsApp"}
          </a>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
            {isEnglish
              ? "Quick response • Trusted local service"
              : "Respuesta rápida • Servicio local confiable"}
          </p>
        </div>
      </div>

      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-5">
        {isEnglish ? "Real reviews from Google" : "Reseñas reales de Google"}
      </p>
    </section>
  );
}

Testimonials.propTypes = {
  lang: PropTypes.string,
};
