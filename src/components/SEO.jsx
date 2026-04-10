import React from "react";
import PropTypes from "prop-types";

export default function SEO({ title, description, url, locale = "en_US" }) {
  const siteName = "jb.repair";
  const defaultImage = "/assets/logo.svg";

  return (
    <>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="computer repair ajijic, wifi repair ajijic, tech support ajijic"
      />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Open Graph (Facebook, WhatsApp, etc.) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      <meta property="og:image" content={defaultImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultImage} />
    </>
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  locale: PropTypes.string,
};
