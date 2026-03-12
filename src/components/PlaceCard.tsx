import { Card, CardContent } from "@/components/ui/card";

interface PlaceCardProps {
  name: string;
  category: string;
  description: string;
  tip: string;
  image: string;
  icon: string;
  duration?: string;
}

export default function PlaceCard({ name, category, description, tip, image, icon, duration }: PlaceCardProps) {
  return (
    <Card className="overflow-hidden border-border/50 shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-44 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 rounded-full bg-card/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold">
          {icon} {category}
        </div>
        {duration && (
          <div className="absolute top-3 right-3 rounded-full bg-primary/90 text-primary-foreground px-3 py-1 text-xs font-semibold">
            {duration}
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-serif text-lg font-bold text-foreground mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{description}</p>
        <div className="rounded-lg bg-secondary/60 p-3">
          <p className="text-xs font-semibold text-accent mb-1">💡 Consejo local</p>
          <p className="text-xs text-muted-foreground leading-relaxed">{tip}</p>
        </div>
      </CardContent>
    </Card>
  );
}
