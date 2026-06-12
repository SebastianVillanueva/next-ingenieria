import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEXT — Operational Intelligence for development & construction",
  description: "NEXT diseña e instala sistemas operativos para constructoras e inmobiliarias que necesitan mejorar confiabilidad, visibilidad y capacidad de ejecución.",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" style={{ overflowX: "hidden" }}>
      <head>
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Syne:wght@400;700;800&display=swap" rel="stylesheet" />
      </head>
      <body style={{ overflowX: "hidden", maxWidth: "100vw" }}>{children}</body>
    </html>
  );
}
