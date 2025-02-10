import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
        <Analytics />
        <SpeedInsights />
      </body>
    </Html>
  );
}
