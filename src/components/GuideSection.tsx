"use client";

import { motion } from "framer-motion";
import GuideCard from "@/components/GuideCard";
import type { GuideSection as GuideSectionType } from "@/data/guide";

export default function GuideSection({ section }: { section: GuideSectionType }) {
  return (
    <section id={section.id} className="scroll-mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        {/* Section Header */}
        <div className="mb-4">
          <h2 className="font-serif text-2xl font-bold text-foreground">
            <span className="mr-2">{section.emoji}</span>
            {section.title}
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            {section.subtitle}
          </p>
        </div>

        {/* Editorial description */}
        {section.description && (
          <p className="text-sm text-muted-foreground italic leading-relaxed mb-4">
            {section.description}
          </p>
        )}

        {/* Cards */}
        {section.cards.length > 0 && (
          <>
            {section.layout === "horizontal-scroll" && (
              <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory pb-2 -mx-1 px-1 sm:grid sm:grid-cols-2 sm:overflow-visible sm:snap-none lg:grid-cols-3">
                {section.cards.map((card, i) => (
                  <motion.div
                    key={card.id}
                    className="min-w-[280px] snap-center sm:min-w-0"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                  >
                    <GuideCard card={card} />
                  </motion.div>
                ))}
              </div>
            )}

            {section.layout === "stacked" && (
              <div className="grid gap-4 sm:grid-cols-2">
                {section.cards.map((card, i) => (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                  >
                    <GuideCard card={card} />
                  </motion.div>
                ))}
              </div>
            )}

            {section.layout === "text-only" && (
              <div className="grid gap-4">
                {section.cards.map((card) => (
                  <GuideCard key={card.id} card={card} />
                ))}
              </div>
            )}
          </>
        )}

        {/* Contextual Tips */}
        {section.tips && section.tips.length > 0 && (
          <div className="mt-4 space-y-2">
            {section.tips.map((tip) => (
              <div
                key={tip.id}
                className="bg-sand/60 border border-sand-dark/20 rounded-lg p-3 text-sm italic text-muted-foreground leading-relaxed"
              >
                <span className="mr-1.5 not-italic">💡</span>
                {tip.text}
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}
