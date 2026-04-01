"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { MapPin, Navigation, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { itinerary } from "@/data/itinerary";
import { places } from "@/data/places";

function getTimePeriod(time: string): "morning" | "afternoon" | "evening" {
  const hour = parseInt(time.split(":")[0], 10);
  if (hour < 12) return "morning";
  if (hour < 18) return "afternoon";
  return "evening";
}

const periodLabels = { morning: "☀️ Mañana", afternoon: "🌤 Tarde", evening: "🌙 Noche" };

function getPlaceCoords(placeId: string) {
  const place = places.find(p => p.id === placeId);
  return place ? { lat: place.lat, lng: place.lng } : null;
}

function ActivityItem({ activity, actIndex, totalActivities }: { activity: any; actIndex: number; totalActivities: number }) {
  const [expanded, setExpanded] = useState(false);
  const coords = activity.placeId ? getPlaceCoords(activity.placeId) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: actIndex * 0.05 }}
      className="flex gap-3"
    >
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div className={`rounded-full flex items-center justify-center shrink-0 ${
          activity.isHighlight
            ? "h-10 w-10 bg-sunset text-white text-base shadow-lg shadow-sunset/20 ring-2 ring-sunset/30 ring-offset-2 ring-offset-background"
            : activity.isTransport
              ? "h-8 w-8 bg-ocean-light/20 text-ocean-light text-sm"
              : "h-8 w-8 bg-primary text-primary-foreground text-sm"
        }`}>
          {activity.icon}
        </div>
        {actIndex < totalActivities - 1 && (
          <div className="w-0.5 flex-1 bg-gradient-to-b from-border to-border/30 min-h-[20px]" />
        )}
      </div>

      {/* Content */}
      <div className={`flex-1 pb-4 min-w-0 ${activity.isHighlight ? "bg-sunset/5 -mx-2 px-2 py-2 rounded-xl border border-sunset/30 ring-1 ring-sunset/10" : ""}`}>
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left"
        >
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              {activity.isHighlight && (
                <Badge className="bg-sunset/20 text-sunset border-sunset/30 text-[10px] mb-1.5">
                  Evento destacado
                </Badge>
              )}
              <div className="flex items-center gap-2 mb-0.5">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                  activity.isHighlight
                    ? "bg-sunset/20 text-sunset"
                    : activity.isTransport
                      ? "bg-ocean-light/20 text-ocean-light"
                      : "bg-ocean-light/10 text-ocean-light"
                }`}>
                  {activity.time}
                </span>
                <span className="text-xs text-muted-foreground">{activity.duration}</span>
              </div>
              <h3 className="font-serif font-bold text-sm text-foreground">{activity.title}</h3>
            </div>
            <div className="flex items-center gap-1 shrink-0 mt-1">
              <ChevronDown className={`h-4 w-4 text-muted-foreground/50 transition-transform ${expanded ? "rotate-180" : ""}`} />
            </div>
          </div>
        </button>

        {/* Expanded content */}
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-xs text-muted-foreground mt-1.5">{activity.description}</p>

            {/* Action buttons */}
            {activity.placeId && coords && (
              <div className="flex gap-2 mt-2">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${coords.lat},${coords.lng}&travelmode=walking`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-ocean text-primary-foreground px-3 py-1.5 text-xs font-semibold transition-colors active:bg-ocean-light"
                >
                  <Navigation className="h-3 w-3" />
                  Cómo llegar
                </a>
                <Link
                  href={`/mapa?focus=${activity.placeId}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-colors active:bg-secondary"
                >
                  <MapPin className="h-3 w-3" />
                  Ver en mapa
                </Link>
              </div>
            )}

            {/* Tip */}
            <div className={`mt-2 rounded-lg p-3 border ${activity.isHighlight ? "bg-sunset/10 border-sunset/20" : "bg-sand/60 border-sand-dark/20"}`}>
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">💡 </span>
                {activity.tip}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

function ItineraryContent() {
  const searchParams = useSearchParams();
  const defaultDay = searchParams.get("day") || "0";

  return (
    <div className="pb-24 pt-6">
      <div className="px-6 mb-4">
        <h1 className="font-serif text-3xl font-bold text-foreground mb-1">Tu plan</h1>
        <p className="text-muted-foreground text-sm">4 días en A Coruña · 17-20 Abril</p>
      </div>

      <div className="px-6">
        <Accordion type="single" collapsible defaultValue={`day-${defaultDay}`}>
          {itinerary.map((day, dayIndex) => (
            <AccordionItem key={dayIndex} value={`day-${dayIndex}`} className="border-b-0 mb-3">
              <AccordionTrigger className="hover:no-underline bg-card rounded-xl px-4 py-3 border border-border/50 shadow-sm [&[data-state=open]]:rounded-b-none [&[data-state=open]]:shadow-md [&[data-state=open]]:border-ocean/20">
                <div className="flex items-center gap-3 text-left">
                  <span className="text-2xl">{day.emoji}</span>
                  <div>
                    <p className="font-serif font-bold text-foreground text-base">
                      {day.day} {day.date}
                    </p>
                    <p className="text-xs text-muted-foreground font-normal">{day.label}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-card rounded-b-xl px-4 pt-2 pb-4 border border-t-0 border-border/50 shadow-sm">
                <p className="text-xs text-muted-foreground italic mb-4">{day.theme}</p>
                <div className="space-y-0">
                  {day.activities.map((activity, actIndex) => {
                    const prevPeriod = actIndex > 0 ? getTimePeriod(day.activities[actIndex - 1].time) : null;
                    const currentPeriod = getTimePeriod(activity.time);
                    const showDivider = actIndex > 0 && prevPeriod !== currentPeriod;

                    return (
                      <div key={activity.id}>
                        {showDivider && (
                          <div className="flex items-center gap-2 py-2 ml-11">
                            <div className="h-px flex-1 bg-border" />
                            <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                              {periodLabels[currentPeriod]}
                            </span>
                            <div className="h-px flex-1 bg-border" />
                          </div>
                        )}
                        <ActivityItem
                          activity={activity}
                          actIndex={actIndex}
                          totalActivities={day.activities.length}
                        />
                      </div>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default function ItineraryPage() {
  return (
    <Suspense>
      <ItineraryContent />
    </Suspense>
  );
}
