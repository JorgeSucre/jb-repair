import React from "react";
import PropTypes from "prop-types";

export default function Gallery({ lang }) {
  const content = {
    es: {
      title: "Galería de trabajos",
      items: [
        {
          title: "Mantenimiento y Limpieza Profunda a MacBook Pro 2019",
          url: "https://www.tiktok.com/@jb.repair/video/7498539745371409671",
          thumb: "https://www.tiktok.com/api/img/?itemId=7498539745371409671",
        },
        {
          title: 'Cambio de Pantalla iPad Pro de 12.9" 2018',
          url: "https://www.tiktok.com/@jb.repair/video/7494448927304109319",
          thumb: "https://www.tiktok.com/api/img/?itemId=7494448927304109319",
        },
        {
          title: "Bypass any Macbook",
          url: "https://www.tiktok.com/@jb.repair/video/7485376467568741637",
          thumb: "https://www.tiktok.com/api/img/?itemId=7485376467568741637",
        },
      ],
      button: "Ver en TikTok",
    },
    en: {
      title: "Project Gallery",
      items: [
        {
          title: "Deep Cleaning & Maintenance — MacBook Pro 2019",
          url: "https://www.tiktok.com/@jb.repair/video/7498539745371409671",
          thumb: "https://www.tiktok.com/api/img/?itemId=7498539745371409671",
        },
        {
          title: 'Screen Replacement — iPad Pro 12.9" 2018',
          url: "https://www.tiktok.com/@jb.repair/video/7494448927304109319",
          thumb: "https://www.tiktok.com/api/img/?itemId=7494448927304109319",
        },
        {
          title: "MacBook Bypass — Any Model",
          url: "https://www.tiktok.com/@jb.repair/video/7485376467568741637",
          thumb: "https://www.tiktok.com/api/img/?itemId=7485376467568741637",
        },
      ],
      button: "View on TikTok",
    },
  }[lang];

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900 transition-colors">
      <h2 className="text-3xl font-bold text-center text-primary mb-10">
        {content.title}
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {content.items.map((item, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <img
              src={item.thumb}
              alt={item.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4 flex flex-col justify-between flex-grow">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                {item.title}
              </h3>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block text-sm font-medium bg-primary text-black px-4 py-2 rounded hover:opacity-90 transition text-center"
              >
                {content.button}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

Gallery.propTypes = {
  lang: PropTypes.string.isRequired,
};
