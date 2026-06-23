import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEXT — Operational Intelligence for development & construction",
  description: "NEXT diseña e instala sistemas operativos para constructoras e inmobiliarias que necesitan mejorar confiabilidad, visibilidad y capacidad de ejecución.",
  openGraph: {
    title: "NEXT — Sistemas de producción para desarrolladoras y constructoras",
    description: "Diseñamos e implementamos sistemas de producción para mejorar plazo, costo y rentabilidad.",
    url: "https://nextperu.pe",
    siteName: "NEXT",
    images: [
      {
        url: "https://nextperu.pe/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NEXT — Sistemas de producción para desarrolladoras y constructoras",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXT — Sistemas de producción para desarrolladoras y constructoras",
    description: "Diseñamos e implementamos sistemas de producción para mejorar plazo, costo y rentabilidad.",
    images: ["https://nextperu.pe/og-image.jpg"],
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" style={{ overflowX: "hidden" }}>
      <head>
        
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
        <link rel="apple-touch-icon" href="/favicon-180.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Syne:wght@400;700;800&display=swap" rel="stylesheet" />
      </head>
      <body style={{ overflowX: "hidden", maxWidth: "100vw" }}>{children}</body>
    </html>
  );
}
