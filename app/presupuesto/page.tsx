"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { dayBudgets, savingTips, type BudgetCategory } from "@/data/budget";

const categoryColors = {
  sunset: { bg: "bg-sunset/10", border: "border-l-sunset", badge: "bg-sunset/20 text-sunset" },
  wave: { bg: "bg-wave/10", border: "border-l-wave", badge: "bg-wave/20 text-wave" },
  moss: { bg: "bg-moss/10", border: "border-l-moss", badge: "bg-moss/20 text-moss" },
  ocean: { bg: "bg-ocean/10", border: "border-l-ocean", badge: "bg-ocean/20 text-ocean" },
};

function getCategoryTotal(cat: BudgetCategory) {
  const min = cat.items.reduce((sum, i) => sum + i.min, 0);
  const max = cat.items.reduce((sum, i) => sum + i.max, 0);
  return { min, max };
}

function getDayTotal(dayIndex: number) {
  const day = dayBudgets[dayIndex];
  let min = 0, max = 0;
  for (const cat of day.categories) {
    const t = getCategoryTotal(cat);
    min += t.min;
    max += t.max;
  }
  return { min, max };
}

function getTripTotal() {
  let min = 0, max = 0;
  for (let i = 0; i < dayBudgets.length; i++) {
    const t = getDayTotal(i);
    min += t.min;
    max += t.max;
  }
  return { min, max };
}

function CategoryBlock({ category }: { category: BudgetCategory }) {
  const [expanded, setExpanded] = useState(false);
  const colors = categoryColors[category.color];
  const total = getCategoryTotal(category);

  return (
    <Card className={`border-border/50 shadow-sm border-l-4 ${colors.border}`}>
      <button onClick={() => setExpanded(!expanded)} className="w-full text-left">
        <CardContent className="p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-base">{category.emoji}</span>
              <span className="text-xs font-semibold text-foreground">{category.title}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${colors.badge}`}>
                {total.min === total.max ? `${total.min}€` : `${total.min}-${total.max}€`}
              </span>
              <ChevronDown className={`h-3.5 w-3.5 text-muted-foreground/50 transition-transform ${expanded ? "rotate-180" : ""}`} />
            </div>
          </div>

          {expanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="mt-3 space-y-1.5"
            >
              {category.items.map((item, i) => (
                <div key={i} className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-foreground">
                      <span className="mr-1.5">{item.emoji}</span>
                      {item.name}
                    </p>
                    {item.note && (
                      <p className="text-[10px] text-muted-foreground ml-6">{item.note}</p>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground shrink-0">
                    {item.min === 0 && item.max === 0 ? "—" : item.min === item.max ? `${item.min}€` : `${item.min}-${item.max}€`}
                  </span>
                </div>
              ))}
            </motion.div>
          )}
        </CardContent>
      </button>
    </Card>
  );
}

export default function BudgetPage() {
  const tripTotal = getTripTotal();

  const dayAccents = ["border-l-ocean", "border-l-sunset", "border-l-wave", "border-l-moss"];

  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-moss to-moss-light px-6 pt-10 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary-foreground/70 text-xs font-semibold tracking-widest uppercase mb-2">
            Estimación por persona
          </p>
          <h1 className="font-serif text-3xl font-bold text-primary-foreground leading-tight">
            💰 Presupuesto
          </h1>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-4xl font-bold text-primary-foreground font-serif">
              {tripTotal.min}-{tripTotal.max}€
            </span>
            <span className="text-primary-foreground/70 text-sm">/ persona</span>
          </div>
          <p className="text-primary-foreground/60 text-xs mt-1">
            4 días · Sin alojamiento ni concierto
          </p>
        </motion.div>
      </section>

      {/* Summary cards */}
      <section className="px-6 -mt-4 relative z-20">
        <div className="grid grid-cols-2 gap-2">
          {dayBudgets.map((day, i) => {
            const total = getDayTotal(i);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Card className={`border-border/50 shadow-md border-l-4 ${dayAccents[i]}`}>
                  <CardContent className="p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{day.emoji}</span>
                      <span className="font-serif font-bold text-xs text-foreground">{day.day}</span>
                    </div>
                    <p className="text-lg font-bold text-foreground font-serif">
                      {total.min}-{total.max}€
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Day breakdowns */}
      <section className="px-6 mt-6 space-y-6">
        {dayBudgets.map((day, dayIndex) => {
          const total = getDayTotal(dayIndex);
          return (
            <motion.div
              key={dayIndex}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{day.emoji}</span>
                  <h2 className="font-serif text-lg font-bold text-foreground">{day.day} {day.date}</h2>
                </div>
                <span className="text-sm font-bold text-foreground font-serif">
                  {total.min}-{total.max}€
                </span>
              </div>
              <div className="space-y-2">
                {day.categories.map((cat) => (
                  <CategoryBlock key={cat.id} category={cat} />
                ))}
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Saving tips */}
      <section className="px-6 mt-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl">💡</span>
          <h2 className="font-serif text-lg font-bold text-foreground">Cómo ahorrar</h2>
        </div>
        <Card className="bg-gradient-to-br from-ocean to-ocean-light text-primary-foreground border-0 shadow-lg">
          <CardContent className="p-5 space-y-3">
            {savingTips.map((tip, i) => (
              <p key={i} className="text-sm opacity-90 leading-relaxed">
                <span className="mr-2">{tip.emoji}</span>
                {tip.text}
              </p>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
