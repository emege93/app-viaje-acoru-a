"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { places, categoryLabels, categoryIcons, categoryColors, type PlaceCategory, type Place } from "@/data/places";
import PlaceCard from "@/components/PlaceCard";
import PlaceDetailDrawer from "@/components/PlaceDetailDrawer";

const categories: (PlaceCategory | "all")[] = ["all", "monumento", "playa", "mirador", "restaurante", "bar", "museo", "venue"];

const filterActiveColors: Record<string, string> = {
  all: "bg-primary text-primary-foreground",
  monumento: "bg-ocean text-white",
  playa: "bg-wave text-white",
  mirador: "bg-moss text-white",
  restaurante: "bg-sunset text-white",
  bar: "bg-sunset text-white",
  museo: "bg-ocean-light text-white",
  venue: "bg-ocean text-white",
};

export default function ExplorePage() {
  const [filter, setFilter] = useState<PlaceCategory | "all">("all");
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  const filtered = filter === "all" ? places : places.filter((p) => p.category === filter);

  return (
    <div className="pb-24 pt-6">
      <div className="px-6 mb-6">
        <h1 className="font-serif text-3xl font-bold text-foreground mb-1">Explorar</h1>
        <p className="text-muted-foreground">Descubre los mejores lugares de A Coruña</p>
      </div>

      {/* Filter tabs */}
      <div className="px-6 mb-4 overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          <button
            onClick={() => setFilter("all")}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
              filter === "all"
                ? `${filterActiveColors.all} shadow-md`
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            ✨ Todos
            <span className="ml-1.5 text-[10px] opacity-70">{places.length}</span>
          </button>
          {categories.slice(1).map((cat) => {
            const count = places.filter((p) => p.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat as PlaceCategory)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all whitespace-nowrap ${
                  filter === cat
                    ? `${filterActiveColors[cat]} shadow-md`
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {categoryLabels[cat as PlaceCategory]}
                <span className="ml-1.5 text-[10px] opacity-70">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Result count */}
      <p className="px-6 mb-4 text-xs text-muted-foreground">
        Mostrando {filtered.length} {filtered.length === 1 ? "lugar" : "lugares"}
      </p>

      {/* Grid */}
      <div className="px-6 grid gap-4 sm:grid-cols-2">
        {filtered.map((place, i) => (
          <motion.div
            key={place.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
            onClick={() => setSelectedPlace(place)}
            className="cursor-pointer"
          >
            <PlaceCard
              name={place.name}
              category={categoryLabels[place.category]}
              rawCategory={place.category}
              description={place.description}
              tip={place.tip}
              image={place.image}
              icon={categoryIcons[place.category]}
              duration={place.duration}
            />
          </motion.div>
        ))}
      </div>

      {/* Detail drawer */}
      <PlaceDetailDrawer
        place={selectedPlace}
        open={!!selectedPlace}
        onClose={() => setSelectedPlace(null)}
      />
    </div>
  );
}
