import Head from "next/head";

const SEO = ({ title, description, url, image, twitterCard, children }) => {
  return (
    <Head>
      {title && <title>{title}</title>}
      {description && (
        <meta name="description" content={description} key="description" />
      )}
      {url !== undefined && (
        <meta
          property="og:url"
          content={`https://algirlithm.org${url}`}
          key="og:url"
        />
      )}
      {title && <meta property="og:title" content={title} key="og:title" />}
      {description && (
        <meta
          property="og:description"
          content={description}
          key="og:description"
        />
      )}
      {image && (
        <meta
          property="og:image"
          content={`https://algirlithm.org${image}`}
          key="og:image"
        />
      )}
      {twitterCard && (
        <meta name="twitter:card" content={twitterCard} key="twitter:card" />
      )}
      {children}
    </Head>
  );
};

export default SEO;
