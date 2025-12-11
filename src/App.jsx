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

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.lang = lang;
  }, [theme, lang]);

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

        <div className="p-6 space-y-16 max-w-3xl mx-auto">
          {/* CTA principal */}
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

          {/* FORMULARIO CORREGIDO */}
          <section id="contact">
            <h3 className="text-2xl font-semibold mb-4">{t.contact}</h3>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const form = new FormData(e.target);
                const data = Object.fromEntries(form.entries());

                const res = await fetch("/api/send-email", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(data),
                });

                if (res.ok) {
                  alert("Mensaje enviado con éxito!");
                  e.target.reset();
                } else {
                  alert("Error al enviar el mensaje. Inténtalo más tarde.");
                }
              }}
              className="space-y-4"
            >
              <div>
                <label className="block mb-1" htmlFor="name">
                  {t.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-primary"
                />
              </div>

              <div>
                <label className="block mb-1" htmlFor="email">
                  {t.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-primary"
                />
              </div>

              <div>
                <label className="block mb-1" htmlFor="message">
                  {t.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-primary"
                  rows={4}
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:opacity-90 transition"
              >
                {t.form.send}
              </button>
            </form>
          </section>

          {/* Footer info */}
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
