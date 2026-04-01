"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Checkbox } from "@/components/ui/checkbox";
import { itinerary } from "@/data/itinerary";
import { tips, checklistItems } from "@/data/tips";

function getCurrentActivity() {
  const now = new Date();
  const tripDates = [
    { date: new Date(2026, 3, 17), dayIndex: 0 },
    { date: new Date(2026, 3, 18), dayIndex: 1 },
    { date: new Date(2026, 3, 19), dayIndex: 2 },
    { date: new Date(2026, 3, 20), dayIndex: 3 },
  ];

  const today = tripDates.find(
    (d) => d.date.toDateString() === now.toDateString()
  );

  if (!today) return null;

  const day = itinerary[today.dayIndex];
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentTime = currentHour * 60 + currentMinute;

  let closestIdx = 0;
  for (let i = 0; i < day.activities.length; i++) {
    const [h, m] = day.activities[i].time.split(":").map(Number);
    const actTime = h * 60 + m;
    if (actTime <= currentTime) {
      closestIdx = i;
    }
  }

  const closest = day.activities[closestIdx];
  const nextActivity = closestIdx < day.activities.length - 1 ? day.activities[closestIdx + 1] : null;

  return { activity: closest, nextActivity, dayIndex: today.dayIndex, day };
}

export default function HomePage() {
  const [checklist, setChecklist] = useState<Record<string, boolean>>(() => {
    if (typeof window === "undefined") return {};
    const saved = localStorage.getItem("checklist");
    return saved ? JSON.parse(saved) : {};
  });
  const [checklistOpen, setChecklistOpen] = useState(false);

  const currentInfo = getCurrentActivity();
  const [randomTip, setRandomTip] = useState(tips[0]);

  useEffect(() => {
    setRandomTip(tips[Math.floor(Math.random() * tips.length)]);
  }, []);

  useEffect(() => {
    localStorage.setItem("checklist", JSON.stringify(checklist));
  }, [checklist]);

  const toggleCheck = (id: string) => {
    setChecklist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const checkedCount = Object.values(checklist).filter(Boolean).length;

  return (
    <div className="pb-24">
      {/* Compact hero */}
      <section className="relative h-[30vh] min-h-[200px] flex items-end overflow-hidden bg-primary">
        <Image
          src="https://images.unsplash.com/photo-1698611229501-65577b4d1084?w=1200&h=800&fit=crop"
          alt="A Coruña"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-full px-6 pb-6"
        >
          <p className="text-primary-foreground/70 text-xs font-semibold tracking-widest uppercase mb-1">
            🌊 Tu escapada
          </p>
          <h1 className="font-serif text-3xl font-bold text-primary-foreground leading-tight">
            A Coruña
          </h1>
          <p className="text-primary-foreground/80 text-sm">
            17 - 20 Abril · 4 días
          </p>
        </motion.div>
      </section>

      {/* "Right now" card */}
      <section className="px-6 -mt-4 relative z-20">
        <Card className="border-border/50 shadow-lg border-l-4 border-l-wave">
          <CardContent className="p-4">
            {currentInfo ? (
              <>
                <p className="text-xs font-semibold text-ocean-light mb-1">📍 Ahora mismo</p>
                <h3 className="font-serif font-bold text-foreground">{currentInfo.activity.title}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{currentInfo.activity.time} · {currentInfo.activity.duration}</p>
                {currentInfo.activity.placeId && (
                  <Link
                    href={`/mapa?focus=${currentInfo.activity.placeId}`}
                    className="inline-flex items-center gap-1 mt-2 text-xs font-semibold text-ocean-light hover:underline"
                  >
                    <MapPin className="h-3 w-3" /> Ver en mapa
                  </Link>
                )}
                {currentInfo.nextActivity && (
                  <p className="text-xs text-muted-foreground mt-1.5 pt-1.5 border-t border-border/50">
                    Siguiente: {currentInfo.nextActivity.time} — {currentInfo.nextActivity.title}
                  </p>
                )}
              </>
            ) : (
              <>
                <p className="text-xs font-semibold text-ocean-light mb-1">✈️ Tu viaje</p>
                <h3 className="font-serif font-bold text-foreground">
                  {itinerary[0].day} {itinerary[0].date}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">{itinerary[0].label}</p>
                <Link
                  href="/itinerario"
                  className="inline-flex items-center gap-1 mt-2 text-xs font-semibold text-ocean-light hover:underline"
                >
                  Ver itinerario completo <ArrowRight className="h-3 w-3" />
                </Link>
              </>
            )}
          </CardContent>
        </Card>
      </section>

      {/* Day strip */}
      <section className="px-6 mt-6">
        <h2 className="font-serif text-lg font-bold text-foreground mb-3">Tus 4 días</h2>
        <div className="grid grid-cols-2 gap-2">
          {itinerary.map((day, i) => {
            const dayAccents = ["border-l-ocean", "border-l-sunset", "border-l-wave", "border-l-moss"];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link href={`/itinerario?day=${i}`}>
                  <Card className={`border-border/50 hover:shadow-md transition-all hover:border-ocean-light/30 border-l-4 ${dayAccents[i]}`}>
                    <CardContent className="p-3">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl mt-0.5">{day.emoji}</span>
                        <div className="flex-1 min-w-0">
                          <p className="font-serif font-bold text-sm text-foreground">{day.day}</p>
                          <p className="text-[11px] text-muted-foreground leading-tight mt-0.5">{day.label}</p>
                        </div>
                        <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/50 shrink-0 mt-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Gastro link */}
      <section className="px-6 mt-6">
        <Link href="/gastronomia">
          <Card className="border-border/50 shadow-md hover:shadow-lg transition-all border-l-4 border-l-sunset bg-gradient-to-r from-card to-sunset/5">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🦞</span>
                <div>
                  <p className="font-serif font-bold text-sm text-foreground">Guía Gastronómica</p>
                  <p className="text-xs text-muted-foreground">Mariscos, tapas, vinos y secretos de mesa</p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-sunset shrink-0" />
            </CardContent>
          </Card>
        </Link>
      </section>

      {/* Budget link */}
      <section className="px-6 mt-4">
        <Link href="/presupuesto">
          <Card className="border-border/50 shadow-md hover:shadow-lg transition-all border-l-4 border-l-moss bg-gradient-to-r from-card to-moss/5">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">💰</span>
                <div>
                  <p className="font-serif font-bold text-sm text-foreground">Presupuesto</p>
                  <p className="text-xs text-muted-foreground">Estimación de gastos por persona</p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-moss shrink-0" />
            </CardContent>
          </Card>
        </Link>
      </section>

      {/* Checklist */}
      <section className="px-6 mt-6">
        <Collapsible open={checklistOpen} onOpenChange={setChecklistOpen}>
          <CollapsibleTrigger className="w-full">
            <Card className="border-border/50">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg">✅</span>
                  <div className="text-left">
                    <p className="font-serif font-bold text-sm text-foreground">Checklist de viaje</p>
                    <p className="text-xs text-muted-foreground">{checkedCount}/{checklistItems.length} completados</p>
                  </div>
                </div>
                <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${checklistOpen ? "rotate-180" : ""}`} />
              </CardContent>
            </Card>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <Card className="border-border/50 border-t-0 rounded-t-none">
              <CardContent className="p-4 pt-0">
                <div className="space-y-2">
                  {checklistItems.map((item) => (
                    <label
                      key={item.id}
                      className="flex items-center gap-3 cursor-pointer py-1"
                    >
                      <Checkbox
                        checked={!!checklist[item.id]}
                        onCheckedChange={() => toggleCheck(item.id)}
                      />
                      <span className={`text-sm ${checklist[item.id] ? "line-through text-muted-foreground" : "text-foreground"}`}>
                        {item.text}
                      </span>
                    </label>
                  ))}
                </div>
              </CardContent>
            </Card>
          </CollapsibleContent>
        </Collapsible>
      </section>

      {/* Random tip */}
      <section className="px-6 mt-6">
        <Card className="bg-gradient-to-br from-ocean to-ocean-light text-primary-foreground border-0 shadow-lg">
          <CardContent className="p-5">
            <p className="text-xs font-semibold opacity-70 mb-2 tracking-wide uppercase">{randomTip.icon} Consejo local</p>
            <p className="font-serif font-bold text-base mb-1.5">{randomTip.title}</p>
            <p className="text-sm opacity-85 leading-relaxed">{randomTip.description}</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
