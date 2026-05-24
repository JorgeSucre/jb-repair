import React, { lazy, Suspense } from "react";
import PropTypes from "prop-types";
import SEO from "../../components/SEO.jsx";
import Hero from "../../components/Hero.jsx";
import Services from "../../components/Services.jsx";
import WhyChooseUs from "../../components/WhyChooseUs.jsx";
import Form from "../../components/Form.jsx";

const Testimonials = lazy(() => import("../../components/Testimonials.jsx"));
const Faq = lazy(() => import("../../components/FAQ.jsx"));

export default function Home({ lang = "en" }) {
  const isEnglish = lang === "en";

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
    <>
      <SEO
        title={
          isEnglish
            ? "jb.repair | Tech Support & Computer Repair in Ajijic"
            : "jb.repair | Soporte técnico y reparación en Ajijic"
        }
        description={
          isEnglish
            ? "Fast, on-site tech support in Ajijic. Computer repair, WiFi troubleshooting, phone repair, security cameras and device support."
            : "Soporte técnico a domicilio en Ajijic. Reparación de computadoras, WiFi, celulares, cámaras de seguridad y ayuda con dispositivos."
        }
        url="https://jbrepair.info/"
        locale={isEnglish ? "en_US" : "es_MX"}
        keywords={
          isEnglish
            ? "tech support ajijic, computer repair ajijic, wifi repair ajijic, phone repair ajijic, security cameras ajijic"
            : "soporte técnico ajijic, reparación de computadoras ajijic, reparación wifi ajijic, reparación celulares ajijic, cámaras de seguridad ajijic"
        }
      />

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
        className="scroll-mt-24 p-6 space-y-6 md:space-y-8 max-w-3xl mx-auto"
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
    </>
  );
}

Home.propTypes = {
  lang: PropTypes.string,
};
