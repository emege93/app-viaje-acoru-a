"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { List } from "lucide-react";
import { places, categoryLabels, categoryIcons, type PlaceCategory, type Place } from "@/data/places";
import { excursionStops } from "@/data/excursion";
import PlaceDetailDrawer from "@/components/PlaceDetailDrawer";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

// Fix default marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const colorMap: Record<string, string> = {
  monumento: "#1e3a5f",
  playa: "#3b82f6",
  mirador: "#059669",
  restaurante: "#ea580c",
  bar: "#a855f7",
  museo: "#e11d48",
  excursion: "#ca8a04",
};

function createIcon(category: string) {
  const color = colorMap[category] || "#1e3a5f";
  return L.divIcon({
    className: "custom-marker",
    html: `<div style="background:${color};width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;box-shadow:0 2px 8px rgba(0,0,0,0.3);border:2px solid white;">${categoryIcons[category as PlaceCategory] || "📍"}</div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });
}

const categories: (PlaceCategory | "all")[] = [
  "all", "monumento", "playa", "mirador", "restaurante", "bar", "museo", "excursion",
];

function MapController({ focusPlace, filter }: { focusPlace: Place | null; filter: string }) {
  const map = useMap();

  useEffect(() => {
    if (focusPlace) {
      map.setView([focusPlace.lat, focusPlace.lng], 16, { animate: true });
      return;
    }

    if (filter === "excursion") {
      const allExcursion = [
        ...places.filter((p) => p.category === "excursion"),
        ...excursionStops,
      ];
      if (allExcursion.length > 0) {
        const bounds = L.latLngBounds(allExcursion.map((p) => [p.lat, p.lng]));
        map.fitBounds(bounds, { padding: [40, 40], animate: true });
      }
    } else if (filter !== "all") {
      const filtered = places.filter((p) => p.category === filter);
      if (filtered.length > 0) {
        const bounds = L.latLngBounds(filtered.map((p) => [p.lat, p.lng]));
        map.fitBounds(bounds, { padding: [40, 40], animate: true });
      }
    } else {
      map.setView([43.3713, -8.3962], 13, { animate: true });
    }
  }, [focusPlace, filter, map]);

  return null;
}

function MapClientInner() {
  const searchParams = useSearchParams();
  const [filter, setFilter] = useState<string>(searchParams.get("filter") || "all");
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [listOpen, setListOpen] = useState(false);
  const initialFocusHandled = useRef(false);

  const focusId = searchParams.get("focus");
  const focusPlace = focusId ? places.find((p) => p.id === focusId) || null : null;

  useEffect(() => {
    if (focusPlace && !initialFocusHandled.current) {
      initialFocusHandled.current = true;
      setSelectedPlace(focusPlace);
      setDrawerOpen(true);
    }
  }, [focusPlace]);

  const filteredPlaces = filter === "all"
    ? places
    : places.filter((p) => p.category === filter);

  const showExcursion = filter === "all" || filter === "excursion";

  const handleMarkerClick = (place: Place) => {
    setSelectedPlace(place);
    setDrawerOpen(true);
  };

  const groupedPlaces = places.reduce((acc, place) => {
    const cat = place.category;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(place);
    return acc;
  }, {} as Record<string, Place[]>);

  return (
    <div className="relative" style={{ height: "calc(100vh - 64px)" }}>
      {/* Floating filters */}
      <div className="absolute top-3 left-3 right-3 z-[1000] overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all whitespace-nowrap backdrop-blur-md shadow-sm ${
                filter === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card/90 text-foreground hover:bg-card"
              }`}
            >
              {cat === "all" ? "✨ Todos" : categoryLabels[cat as PlaceCategory]}
            </button>
          ))}
        </div>
      </div>

      {/* Full-screen map */}
      <MapContainer
        center={[43.3713, -8.3962]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapController focusPlace={focusPlace} filter={filter} />

        {(filter !== "excursion") && filteredPlaces.map((place) => (
          <Marker
            key={place.id}
            position={[place.lat, place.lng]}
            icon={createIcon(place.category)}
            eventHandlers={{
              click: () => handleMarkerClick(place),
            }}
          />
        ))}
        {filter === "excursion" && filteredPlaces.filter((p) => p.category === "excursion").map((place) => (
          <Marker
            key={place.id}
            position={[place.lat, place.lng]}
            icon={createIcon(place.category)}
            eventHandlers={{
              click: () => handleMarkerClick(place),
            }}
          />
        ))}
        {showExcursion && excursionStops.map((stop) => (
          <Marker
            key={stop.id}
            position={[stop.lat, stop.lng]}
            icon={createIcon("excursion")}
          />
        ))}
      </MapContainer>

      {/* FAB: List button */}
      <button
        onClick={() => setListOpen(true)}
        className="absolute bottom-6 right-4 z-[1000] bg-primary text-primary-foreground rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
      >
        <List className="h-5 w-5" />
      </button>

      {/* Place detail drawer */}
      <PlaceDetailDrawer
        place={selectedPlace}
        open={drawerOpen}
        onClose={() => {
          setDrawerOpen(false);
          setSelectedPlace(null);
        }}
      />

      {/* Places list drawer */}
      <Drawer open={listOpen} onOpenChange={setListOpen}>
        <DrawerContent className="max-h-[75vh]">
          <DrawerHeader>
            <DrawerTitle className="font-serif">Todos los lugares</DrawerTitle>
          </DrawerHeader>
          <div className="overflow-y-auto px-4 pb-6">
            {Object.entries(groupedPlaces).map(([cat, catPlaces]) => (
              <div key={cat} className="mb-4">
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">
                  {categoryLabels[cat as PlaceCategory]}
                </h3>
                <div className="space-y-1">
                  {catPlaces.map((place) => (
                    <button
                      key={place.id}
                      onClick={() => {
                        setListOpen(false);
                        setSelectedPlace(place);
                        setDrawerOpen(true);
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-secondary transition-colors flex items-center gap-3"
                    >
                      <span className="text-lg">{categoryIcons[place.category]}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{place.name}</p>
                        {place.duration && (
                          <p className="text-xs text-muted-foreground">⏱ {place.duration}</p>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default function MapClient() {
  return (
    <Suspense>
      <MapClientInner />
    </Suspense>
  );
}
