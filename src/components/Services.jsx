import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Services({ lang = "es" }) {
  const isEnglish = lang === "en";

  const services = [
    {
      title: isEnglish ? "💻 Device Repair" : "💻 Reparación de dispositivos",
      items: isEnglish
        ? [
            "My laptop or phone is running slow",
            "I think I have a virus",
            "It won’t turn on",
          ]
        : [
            "Mi laptop o mi celular están lentos",
            "Mi computadora tiene virus",
            "No enciende",
          ],
      url: "/device-repair-ajijic",
    },
    {
      title: isEnglish ? "📶 WiFi & Network Issues" : "📶 Problemas de WiFi",
      items: isEnglish
        ? [
            "My WiFi is slow",
            "Internet keeps disconnecting",
            "I don’t have coverage in my home",
          ]
        : [
            "El WiFi está lento",
            "El internet se desconecta",
            "No hay señal en toda mi casa",
          ],
      url: "/wifi-problems-ajijic",
    },
    {
      title: isEnglish ? "🛡️ Security & Cameras" : "🛡️ Cámaras y seguridad",
      items: isEnglish
        ? [
            "I need security cameras",
            "I want a smart doorbell",
            "I want to monitor my home",
          ]
        : [
            "Quiero instalar cámaras",
            "Quiero un timbre inteligente",
            "Quiero monitorear mi casa",
          ],
      url: "/security-cameras-ajijic",
    },
    {
      title: isEnglish ? "🏠 Tech Support" : "🏠 Soporte técnico",
      items: isEnglish
        ? [
            "I need help with my computer",
            "I can’t access my accounts",
            "I don’t know how to fix it",
          ]
        : [
            "Necesito ayuda con mi computadora",
            "No puedo acceder a mis cuentas",
            "No sé cómo arreglarlo",
          ],
      url: "/tech-support-ajijic",
    },
  ];

  return (
    <section
      id="services"
      className="py-8 md:py-10 px-3 text-gray-900 dark:text-white transition-colors duration-300"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-2">
        {isEnglish ? "What problem are you having?" : "¿Qué problema tienes?"}
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-4 md:mb-5 max-w-2xl mx-auto">
        {isEnglish
          ? "Pick what best matches your issue and we’ll take care of the rest."
          : "Elige la opción que mejor describe tu problema y nosotros lo solucionamos."}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 px-1 sm:px-4 max-w-5xl mx-auto">
        {services.map((service) => (
          <Link
            key={service.title}
            to={service.url}
            className="block"
            aria-label={`${service.title} details`}
          >
            <div className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-2 md:p-3 shadow-md flex flex-col justify-between hover:scale-[1.02] hover:shadow-2xl hover:border-primary dark:hover:bg-gray-800 transition-all duration-300 cursor-pointer active:scale-95 group">
              <h3 className="font-bold text-xs md:text-sm text-gray-900 dark:text-white mb-1.5">
                {service.title}
              </h3>

              <ul className="text-xs md:text-sm text-gray-700 dark:text-gray-300 space-y-1">
                {service.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>

              <div className="mt-1.5 text-primary text-xs md:text-sm font-semibold group-hover:underline">
                {isEnglish ? "View details →" : "Ver detalles →"}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

Services.propTypes = {
  lang: PropTypes.string,
};
