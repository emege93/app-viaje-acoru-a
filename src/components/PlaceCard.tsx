import { Card, CardContent } from "@/components/ui/card";
import PlaceImage from "@/components/PlaceImage";
import { categoryColors, type PlaceCategory } from "@/data/places";

interface PlaceCardProps {
  name: string;
  category: string;
  rawCategory: PlaceCategory;
  description: string;
  tip: string;
  image: string;
  icon: string;
  duration?: string;
}

export default function PlaceCard({ name, category, rawCategory, description, tip, image, icon, duration }: PlaceCardProps) {
  const colors = categoryColors[rawCategory];

  return (
    <Card className={`overflow-hidden border-border/50 shadow-md hover:shadow-lg transition-shadow border-l-4 ${colors.borderL}`}>
      <div className="relative">
        <PlaceImage src={image} alt={name} category={rawCategory} />
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/25 to-transparent z-[1]" />
        <div className={`absolute top-3 left-3 rounded-full backdrop-blur-sm px-3 py-1 text-xs font-semibold z-10 ${colors.badgeBg}`}>
          {icon} {category}
        </div>
        {duration && (
          <div className="absolute top-3 right-3 rounded-full bg-card/90 backdrop-blur-sm text-foreground px-3 py-1 text-xs font-semibold z-10">
            ⏱ {duration}
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-serif text-lg font-bold text-foreground mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{description}</p>
        <div className="rounded-lg bg-sand/60 border border-sand-dark/20 p-3">
          <p className="text-xs font-semibold text-foreground mb-0.5">💡 Consejo local</p>
          <p className="text-xs text-muted-foreground leading-relaxed">{tip}</p>
        </div>
      </CardContent>
    </Card>
  );
}
