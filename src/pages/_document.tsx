import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        />

        <link rel="preload" href="/css/critical.css" as="style" />
        <link rel="stylesheet" href="/css/critical.css" />

        <noscript>
          <link rel="stylesheet" href="/css/non-critical.css" />
        </noscript>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
        <Analytics />
        <SpeedInsights />
        <Script src="https://third-party-script.js" strategy="lazyOnload" />
      </body>
    </Html>
  );
}
