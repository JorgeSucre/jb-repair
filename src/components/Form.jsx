import React, { useState } from "react";
import { wa } from "../utils/whatsapp.js";

export default function Form({ lang, t }) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [waDynamic, setWaDynamic] = useState(null);
  const [errors, setErrors] = useState({
    name: true,
    email: true,
    message: true,
  });
  const [touched, setTouched] = useState({});
  const [hint, setHint] = useState(null);

  React.useEffect(() => {
    setErrors({
      name: true,
      email: true,
      message: true,
    });
  }, []);

  const detectIntent = (text) => {
    const value = text.toLowerCase();

    if (value.includes("wifi") || value.includes("internet")) {
      return lang === "en"
        ? "Tip: mention where the signal is weak or unstable"
        : "Tip: menciona dónde falla la señal o se desconecta";
    }

    if (value.includes("laptop") || value.includes("computer")) {
      return lang === "en"
        ? "Tip: include if it's slow, overheating, or not turning on"
        : "Tip: menciona si está lenta, se calienta o no enciende";
    }

    if (
      value.includes("phone") ||
      value.includes("iphone") ||
      value.includes("android")
    ) {
      return lang === "en"
        ? "Tip: describe the issue (screen, battery, charging, etc.)"
        : "Tip: describe el problema (pantalla, batería, carga, etc.)";
    }

    return null;
  };

  const validate = (data) => {
    const newErrors = {};

    if (!data.name || data.name.trim().length < 3) {
      newErrors.name =
        lang === "en" ? "Enter a valid name" : "Ingresa un nombre válido";
    }

    if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email =
        lang === "en" ? "Enter a valid email" : "Ingresa un correo válido";
    }

    if (!data.message || data.message.length < 10) {
      newErrors.message =
        lang === "en"
          ? "Please describe your issue"
          : "Describe mejor tu problema";
    }

    return newErrors;
  };

  const message =
    lang === "en"
      ? "Hi, I’m contacting you from your website. I need help with a tech issue in Ajijic"
      : "Hola, te contacto desde tu sitio web. Necesito ayuda con un problema técnico en Ajijic";

  return (
    <section id="contact" className="mt-2 md:mt-4">
      <h2 className="text-2xl font-semibold mb-1">
        {lang === "en" ? "Describe your issue" : "Describe tu problema"}
      </h2>

      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
        {lang === "en"
          ? "The more details you share, the faster we can help you."
          : "Mientras más detalles compartas, más rápido podemos ayudarte."}
      </p>

      <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur border border-gray-200/60 dark:border-gray-700/60 rounded-xl p-4 md:p-5 shadow-sm">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const formEl = e.target;

            setLoading(true);
            setStatus(null);

            const formData = new FormData(formEl);
            const data = Object.fromEntries(formData.entries());

            const validationErrors = validate(data);
            if (Object.keys(validationErrors).length > 0) {
              setErrors(validationErrors);
              setLoading(false);
              return;
            }

            setErrors({});

            const waMessage = `${message}\n\n${lang === "en" ? "Name" : "Nombre"}: ${data.name}\n${lang === "en" ? "Email" : "Correo"}: ${data.email}\n${lang === "en" ? "Issue" : "Problema"}: ${data.message}`;

            try {
              const res = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              });

              if (!res.ok) throw new Error("Request failed");

              formEl.reset();
              setStatus("success");
              setWaDynamic(waMessage);
            } catch {
              setStatus("error");
              setWaDynamic(waMessage);
            } finally {
              setLoading(false);
            }
          }}
          className="space-y-3"
        >
          {/* Name */}
          <div>
            <label className="block mb-1 text-sm text-gray-700 dark:text-gray-300">
              {t.form.name}
            </label>
            <input
              name="name"
              placeholder={lang === "en" ? "Your name" : "Tu nombre"}
              required
              minLength={3}
              onChange={(e) => {
                const value = e.target.value;

                setErrors((prev) => {
                  const newErrors = { ...prev };

                  if (!value || value.trim().length < 3) {
                    newErrors.name =
                      lang === "en"
                        ? "Enter a valid name"
                        : "Ingresa un nombre válido";
                  } else {
                    delete newErrors.name;
                  }

                  return newErrors;
                });
              }}
              onBlur={() => setTouched((p) => ({ ...p, name: true }))}
              className={`w-full border bg-white/80 dark:bg-gray-900/80 shadow-sm focus:shadow-md ${
                touched.name
                  ? errors.name
                    ? "border-red-500"
                    : "border-green-500"
                  : "border-gray-300 dark:border-gray-600"
              } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary ${
                touched.name && !errors.name ? "focus:ring-green-500" : ""
              }`}
            />
            {touched.name && errors.name && (
              <p className="text-xs text-red-500 mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm text-gray-700 dark:text-gray-300">
              {t.form.email}
            </label>
            <input
              name="email"
              type="email"
              placeholder={lang === "en" ? "Your email" : "Tu correo"}
              required
              onChange={(e) => {
                const value = e.target.value;

                setErrors((prev) => {
                  const newErrors = { ...prev };

                  if (!value || !/\S+@\S+\.\S+/.test(value)) {
                    newErrors.email =
                      lang === "en"
                        ? "Enter a valid email"
                        : "Ingresa un correo válido";
                  } else {
                    delete newErrors.email;
                  }

                  return newErrors;
                });
              }}
              onBlur={() => setTouched((p) => ({ ...p, email: true }))}
              className={`w-full border bg-white/80 dark:bg-gray-900/80 shadow-sm focus:shadow-md ${
                touched.email
                  ? errors.email
                    ? "border-red-500"
                    : "border-green-500"
                  : "border-gray-300 dark:border-gray-600"
              } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary ${
                touched.email && !errors.email ? "focus:ring-green-500" : ""
              }`}
            />
            {touched.email && errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 text-sm text-gray-700 dark:text-gray-300">
              {t.form.message}
            </label>
            <textarea
              name="message"
              placeholder={
                lang === "en"
                  ? "Describe your issue (e.g. slow laptop, WiFi not working, etc.)"
                  : "Describe tu problema (ej. laptop lenta, WiFi no funciona, etc.)"
              }
              required
              rows={4}
              minLength={10}
              onChange={(e) => {
                const value = e.target.value;

                setErrors((prev) => {
                  const newErrors = { ...prev };

                  if (!value || value.length < 10) {
                    newErrors.message =
                      lang === "en"
                        ? "Please describe your issue"
                        : "Describe mejor tu problema";
                  } else {
                    delete newErrors.message;
                  }

                  return newErrors;
                });

                setHint(detectIntent(value));
              }}
              onBlur={() => setTouched((p) => ({ ...p, message: true }))}
              className={`w-full border bg-white/80 dark:bg-gray-900/80 shadow-sm focus:shadow-md ${
                touched.message
                  ? errors.message
                    ? "border-red-500"
                    : "border-green-500"
                  : "border-gray-300 dark:border-gray-600"
              } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary ${
                touched.message && !errors.message ? "focus:ring-green-500" : ""
              }`}
            />
            {touched.message && errors.message && (
              <p className="text-xs text-red-500 mt-1">{errors.message}</p>
            )}
            {touched.message && !errors.message && hint && (
              <p className="text-xs text-gray-500 mt-1 italic">{hint}</p>
            )}
          </div>

          {/* Submit */}
          <button
            disabled={loading || errors.name || errors.email || errors.message}
            className="w-full bg-primary text-white px-6 py-3 rounded-lg text-base font-semibold shadow-lg hover:shadow-xl transition disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-95"
          >
            {loading
              ? lang === "en"
                ? "Sending..."
                : "Enviando..."
              : t.form.send}
          </button>

          {/* Status */}
          {status === "success" && (
            <p className="text-sm text-green-600 mt-1">
              {lang === "en"
                ? "Message sent — we’ll contact you shortly"
                : "Mensaje enviado — te contactamos pronto"}
            </p>
          )}

          {status === "error" && (
            <p className="text-sm text-red-600 mt-1">
              {lang === "en"
                ? "Error sending message — please contact us via WhatsApp"
                : "Error al enviar — contáctanos por WhatsApp"}
            </p>
          )}

          {/* WhatsApp fallback CTA */}
          <a
            href={wa(waDynamic || message)}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-primary underline text-sm mt-2"
          >
            {lang === "en"
              ? "Or get help instantly on WhatsApp"
              : "O recibe ayuda inmediata por WhatsApp"}
          </a>

          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">
            {lang === "en"
              ? "We usually reply within minutes"
              : "Respondemos en minutos"}
          </p>
        </form>
      </div>
    </section>
  );
}
