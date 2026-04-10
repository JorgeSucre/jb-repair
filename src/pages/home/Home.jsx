import React, { lazy, Suspense } from "react";
import Hero from "../../components/Hero.jsx";
import Services from "../../components/Services.jsx";
import WhyChooseUs from "../../components/WhyChooseUs.jsx";
const Testimonials = lazy(() => import("../../components/Testimonials.jsx"));
const Faq = lazy(() => import("../../components/FAQ.jsx"));
import Form from "../../components/Form.jsx";

export default function Home({ lang = "en" }) {
  const t = {
    es: {
      form: {
        name: "Tu nombre",
        email: "Tu correo",
        message: "Tu mensaje",
        send: "Enviar",
      },
    },
    en: {
      form: {
        name: "Your name",
        email: "Your email",
        message: "Your message",
        send: "Send",
      },
    },
  }[lang];

  return (
    <main id="main-content">
      {/* Hero */}
      <Hero lang={lang} />

      {/* Services */}
      <Services lang={lang} />

      {/* Why Choose Us */}
      <WhyChooseUs lang={lang} />

      {/* Testimonials */}
      <Suspense fallback={<div className="h-32" />}>
        <Testimonials lang={lang} />
      </Suspense>

      {/* FAQ */}
      <Suspense fallback={<div className="h-32" />}>
        <Faq lang={lang} />
      </Suspense>

      {/* Contact */}
      <div
        id="contact"
        className="p-6 space-y-6 md:space-y-8 max-w-3xl mx-auto"
      >
        <Form lang={lang} t={t} />

        <section className="space-y-1 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            {lang === "es"
              ? "Lunes a Sábado, 9:00 a.m. - 6:00 p.m."
              : "Monday to Saturday, 9:00 a.m. - 6:00 p.m."}
          </p>
          <p>
            {lang === "es"
              ? "Ajijic, Chapala y la Ribera de Chapala · Servicio a domicilio"
              : "Ajijic, Chapala and the Lake Chapala area · On-site service available"}
          </p>
        </section>
      </div>
    </main>
  );
}
