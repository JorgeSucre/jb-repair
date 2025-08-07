import React from "react";
import PropTypes from "prop-types";

export default function ServicesCarousel({ lang }) {
  const content = {
    es: {
      title: "Servicios que ofrecemos",
      list: [
        {
          icon: "💻",
          title: "Reparación de computadoras y laptops",
          desc: "Solución de problemas comunes de hardware y software.",
        },
        {
          icon: "🧰",
          title: "Mantenimiento preventivo y correctivo",
          desc: "Mejora el rendimiento y evita fallas futuras.",
        },
        {
          icon: "🔍",
          title: "Diagnóstico gratuito",
          desc: "Identificación rápida y precisa de problemas técnicos.",
        },
        {
          icon: "💾",
          title: "Instalación de software",
          desc: "Configuramos los programas que necesitas de forma segura.",
        },
        {
          icon: "🗂️",
          title: "Respaldo y recuperación de datos",
          desc: "Recuperamos archivos importantes y hacemos copias seguras.",
        },
        {
          icon: "🏠",
          title: "Soporte técnico a domicilio",
          desc: "Vamos hasta ti para resolver cualquier inconveniente.",
        },
        {
          icon: "📱",
          title: "Reparación de celulares y tablets",
          desc: "Reparaciones avanzadas a cargo de nuestro especialista Joss.",
        },
        {
          icon: "🔐",
          title: "Formateo y reinstalación segura",
          desc: "Limpieza completa y reinstalación del sistema sin pérdida de datos.",
        },
        {
          icon: "🛡️",
          title: "Eliminación de virus y malware",
          desc: "Limpieza profunda y protección sin afectar tus archivos.",
        },
        {
          icon: "☁️",
          title: "Respaldos en la nube",
          desc: "Configuramos copias automáticas en Google Drive, iCloud y más.",
        },
        {
          icon: "🧑‍💼",
          title: "Soluciones para negocios",
          desc: "Soporte para oficinas, redes, impresoras y mantenimiento general.",
        },
        {
          icon: "🔧",
          title: "Recuperación de sistemas dañados",
          desc: "Reparamos equipos que no inician o presentan errores críticos.",
        },
        {
          icon: "🌐",
          title: "Desarrollo de páginas web",
          desc: "Sitios modernos y personalizados, diseñados por nuestro experto Román.",
        },
        {
          icon: "🧪",
          title: "Limpieza interna profunda",
          desc: "Desarmado completo y limpieza física para prolongar la vida del equipo.",
        },
      ],
    },
    en: {
      title: "Services We Offer",
      list: [
        {
          icon: "💻",
          title: "Computer and Laptop Repair",
          desc: "Solving common hardware and software issues.",
        },
        {
          icon: "🧰",
          title: "Preventive & Corrective Maintenance",
          desc: "Improve performance and avoid future failures.",
        },
        {
          icon: "🔍",
          title: "Free Diagnostics",
          desc: "Quick and accurate technical issue identification.",
        },
        {
          icon: "💾",
          title: "Software Installation",
          desc: "Safe setup of the programs you need.",
        },
        {
          icon: "🗂️",
          title: "Data Backup & Recovery",
          desc: "We recover important files and create backups.",
        },
        {
          icon: "🏠",
          title: "On-site Technical Support",
          desc: "We come to you and fix it where you are.",
        },
        {
          icon: "📱",
          title: "Phone & Tablet Repair",
          desc: "Advanced phone and tablet repairs handled by our specialist Joss.",
        },
        {
          icon: "🔐",
          title: "Safe Format & Reinstallation",
          desc: "Full cleanup and OS reinstallation without data loss.",
        },
        {
          icon: "🛡️",
          title: "Virus & Malware Removal",
          desc: "Deep cleaning and protection without affecting your files.",
        },
        {
          icon: "☁️",
          title: "Cloud Backup Setup",
          desc: "We automate backups to Google Drive, iCloud and more.",
        },
        {
          icon: "🧑‍💼",
          title: "Business Solutions",
          desc: "Support for offices, networks, printers and general maintenance.",
        },
        {
          icon: "🔧",
          title: "System Recovery",
          desc: "We fix systems that don’t boot or show critical errors.",
        },
        {
          icon: "🌐",
          title: "Website Development",
          desc: "Modern, custom websites designed by our expert Román.",
        },
        {
          icon: "🧪",
          title: "Deep Internal Cleaning",
          desc: "Full disassembly and physical maintenance for longevity.",
        },
      ],
    },
  }[lang];

  const columns = Array.from({ length: 7 }, (_, i) => [
    content.list[i],
    content.list[i + 7],
  ]);

  return (
    <section className="py-20 px-4 bg-gray-100 dark:bg-gray-800 transition-colors">
      <h2 className="text-3xl font-bold text-center text-primary mb-8">
        {content.title}
      </h2>
      <div className="overflow-x-auto">
        <div className="flex gap-6 px-2 sm:px-6 min-w-fit">
          {columns.map((column, i) => (
            <div key={i} className="flex flex-col gap-6">
              {column.map((item, j) => (
                <div
                  key={j}
                  className="min-w-[250px] sm:min-w-[300px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md flex flex-col justify-between items-center text-center flex-shrink-0 min-h-[260px]"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 whitespace-pre-wrap">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

ServicesCarousel.propTypes = {
  lang: PropTypes.string.isRequired,
};
