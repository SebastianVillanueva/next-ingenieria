import type { Metadata } from "next";
import { Syne, DM_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NEXT — Operational Intelligence for development & construction",
  description:
    "NEXT diseña e instala sistemas operativos para constructoras e inmobiliarias que necesitan mejorar confiabilidad, visibilidad y capacidad de ejecución.",
  keywords: [
    "sistemas de producción",
    "construcción",
    "inmobiliaria",
    "LPS",
    "Last Planner System",
    "VDC",
    "PPM",
    "operational intelligence",
    "Perú",
  ],
  openGraph: {
    title: "NEXT — Operational Intelligence for development & construction",
    description:
      "Sistemas operativos para constructoras e inmobiliarias. Resultados medibles.",
    type: "website",
    locale: "es_PE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${syne.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}