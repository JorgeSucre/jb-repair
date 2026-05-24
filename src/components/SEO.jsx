import PropTypes from "prop-types";

const siteUrl = "https://jbrepair.info";

export default function SEO({
  title,
  description,
  url = siteUrl,
  locale = "en_US",
  keywords = "computer repair ajijic, wifi repair ajijic, tech support ajijic",
}) {
  const siteName = "jb.repair";
  const defaultImage = `${siteUrl}/assets/logo.svg`;

  return (
    <>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />

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
  url: PropTypes.string,
  locale: PropTypes.string,
  keywords: PropTypes.string,
};
