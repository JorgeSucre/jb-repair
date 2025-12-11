import React, { useState, useEffect } from "react";
import "./index.css";
import Hero from "./Hero.jsx";
import ServicesCarousel from "./ServicesCarousel.jsx";
import WhyChooseUs from "./WhyChooseUs.jsx";
import FAQ from "./FAQ.jsx";
import Gallery from "./Gallery.jsx";
import Testimonials from "./Testimonials.jsx";

export default function App() {
  const [lang, setLang] = useState("es");
  const [theme, setTheme] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );
  const [statusMessage, setStatusMessage] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
    document.documentElement.lang = lang;
  }, [theme, lang]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatusMessage(null);

    const formData = new FormData(e.target);
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/contacto@jbrepair.info",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setStatusMessage(
          lang === "es"
            ? "Mensaje enviado correctamente."
            : "Message sent successfully."
        );
        e.target.reset();
      } else {
        throw new Error("Error en el envío");
      }
    } catch (error) {
      setStatusMessage(
        lang === "es"
          ? "Error al enviar. Intenta de nuevo."
          : "Failed to send. Try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const t = {
    es: {
      slogan: "Soluciones técnicas rápidas, confiables y con estilo.",
      contact: "Contáctanos",
      services: "Servicios que ofrecemos",
      schedule: "Horario: Lunes a Sábado, 9:00 a.m. - 6:00 p.m.",
      location: "Ubicación: Flores Magón 12C · Servicio a domicilio disponible",
      form: {
        name: "Tu nombre",
        email: "Tu correo",
        message: "Tu mensaje",
        send: "Enviar",
      },
    },
    en: {
      slogan: "Fast, reliable, and stylish tech solutions.",
      contact: "Contact Us",
      services: "Services We Offer",
      schedule: "Schedule: Monday to Saturday, 9:00 a.m. - 6:00 p.m.",
      location: "Location: Flores Magón 12C · Home service available",
      form: {
        name: "Your name",
        email: "Your email",
        message: "Your message",
        send: "Send",
      },
    },
  }[lang];

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <header className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-4">
          <img
            src="/assets/logo.svg"
            alt="jb.repair logo"
            className="w-10 h-10"
          />
          <h1 className="text-2xl font-bold text-primary">jb.repair</h1>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="bg-primary text-black px-3 py-1 rounded hover:opacity-90 transition"
            aria-label={
              lang === "es" ? "Cambiar a inglés" : "Switch to Spanish"
            }
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="border px-3 py-1 rounded hover:opacity-70 transition"
            aria-label={
              theme === "dark" ? "Cambiar a modo claro" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </header>

      <main>
        <Hero lang={lang} />
        <ServicesCarousel lang={lang} />
        <WhyChooseUs lang={lang} />
        <Gallery lang={lang} />
        <FAQ lang={lang} />
        <Testimonials lang={lang} />

        <div className="p-6 space-y-16 max-w-3xl mx-auto" id="contact">
          <section className="text-center mt-20">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              {lang === "es"
                ? "¿Listo para reparar tu equipo?"
                : "Ready to repair your device?"}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto">
              {lang === "es"
                ? "Escríbenos y recibe diagnóstico gratuito, sin compromiso."
                : "Contact us now and get a free diagnosis, no strings attached."}
            </p>
            <a
              href="#contact"
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:opacity-90 transition"
            >
              {lang === "es" ? "Contáctanos ahora" : "Contact us now"}
            </a>
          </section>

          <section>
            <h3 className="text-2xl font-semibold mb-4">{t.contact}</h3>

            <form
              action="https://formsubmit.co/contacto@jbrepair.info"
              method="POST"
              className="space-y-4"
              onSubmit={() => setSubmitting(true)}
            >
              {/* Opciones de FormSubmit */}
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="Nuevo mensaje desde jbrepair.info"
              />
              <input type="hidden" name="_template" value="table" />

              {/* Página de agradecimiento (opcional) */}
              <input
                type="hidden"
                name="_next"
                value="https://jbrepair.info/gracias"
              />

              <input
                type="text"
                name="name"
                placeholder={t.form.name}
                required
                className="w-full p-3 rounded bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-400 dark:border-gray-600"
              />

              <input
                type="email"
                name="email"
                placeholder={t.form.email}
                required
                className="w-full p-3 rounded bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-400 dark:border-gray-600"
              />

              <textarea
                name="message"
                placeholder={t.form.message}
                required
                className="w-full p-3 rounded bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-400 dark:border-gray-600 h-32"
              ></textarea>

              <button
                type="submit"
                disabled={submitting}
                className="bg-primary text-black px-4 py-2 rounded hover:opacity-90 transition disabled:opacity-50"
              >
                {submitting
                  ? lang === "es"
                    ? "Enviando..."
                    : "Sending..."
                  : t.form.send}
              </button>
            </form>

            {statusMessage && (
              <p className="mt-4 text-center text-sm text-green-500 dark:text-green-400">
                {statusMessage}
              </p>
            )}
          </section>

          <section className="space-y-2 text-center text-sm text-gray-400">
            <p>{t.schedule}</p>
            <p>{t.location}</p>
            <div className="flex justify-center gap-4 mt-2 text-sm">
              <a
                href="https://wa.me/5213111751369"
                target="_blank"
                className="hover:underline"
              >
                WhatsApp
              </a>
              <a
                href="https://instagram.com/jb.repair"
                target="_blank"
                className="hover:underline"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com/jb.repair16"
                target="_blank"
                className="hover:underline"
              >
                Facebook
              </a>
              <a
                href="https://tiktok.com/@jb.repair"
                target="_blank"
                className="hover:underline"
              >
                TikTok
              </a>
            </div>
          </section>
        </div>
      </main>

      <footer className="text-center py-6 text-xs text-gray-500 dark:text-gray-400">
        &copy; 2025 jb.repair — Todos los derechos reservados
      </footer>
    </div>
  );
}
