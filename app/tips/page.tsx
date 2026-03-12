"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { tips, checklistItems, tipCategoryLabels } from "@/data/tips";

export default function TipsPage() {
  const [checklist, setChecklist] = useState(() => {
    if (typeof window === "undefined") return checklistItems;
    const saved = localStorage.getItem("coruna-checklist");
    return saved ? JSON.parse(saved) : checklistItems;
  });

  const [activeCategory, setActiveCategory] = useState<string>("all");

  useEffect(() => {
    localStorage.setItem("coruna-checklist", JSON.stringify(checklist));
  }, [checklist]);

  const toggleCheck = (id: string) => {
    setChecklist((prev: typeof checklistItems) =>
      prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const categories = ["all", ...Object.keys(tipCategoryLabels)];
  const filteredTips = activeCategory === "all" ? tips : tips.filter((t) => t.category === activeCategory);

  return (
    <div className="pb-24 pt-6">
      <div className="px-6 mb-6">
        <h1 className="font-serif text-3xl font-bold text-foreground mb-1">Tips & Extras</h1>
        <p className="text-muted-foreground">Consejos de gallego local para tu viaje</p>
      </div>

      {/* Category filters */}
      <div className="px-6 mb-6 overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          <button
            onClick={() => setActiveCategory("all")}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
              activeCategory === "all"
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            ✨ Todos
          </button>
          {Object.entries(tipCategoryLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all whitespace-nowrap ${
                activeCategory === key
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Tips grid */}
      <div className="px-6 grid gap-4 sm:grid-cols-2 mb-10">
        {filteredTips.map((tip, i) => (
          <motion.div
            key={tip.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04, duration: 0.3 }}
          >
            <Card className="border-border/50 shadow-sm h-full">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl mt-0.5">{tip.icon}</span>
                  <div>
                    <h3 className="font-serif font-bold text-foreground text-sm mb-1">{tip.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{tip.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Checklist */}
      <div className="px-6">
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
