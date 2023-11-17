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
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/portfolio/favicon/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/portfolio/favicon/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/portfolio/favicon/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/portfolio/favicon/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/portfolio/favicon/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/portfolio/favicon/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/portfolio/favicon/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/portfolio/favicon/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/portfolio/favicon/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/portfolio/favicon/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/portfolio/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/portfolio/favicon/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/portfolio/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/portfolio/favicon/manifest.json" />
      <meta name="msapplication-TileColor" content="#0369a1" />
      <meta
        name="msapplication-TileImage"
        content="/portfolio/favicon/ms-icon-144x144.png"
      />
      <meta name="theme-color" content="#0369a1" />
    </Head>
  );
}
