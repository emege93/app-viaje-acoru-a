export interface Tip {
  id: string;
  category: "sunset" | "breakfast" | "rain" | "local" | "food";
  title: string;
  description: string;
  icon: string;
}

export const tips: Tip[] = [
  {
    id: "t1",
    category: "sunset",
    title: "Monte San Pedro al atardecer",
    description: "El mejor atardecer de la ciudad. Vistas 360° con el sol cayendo sobre el Atlántico. Lleva algo de abrigo y algo para brindar.",
    icon: "🌅",
  },
  {
    id: "t2",
    category: "sunset",
    title: "Paseo Marítimo al anochecer",
    description: "Caminar por el paseo con las luces de la ciudad encendiéndose es mágico. El tramo entre San Amaro y la Torre es el más bonito.",
    icon: "🌇",
  },
  {
    id: "t3",
    category: "breakfast",
    title: "Café Venecia",
    description: "Café clásico coruñés con barra de toda la vida. Café con leche perfecto, tostadas y empanadas de la vitrina.",
    icon: "☕",
  },
  {
    id: "t4",
    category: "breakfast",
    title: "La Tita",
    description: "Brunch moderno pero con alma gallega. Tortitas, huevos benedictinos y zumos naturales. Muy instagrameable.",
    icon: "🥞",
  },
  {
    id: "t5",
    category: "rain",
    title: "Aquarium Finisterrae",
    description: "Plan perfecto para un día lluvioso. Focas, tiburones y fauna atlántica. Junto a la Torre de Hércules.",
    icon: "🐠",
  },
  {
    id: "t6",
    category: "rain",
    title: "Museo de Bellas Artes",
    description: "Colección de arte gallego y español. Edificio bonito y entrada a menudo gratuita. Combina con la Ciudad Vieja.",
    icon: "🎨",
  },
  {
    id: "t7",
    category: "rain",
    title: "Sidrería + Empanada",
    description: "Cuando llueve en Galicia, se come. Busca una sidrería y pide sidra natural con empanada gallega. Plan perfecto.",
    icon: "🍎",
  },
  {
    id: "t8",
    category: "local",
    title: "Nunca rechaces un chupito de orujo",
    description: "Si un gallego te ofrece un orujo (o una queimada), acéptalo. Es señal de bienvenida y amistad.",
    icon: "🥃",
  },
  {
    id: "t9",
    category: "local",
    title: "El tiempo cambia cada hora",
    description: "En Galicia puedes tener las 4 estaciones en un día. Lleva siempre un chubasquero ligero, aunque brille el sol.",
    icon: "🌦",
  },
  {
    id: "t10",
    category: "local",
    title: "Come donde comen los locales",
    description: "Si un restaurante está vacío a las 14:00, desconfía. Los gallegos comen tarde (14:30-15:30) y cenan sobre las 21:00.",
    icon: "🕐",
  },
  {
    id: "t15",
    category: "local",
    title: "Ruta costera: Riazor → Torre → Puerto",
    description: "Pasea por la costa desde el Estadio de Riazor hasta la Torre de Hércules y baja después hacia el puerto. Zona muy verde y bonita, imprescindible.",
    icon: "🚶",
  },
  {
    id: "t16",
    category: "local",
    title: "Cervecería Estrella Galicia",
    description: "Visita la fábrica y toma una cerveza recién hecha. Una experiencia única que merece mucho la pena. Reserva con antelación.",
    icon: "🍺",
  },
  {
    id: "t17",
    category: "local",
    title: "Recorre el centro a pie",
    description: "A Coruña es una ciudad fácil de recorrer a pie, con mucha gente joven y ambiente. Piérdete por el centro sin prisa.",
    icon: "🏙",
  },
  {
    id: "t11",
    category: "food",
    title: "Pulpo á feira",
    description: "El plato gallego por excelencia. Pulpo cocido con aceite de oliva, pimentón y sal gorda. Siempre en plato de madera.",
    icon: "🐙",
  },
  {
    id: "t12",
    category: "food",
    title: "Percebes",
    description: "El manjar más peligroso del mar. Los percebeiros arriesgan su vida en los acantilados. Caros pero únicos en el mundo.",
    icon: "🦪",
  },
  {
    id: "t13",
    category: "food",
    title: "Empanada gallega",
    description: "Puede ser de atún, berberechos, zamburiñas o bacalao. Masa fina y crujiente. La de berberechos es la más tradicional.",
    icon: "🥧",
  },
  {
    id: "t14",
    category: "food",
    title: "Tortilla de Betanzos",
    description: "Muy jugosa por dentro, casi líquida. Una obra maestra culinaria. Pídela en cualquier buen bar de tapas.",
    icon: "🍳",
  },
];

export const checklistItems = [
  { id: "c1", text: "Chubasquero o impermeable ligero", checked: false },
  { id: "c2", text: "Calzado cómodo para caminar", checked: false },
  { id: "c3", text: "Algo de abrigo (incluso en verano)", checked: false },
  { id: "c4", text: "Protector solar (el sol gallego quema)", checked: false },
  { id: "c5", text: "Consultar horarios tren a Santiago", checked: false },
  { id: "c6", text: "Reservar restaurante para la mariscada", checked: false },
  { id: "c7", text: "Entrada Torre de Hércules (online)", checked: false },
  { id: "c8", text: "Cámara o móvil con batería", checked: false },
  { id: "c9", text: "Bañador (playas urbanas)", checked: false },
  { id: "c10", text: "Ganas de comer bien", checked: false },
  { id: "c11", text: "Reservar visita Cervecería Estrella Galicia", checked: false },
];

export const tipCategoryLabels: Record<string, string> = {
  sunset: "🌅 Mejores atardeceres",
  breakfast: "☕ Dónde desayunar",
  rain: "🌧 Plan si llueve",
  local: "💡 Consejo de gallego",
  food: "🍽 Gastronomía imprescindible",
};
