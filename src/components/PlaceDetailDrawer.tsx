import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { Badge } from "@/components/ui/badge";
import { Navigation, Copy, Check } from "lucide-react";
import { useState } from "react";
import { categoryLabels, type Place } from "@/data/places";
import { itinerary } from "@/data/itinerary";
import PlaceImage from "@/components/PlaceImage";

interface PlaceDetailDrawerProps {
  place: Place | null;
  open: boolean;
  onClose: () => void;
}

function findInItinerary(placeId: string) {
  for (const day of itinerary) {
    for (const activity of day.activities) {
      if (activity.placeId === placeId) {
        return { day: day.day, date: day.date, time: activity.time };
      }
    }
  }
  return null;
}

function getMapsUrl(place: Place) {
  return `https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}&travelmode=walking`;
}

export default function PlaceDetailDrawer({ place, open, onClose }: PlaceDetailDrawerProps) {
  const [copied, setCopied] = useState(false);

  if (!place) return null;

  const itineraryInfo = findInItinerary(place.id);

  const handleCopyAddress = async () => {
    const text = `${place.name} — A Coruña\nhttps://www.google.com/maps/search/?api=1&query=${place.lat},${place.lng}`;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Drawer open={open} onOpenChange={(o) => !o && onClose()}>
      <DrawerContent className="max-h-[85vh]">
        <div className="overflow-y-auto">
          <PlaceImage src={place.image} alt={place.name} category={place.category} />
          <DrawerHeader className="text-left">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="secondary" className="text-xs">
                {categoryLabels[place.category]}
              </Badge>
              {place.duration && (
                <Badge variant="outline" className="text-xs">
                  ⏱ {place.duration}
                </Badge>
              )}
              {place.tags?.find(t => t.includes("€")) && (
                <Badge variant="outline" className="text-xs">
                  {place.tags.find(t => t.includes("€"))}
                </Badge>
              )}
            </div>
            <DrawerTitle className="font-serif text-xl">{place.name}</DrawerTitle>
            <DrawerDescription className="text-sm mt-1">
              {place.description}
            </DrawerDescription>
          </DrawerHeader>

          {/* Action buttons */}
          <div className="px-4 pb-3 flex gap-2">
            <a
              href={getMapsUrl(place)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-ocean text-primary-foreground py-3 text-sm font-semibold transition-colors active:bg-ocean-light"
            >
              <Navigation className="h-4 w-4" />
              Cómo llegar
            </a>
            <button
              onClick={handleCopyAddress}
              className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground transition-colors active:bg-secondary"
            >
              {copied ? <Check className="h-4 w-4 text-moss" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copiado" : "Compartir"}
            </button>
          </div>

          <div className="px-4 pb-6 space-y-3">
            <div className="bg-sand/60 border border-sand-dark/20 rounded-lg p-3">
              <p className="text-xs font-semibold text-foreground mb-0.5">💡 Consejo local</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{place.tip}</p>
            </div>

            {itineraryInfo && (
              <div className="bg-ocean/10 border border-ocean/20 rounded-lg p-3">
                <p className="text-xs font-semibold text-foreground mb-0.5">📅 En tu itinerario</p>
                <p className="text-xs text-muted-foreground">
                  {itineraryInfo.day} {itineraryInfo.date} · {itineraryInfo.time}
                </p>
              </div>
            )}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
