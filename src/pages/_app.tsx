import "../styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import SEOHead from "@/components/SEOHead";

import { Inter } from "next/font/google";

const Header = dynamic(() => import("@/components/Header"), { ssr: false });

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <SEOHead />
      <Header />
      <Component {...pageProps} />
    </main>
  );
}
