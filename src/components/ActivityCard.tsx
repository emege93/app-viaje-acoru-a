import { Card, CardContent } from "@/components/ui/card";

interface ActivityCardProps {
  time: string;
  title: string;
  description: string;
  duration: string;
  why: string;
  tip: string;
  icon: string;
  isLast?: boolean;
}

export default function ActivityCard({
  time,
  title,
  description,
  duration,
  why,
  tip,
  icon,
  isLast,
}: ActivityCardProps) {
  return (
    <div className="flex gap-4">
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg">
          {icon}
        </div>
        {!isLast && <div className="w-0.5 flex-1 bg-border mt-2" />}
      </div>

      {/* Content */}
      <Card className="mb-6 flex-1 border-border/50 shadow-sm">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold text-ocean-light bg-secondary px-2 py-0.5 rounded-full">
              {time}
            </span>
            <span className="text-xs text-muted-foreground">· {duration}</span>
          </div>
          <h4 className="font-serif text-base font-bold text-foreground mb-1">{title}</h4>
          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{description}</p>
          
          <div className="space-y-2">
            <div className="rounded-lg bg-secondary/60 p-3">
              <p className="text-xs font-semibold text-accent mb-0.5">✨ ¿Por qué ir?</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{why}</p>
            </div>
            <div className="rounded-lg bg-sand/60 p-3">
              <p className="text-xs font-semibold text-sunset mb-0.5">💡 Tip local</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{tip}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
