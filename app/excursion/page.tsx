"use client";

import { motion } from "framer-motion";
import { Car, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { excursionInfo, excursionStops } from "@/data/excursion";

export default function ExcursionPage() {
  return (
    <div className="pb-24 pt-6">
      {/* Hero */}
      <div className="relative h-56 overflow-hidden mx-6 rounded-2xl mb-6">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop"
          alt="Costa da Morte"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6">
          <p className="text-primary-foreground/80 text-xs font-semibold tracking-widest uppercase mb-1">
            🚗 Excursión del sábado
          </p>
          <h1 className="font-serif text-3xl font-bold text-primary-foreground">
            {excursionInfo.title}
          </h1>
          <p className="text-primary-foreground/80 text-sm">{excursionInfo.subtitle}</p>
        </div>
      </div>

      <div className="px-6 space-y-6">
        {/* Description */}
        <p className="text-muted-foreground leading-relaxed">{excursionInfo.description}</p>

        {/* Transport Info */}
        <Card className="border-border/50">
          <CardContent className="p-5">
            <h3 className="font-serif font-bold text-foreground mb-3 flex items-center gap-2">
              <Car className="h-5 w-5 text-ocean-light" /> Transporte
            </h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>🚗 <strong>Recomendado:</strong> {excursionInfo.transport.recommended}</p>
              <p>⏱ <strong>Duración:</strong> {excursionInfo.transport.duration}</p>
              <p>🚌 <strong>Alternativa:</strong> {excursionInfo.transport.alternative}</p>
              <p>💶 <strong>Coste:</strong> {excursionInfo.transport.cost}</p>
            </div>
          </CardContent>
        </Card>

        {/* Essential Tip */}
        <Card className="bg-sand border-sand-dark/30">
          <CardContent className="p-4">
            <p className="text-sm font-semibold text-sunset mb-1">⚠️ Imprescindible</p>
            <p className="text-sm text-foreground">{excursionInfo.essentialTip}</p>
          </CardContent>
        </Card>

        {/* Stops Timeline */}
        <h2 className="font-serif text-2xl font-bold text-foreground">Ruta del día</h2>

        <div>
          {excursionStops.map((stop, i) => (
            <motion.div
              key={stop.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.3 }}
              className="flex gap-4 mb-4"
            >
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg">
                  {stop.icon}
                </div>
                {i < excursionStops.length - 1 && (
                  <div className="w-0.5 flex-1 bg-border mt-2" />
                )}
              </div>
              <Card className="flex-1 border-border/50 shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-ocean-light bg-secondary px-2 py-0.5 rounded-full">
                      {stop.time}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {stop.duration}
                    </span>
                  </div>
                  <h4 className="font-serif text-base font-bold text-foreground mb-1">
                    {stop.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">{stop.description}</p>
                  <div className="rounded-lg bg-secondary/60 p-3 mb-2">
                    <p className="text-xs font-semibold text-accent mb-0.5">✨ Highlight</p>
                    <p className="text-xs text-muted-foreground">{stop.highlight}</p>
                  </div>
                  <div className="rounded-lg bg-sand/60 p-3">
                    <p className="text-xs font-semibold text-sunset mb-0.5">💡 Tip</p>
                    <p className="text-xs text-muted-foreground">{stop.tip}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
