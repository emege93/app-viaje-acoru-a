"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { places, categoryLabels, categoryIcons, type PlaceCategory } from "@/data/places";
import PlaceCard from "@/components/PlaceCard";

const categories: (PlaceCategory | "all")[] = ["all", "monumento", "playa", "mirador", "restaurante", "bar", "museo"];

export default function ExplorePage() {
  const [filter, setFilter] = useState<PlaceCategory | "all">("all");

  const filtered = filter === "all" ? places : places.filter((p) => p.category === filter);

  return (
    <div className="pb-24 pt-6">
      <div className="px-6 mb-6">
        <h1 className="font-serif text-3xl font-bold text-foreground mb-1">Explorar</h1>
        <p className="text-muted-foreground">Descubre los mejores lugares de A Coruña</p>
      </div>

      {/* Filter tabs */}
      <div className="px-6 mb-6 overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          <button
            onClick={() => setFilter("all")}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
              filter === "all"
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            ✨ Todos
          </button>
          {categories.slice(1).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as PlaceCategory)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all whitespace-nowrap ${
                filter === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {categoryLabels[cat as PlaceCategory]}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="px-6 grid gap-4 sm:grid-cols-2">
        {filtered.map((place, i) => (
          <motion.div
            key={place.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
          >
            <PlaceCard
              name={place.name}
              category={categoryLabels[place.category]}
              description={place.description}
              tip={place.tip}
              image={place.image}
              icon={categoryIcons[place.category]}
              duration={place.duration}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
