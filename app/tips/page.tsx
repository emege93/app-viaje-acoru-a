"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { checklistItems } from "@/data/tips";
import { guideSections } from "@/data/guide";
import GuideSection from "@/components/GuideSection";

export default function GuidePage() {
  const [checklist, setChecklist] = useState(() => {
    if (typeof window === "undefined") return checklistItems;
    const saved = localStorage.getItem("coruna-checklist");
    return saved ? JSON.parse(saved) : checklistItems;
  });

  const [activeSection, setActiveSection] = useState(guideSections[0].id);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem("coruna-checklist", JSON.stringify(checklist));
  }, [checklist]);

  // IntersectionObserver to track active section while scrolling
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    guideSections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(section.id);
          }
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Scroll active nav pill into view
  useEffect(() => {
    if (!navRef.current) return;
    const activeEl = navRef.current.querySelector(`[data-section="${activeSection}"]`);
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [activeSection]);

  const toggleCheck = (id: string) => {
    setChecklist((prev: typeof checklistItems) =>
      prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="pb-24">
      {/* Hero */}
      <div className="relative h-[35vh] min-h-[220px] overflow-hidden bg-primary">
        <Image
          src="https://images.unsplash.com/photo-1698611229501-65577b4d1084?w=1200&h=600&fit=crop"
          alt="A Coruña"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-3xl font-bold text-foreground mb-1">
              Guía de A Coruña
            </h1>
            <p className="text-muted-foreground text-sm">
              Una guía curada para descubrir la ciudad como un local
            </p>
          </motion.div>
        </div>
      </div>

      {/* Sticky section nav */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-md border-b border-border/50">
        <div
          ref={navRef}
          className="flex overflow-x-auto gap-1 px-4 py-2 scrollbar-none"
        >
          {guideSections.map((section) => (
            <button
              key={section.id}
              data-section={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-all whitespace-nowrap ${
                activeSection === section.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-secondary"
              }`}
            >
              {section.emoji} {section.title}
            </button>
          ))}
        </div>
      </div>

      {/* Gastro link */}
      <div className="px-6 pt-6">
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
      </div>

      {/* Guide sections */}
      <div className="px-6 pt-8 space-y-12">
        {guideSections.map((section) => (
          <GuideSection key={section.id} section={section} />
        ))}
      </div>

      {/* Checklist */}
      <div className="px-6 mt-12">
        <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
          ✅ Checklist de viaje
        </h2>
        <Card className="border-border/50">
          <CardContent className="p-4 space-y-3">
            {checklist.map((item: typeof checklistItems[0]) => (
              <label
                key={item.id}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <Checkbox
                  checked={item.checked}
                  onCheckedChange={() => toggleCheck(item.id)}
                />
                <span
                  className={`text-sm transition-all ${
                    item.checked
                      ? "line-through text-muted-foreground"
                      : "text-foreground group-hover:text-ocean-light"
                  }`}
                >
                  {item.text}
                </span>
              </label>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
