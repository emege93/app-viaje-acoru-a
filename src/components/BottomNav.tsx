"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Map, Calendar, BookOpen } from "lucide-react";

const tabs = [
  { path: "/", icon: Home, label: "Hoy" },
  { path: "/tips", icon: BookOpen, label: "Guía" },
  { path: "/mapa", icon: Map, label: "Mapa" },
  { path: "/itinerario", icon: Calendar, label: "Plan" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur-md safe-area-bottom">
      <div className="flex items-center justify-around px-4 py-2">
        {tabs.map((tab) => {
          const isActive = tab.path === "/"
            ? pathname === "/"
            : pathname.startsWith(tab.path);
          return (
            <Link
              key={tab.path}
              href={tab.path}
              className={`flex flex-col items-center gap-0.5 px-4 py-1 text-xs transition-all ${
                isActive
                  ? "text-ocean"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <div className={`flex items-center justify-center rounded-full px-4 py-1 transition-all ${
                isActive ? "bg-ocean/10" : ""
              }`}>
                <tab.icon className={`h-5 w-5 ${isActive ? "stroke-[2.5]" : ""}`} />
              </div>
              <span className={`text-[10px] ${isActive ? "font-bold" : "font-medium"}`}>
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
