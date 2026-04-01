import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import BottomNav from "@/components/BottomNav";

export const metadata: Metadata = {
  title: "A Coruña Travel Planner — Tu escapada perfecta",
  description:
    "Planifica tu escapada perfecta a A Coruña de jueves a lunes. Itinerario optimizado, restaurantes auténticos, mapa interactivo y excursión a Costa da Morte.",
  authors: [{ name: "A Coruña Travel Planner" }],
  openGraph: {
    title: "A Coruña Travel Planner — Tu escapada perfecta",
    description:
      "Guía digital premium para una escapada de 5 días en A Coruña, Galicia.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#f5f0e8" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#171c24" media="(prefers-color-scheme: dark)" />
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var d=document.documentElement;var m=window.matchMedia('(prefers-color-scheme: dark)');function t(e){d.classList.toggle('dark',e.matches)}t(m);m.addEventListener('change',t)}catch(e){}})()` }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400&family=Source+Sans+3:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <div className="min-h-screen bg-background">{children}</div>
          <BottomNav />
        </Providers>
      </body>
    </html>
  );
}
