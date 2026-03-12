import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { Badge } from "@/components/ui/badge";
import { categoryLabels, type Place } from "@/data/places";
import { itinerary } from "@/data/itinerary";

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

export default function PlaceDetailDrawer({ place, open, onClose }: PlaceDetailDrawerProps) {
  if (!place) return null;

  const itineraryInfo = findInItinerary(place.id);

  return (
    <Drawer open={open} onOpenChange={(o) => !o && onClose()}>
      <DrawerContent className="max-h-[85vh]">
        <div className="overflow-y-auto">
          <img
            src={place.image}
            alt={place.name}
            className="w-full h-44 object-cover"
          />
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
            </div>
            <DrawerTitle className="font-serif text-xl">{place.name}</DrawerTitle>
            <DrawerDescription className="text-sm mt-1">
              {place.description}
            </DrawerDescription>
          </DrawerHeader>

          <div className="px-4 pb-6 space-y-3">
            <div className="bg-sand/60 rounded-lg p-3">
              <p className="text-xs font-semibold text-foreground mb-1">💡 Consejo local</p>
              <p className="text-xs text-muted-foreground">{place.tip}</p>
            </div>

            {itineraryInfo && (
              <div className="bg-ocean/10 rounded-lg p-3">
                <p className="text-xs font-semibold text-foreground mb-1">📅 En tu itinerario</p>
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
