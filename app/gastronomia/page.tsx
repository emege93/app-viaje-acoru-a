"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, MapPin, UtensilsCrossed } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { gastroSections, conservas, postres, mesaTips, type GastroItem } from "@/data/gastro";

const sectionColors = {
  wave: {
    border: "border-l-wave",
    bg: "bg-wave/10",
    badge: "bg-wave/20 text-wave",
    header: "from-wave to-wave/80",
  },
  sunset: {
    border: "border-l-sunset",
    bg: "bg-sunset/10",
    badge: "bg-sunset/20 text-sunset",
    header: "from-sunset to-sunset/80",
  },
  moss: {
    border: "border-l-moss",
    bg: "bg-moss/10",
    badge: "bg-moss/20 text-moss",
    header: "from-moss to-moss/80",
  },
  ocean: {
    border: "border-l-ocean",
    bg: "bg-ocean/10",
    badge: "bg-ocean/20 text-ocean",
    header: "from-ocean to-ocean-light",
  },
};

function GastroItemCard({ item, color }: { item: GastroItem; color: "wave" | "sunset" | "moss" | "ocean" }) {
  const [expanded, setExpanded] = useState(false);
  const colors = sectionColors[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.3 }}
    >
      <Card className={`border-border/50 shadow-sm hover:shadow-md transition-all border-l-4 ${colors.border}`}>
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left"
        >
          <CardContent className="p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <span className="text-2xl shrink-0 mt-0.5">{item.emoji}</span>
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif font-bold text-sm text-foreground">{item.name}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.subtitle}</p>
                </div>
              </div>
              <ChevronDown className={`h-4 w-4 text-muted-foreground/50 shrink-0 mt-1 transition-transform ${expanded ? "rotate-180" : ""}`} />
            </div>

            {expanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="mt-3 space-y-2"
              >
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>

                {item.howToEat && (
                  <div className="rounded-lg bg-sand/60 border border-sand-dark/20 p-3">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">🍴 Cómo se come: </span>
                      {item.howToEat}
                    </p>
                  </div>
                )}

                {item.signal && (
                  <div className="rounded-lg bg-sand/60 border border-sand-dark/20 p-3">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">✅ Señal de calidad: </span>
                      {item.signal}
                    </p>
                  </div>
                )}

                {item.whereToEat && (
                  <div className={`rounded-lg ${colors.bg} border border-border/30 p-3`}>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">📍 Dónde: </span>
                      {item.whereToEat}
                    </p>
                  </div>
                )}

                {item.price && (
                  <Badge variant="outline" className="text-xs">
                    💰 {item.price}
                  </Badge>
                )}

                {item.tip && (
                  <p className="text-xs text-muted-foreground italic">
                    💡 {item.tip}
                  </p>
                )}
              </motion.div>
            )}
          </CardContent>
        </button>
      </Card>
    </motion.div>
  );
}

export default function GastronomiaPage() {
  const [activeTab, setActiveTab] = useState("mariscos");
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        }
      },
      { rootMargin: "-100px 0px -60% 0px" }
    );

    for (const section of gastroSections) {
      const el = sectionRefs.current[section.id];
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-ocean to-ocean-light px-6 pt-10 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary-foreground/70 text-xs font-semibold tracking-widest uppercase mb-2">
            A Coruña
          </p>
          <h1 className="font-serif text-3xl font-bold text-primary-foreground leading-tight">
            🦞 Guía Gastronómica
          </h1>
          <p className="text-primary-foreground/80 text-sm mt-2 leading-relaxed">
            Todo lo que debes comer y beber. Mariscos, tapas, vinos y los secretos de la mesa gallega.
          </p>
        </motion.div>
      </section>

      {/* Sticky nav */}
      <nav className="sticky top-0 z-40 bg-card/95 backdrop-blur-md border-b border-border px-4 py-2">
        <div className="flex gap-1 overflow-x-auto no-scrollbar">
          {gastroSections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
                activeTab === section.id
                  ? `${sectionColors[section.color].badge} shadow-sm`
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {section.emoji} {section.title}
            </button>
          ))}
        </div>
      </nav>

      {/* Sections */}
      <div className="px-6 mt-6 space-y-8">
        {gastroSections.map((section) => {
          const colors = sectionColors[section.color];
          return (
            <div
              key={section.id}
              id={section.id}
              ref={(el) => { sectionRefs.current[section.id] = el; }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{section.emoji}</span>
                  <h2 className="font-serif text-xl font-bold text-foreground">{section.title}</h2>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{section.intro}</p>
              </motion.div>

              <div className="space-y-3">
                {section.items.map((item) => (
                  <GastroItemCard key={item.id} item={item} color={section.color} />
                ))}
              </div>
            </div>
          );
        })}

        {/* Conservas */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{conservas.emoji}</span>
            <h2 className="font-serif text-xl font-bold text-foreground">{conservas.title}</h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">{conservas.intro}</p>
          <Card className="border-border/50 shadow-sm">
            <CardContent className="p-4 space-y-2">
              {conservas.items.map((item, i) => (
                <p key={i} className="text-xs text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">•</span> {item}
                </p>
              ))}
              <div className="rounded-lg bg-sand/60 border border-sand-dark/20 p-3 mt-3">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">🛒 Dónde comprar: </span>
                  {conservas.whereToBuy}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Postres */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🎂</span>
            <h2 className="font-serif text-xl font-bold text-foreground">Postres y Dulces</h2>
          </div>
          <div className="space-y-2">
            {postres.map((postre, i) => (
              <Card key={i} className="border-border/50 shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-xl shrink-0">{postre.emoji}</span>
                    <div>
                      <h4 className="font-serif font-bold text-sm text-foreground">{postre.name}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{postre.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Consejos de mesa */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">💡</span>
            <h2 className="font-serif text-xl font-bold text-foreground">Consejos de Mesa</h2>
          </div>
          <Card className="bg-gradient-to-br from-ocean to-ocean-light text-primary-foreground border-0 shadow-lg">
            <CardContent className="p-5 space-y-3">
              {mesaTips.map((tip, i) => (
                <p key={i} className="text-sm opacity-90 leading-relaxed">
                  <span className="mr-2">{tip.emoji}</span>
                  {tip.text}
                </p>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
