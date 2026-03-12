"use client";

import dynamic from "next/dynamic";

const MapClient = dynamic(() => import("@/components/MapClient"), {
  ssr: false,
  loading: () => (
    <div
      className="flex items-center justify-center"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <p className="text-muted-foreground">Cargando mapa...</p>
    </div>
  ),
});

export default function MapPage() {
  return <MapClient />;
}
