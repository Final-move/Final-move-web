import React from "react";

const Seo = ({ title }) => {
  return (
    <head>
      <title>{title ? title : "Sign Fireman Ministry"}</title>
      <meta name="description" content="" />
      <meta
        name="keywords"
        content="Sign Fireman Ministry, Final Move Of God, Sign Fireman, The Move Of God"
      />
      <meta name="author" content="Sign Fireman Ministry" />
      <meta name="robots" content="all" />
      <meta name="theme-color" content="rgba(255, 255, 255, 1)" />
      <meta property="og:title" content="" />
      <meta property="og:description" content="" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="" />
      <meta property="og:image:alt" content="Sign Fireman Ministry" />
      <meta name="" />
      <link rel="manifest" href="manifest.json" />
      <link rel="apple-touch-icon" href="favicon.png" />
      <link rel="icon" type="image/png" sizes="16/16" href="" />
      <link rel="icon" type="image/png" sizes="32/32" href="" />
      <meta name="twitter:card" content="" />
      <link
        rel="sitemap"
        type="application/xml"
        title="Sitemap"
        href="atom.xml"
      />
    </head>
  );
};

export default Seo;
