"use client";

import { MapPin } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { places } from "@/data/places";
import type { GuideCard as GuideCardType } from "@/data/guide";
import PlaceImage from "@/components/PlaceImage";

const tagStyles: Record<string, string> = {
  "Favorito local ✨": "bg-sunset/20 text-sunset border-sunset/30",
  "Vistas al mar": "bg-wave/20 text-wave border-wave/30",
  "Cocina gallega": "bg-moss/20 text-moss border-moss/30",
  "Marisco": "bg-moss/20 text-moss border-moss/30",
  "Tortilla": "bg-sand-dark/30 text-foreground border-sand-dark/40",
  "Arroces": "bg-sand-dark/30 text-foreground border-sand-dark/40",
  "Ideal desayuno": "bg-sunset/20 text-sunset border-sunset/30",
  "Zona de tapeo": "bg-ocean/20 text-ocean border-ocean/30",
  "Recomendado": "bg-ocean/20 text-ocean border-ocean/30",
};

export default function GuideCard({ card }: { card: GuideCardType }) {
  const place = card.placeId ? places.find((p) => p.id === card.placeId) : null;

  return (
    <Card className="overflow-hidden border-border/50 shadow-sm hover:shadow-md transition-shadow">
      {place && (
        <PlaceImage
          src={place.image}
          alt={card.title}
          category={place.category}
          className="h-36"
        />
      )}
      <CardContent className="p-4 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-serif font-bold text-base leading-tight">
            {card.icon && <span className="mr-1.5">{card.icon}</span>}
            {card.title}
          </h3>
          {card.placeId && (
            <Link
              href={`/mapa?focus=${card.placeId}`}
              className="shrink-0 text-ocean hover:text-ocean-light transition-colors"
            >
              <MapPin className="h-4 w-4" />
            </Link>
          )}
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {card.description}
        </p>
        {card.tags && card.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {card.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className={`text-[11px] font-medium px-2 py-0.5 ${tagStyles[tag] || "bg-secondary text-secondary-foreground border-border"}`}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
