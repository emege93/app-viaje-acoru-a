"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { itinerary } from "@/data/itinerary";

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
              <AccordionTrigger className="hover:no-underline bg-secondary/60 rounded-xl px-4 py-3 [&[data-state=open]]:rounded-b-none">
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
              <AccordionContent className="bg-secondary/30 rounded-b-xl px-4 pt-2 pb-4">
                <p className="text-xs text-muted-foreground italic mb-4">{day.theme}</p>
                <div className="space-y-0">
                  {day.activities.map((activity, actIndex) => (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: actIndex * 0.05 }}
                      className="flex gap-3"
                    >
                      {/* Timeline */}
                      <div className="flex flex-col items-center">
                        <div className={`h-8 w-8 rounded-full flex items-center justify-center text-sm shrink-0 ${
                          activity.isTransport
                            ? "bg-ocean-light/20 text-ocean-light"
                            : "bg-primary text-primary-foreground"
                        }`}>
                          {activity.icon}
                        </div>
                        {actIndex < day.activities.length - 1 && (
                          <div className="w-px flex-1 bg-border min-h-[20px]" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 pb-4 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                                activity.isTransport
                                  ? "bg-ocean-light/20 text-ocean-light"
                                  : "bg-ocean-light/10 text-ocean-light"
                              }`}>
                                {activity.time}
                              </span>
                              <span className="text-xs text-muted-foreground">{activity.duration}</span>
                            </div>
                            <h3 className="font-serif font-bold text-sm text-foreground">{activity.title}</h3>
                            <p className="text-xs text-muted-foreground mt-0.5">{activity.description}</p>
                          </div>
                          {activity.placeId && (
                            <Link
                              href={`/mapa?focus=${activity.placeId}`}
                              className="shrink-0 p-1.5 rounded-full hover:bg-secondary transition-colors"
                            >
                              <MapPin className="h-4 w-4 text-ocean-light" />
                            </Link>
                          )}
                        </div>

                        {/* Tip */}
                        <div className="mt-2 bg-sand/60 rounded-lg p-2">
                          <p className="text-xs text-muted-foreground">
                            <span className="font-semibold text-foreground">💡 </span>
                            {activity.tip}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
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
