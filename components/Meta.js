import Head from "next/head";
import React from "react";

export default function Meta({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Explore Ahmad Atif's digital creations—a fusion of technology and creativity, inviting you on a captivating journey through the world of web development."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="apple-touch-icon" sizes="180x180" href="/portfolio/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/portfolio/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/portfolio/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/portfolio/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/portfolio/favicon/safari-pinned-tab.svg" color="#0369a1" />
      <meta name="msapplication-TileColor" content="#0369a1" />
      <meta name="theme-color" content="#0369a1" />
    </Head>
  );
}
