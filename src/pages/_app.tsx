import "../styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import SEOHead from "@/components/SEOHead";

const Header = dynamic(() => import("@/components/Header"), { ssr: false });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <SEOHead />
      <Header />
      <Component {...pageProps} />
    </main>
  );
}
