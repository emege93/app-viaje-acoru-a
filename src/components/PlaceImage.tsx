"use client";

import { useState } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { categoryIcons, type PlaceCategory } from "@/data/places";

const categoryGradients: Record<PlaceCategory, string> = {
  monumento: "from-ocean to-ocean-light",
  playa: "from-wave to-ocean-light",
  mirador: "from-moss to-moss-light",
  restaurante: "from-sunset to-sunset/70",
  bar: "from-ocean to-sunset/80",
  museo: "from-ocean-light to-wave",
  excursion: "from-moss to-moss-light",
  venue: "from-ocean to-ocean-light",
};

interface PlaceImageProps {
  src: string;
  alt: string;
  category: PlaceCategory;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function PlaceImage({
  src,
  alt,
  category,
  className = "h-44",
  priority = false,
  sizes = "(max-width: 640px) 100vw, 50vw",
}: PlaceImageProps) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* Skeleton loading state */}
      {status === "loading" && (
        <Skeleton className="absolute inset-0 h-full w-full rounded-none" />
      )}

      {/* Fallback on error */}
      {status === "error" && (
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br ${categoryGradients[category]}`}
        >
          <span className="text-4xl mb-1">{categoryIcons[category]}</span>
          <span className="text-xs font-medium text-white/80 px-4 text-center truncate max-w-full">
            {alt}
          </span>
        </div>
      )}

      {/* Actual image */}
      {status !== "error" && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover transition-opacity duration-300 ${
            status === "loaded" ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
        />
      )}
    </div>
  );
}
