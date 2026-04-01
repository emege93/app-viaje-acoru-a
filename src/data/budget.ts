export interface BudgetItem {
  name: string;
  emoji: string;
  min: number;
  max: number;
  note?: string;
}

export interface BudgetCategory {
  id: string;
  title: string;
  emoji: string;
  color: "sunset" | "wave" | "moss" | "ocean";
  items: BudgetItem[];
}

export interface DayBudget {
  day: string;
  date: string;
  emoji: string;
  categories: BudgetCategory[];
}

export const dayBudgets: DayBudget[] = [
  {
    day: "Viernes",
    date: "17 Abril",
    emoji: "✈️",
    categories: [
      {
        id: "v-food",
        title: "Comida y bebida",
        emoji: "🍽",
        color: "sunset",
        items: [
          { name: "Desayuno — Siboney", emoji: "☕", min: 5, max: 7 },
          { name: "Comida — A Taberna de Cunqueiro", emoji: "🍽", min: 29, max: 29, note: "Pulpo, zamburiñas, empanada, Ribeiro" },
          { name: "Cerveza con vistas en la Torre", emoji: "🍺", min: 3, max: 5 },
          { name: "Ruta tapeo Rúa Estrella (3-4 bares)", emoji: "🍷", min: 20, max: 25, note: "Vino + tapa x4 bares" },
          { name: "Copas Olmos/Barrera (2-3 copas)", emoji: "🥃", min: 15, max: 20 },
        ],
      },
      {
        id: "v-transport",
        title: "Transporte",
        emoji: "🚕",
        color: "wave",
        items: [
          { name: "Taxi aeropuerto → centro", emoji: "✈️", min: 7, max: 8, note: "~22€ entre 3" },
          { name: "Taxi Torre → centro", emoji: "🚕", min: 2, max: 3, note: "~6€ entre 3" },
        ],
      },
      {
        id: "v-activities",
        title: "Entradas y actividades",
        emoji: "🎟",
        color: "moss",
        items: [
          { name: "Castillo de San Antón", emoji: "🏰", min: 2, max: 2 },
          { name: "Torre de Hércules", emoji: "🗿", min: 3, max: 3 },
          { name: "Free tour casco histórico (propina)", emoji: "🏛", min: 3, max: 5 },
        ],
      },
    ],
  },
  {
    day: "Sábado",
    date: "18 Abril",
    emoji: "🎶",
    categories: [
      {
        id: "s-food",
        title: "Comida y bebida",
        emoji: "🍽",
        color: "sunset",
        items: [
          { name: "Desayuno — Siboney", emoji: "☕", min: 5, max: 7 },
          { name: "Comida — O Fado (arroces)", emoji: "🍽", min: 20, max: 25, note: "Arroz caldoso/marinero, casero" },
          { name: "Vermut + pintxos centro", emoji: "🍷", min: 8, max: 12 },
          { name: "Cena ligera pre-concierto", emoji: "🍽", min: 10, max: 15, note: "La Bombilla, 1-2 tapas + vino" },
          { name: "Post-concierto copas", emoji: "🥃", min: 10, max: 20, note: "Si hay energía" },
        ],
      },
      {
        id: "s-transport",
        title: "Transporte",
        emoji: "🚕",
        color: "wave",
        items: [
          { name: "Taxi al Coliseum", emoji: "🚕", min: 2, max: 3, note: "~7€ entre 3" },
          { name: "Taxi vuelta del Coliseum", emoji: "🚕", min: 2, max: 3 },
        ],
      },
      {
        id: "s-activities",
        title: "Entradas y actividades",
        emoji: "🎟",
        color: "moss",
        items: [
          { name: "Domus — Casa del Hombre", emoji: "🏛", min: 3, max: 3 },
          { name: "Monte San Pedro — ascensor", emoji: "🌅", min: 3, max: 3 },
          { name: "Concierto Coliseum", emoji: "🎶", min: 0, max: 0, note: "Precio según entrada" },
        ],
      },
    ],
  },
  {
    day: "Domingo",
    date: "19 Abril",
    emoji: "🌊",
    categories: [
      {
        id: "d-food",
        title: "Comida y bebida",
        emoji: "🍽",
        color: "sunset",
        items: [
          { name: "Desayuno — Waco Coffee", emoji: "☕", min: 10, max: 14, note: "Huevos benedictine + café + zumo" },
          { name: "Mariscada — La Penela", emoji: "🦀", min: 50, max: 70, note: "Centollos, nécoras, zamburiñas. Sin percebes: ~35-45€" },
          { name: "Ruta tapeo despedida (3 bares)", emoji: "🍷", min: 25, max: 35, note: "Taberna da Galera + Pulpeira + Filandón" },
          { name: "Última noche copas", emoji: "🥃", min: 10, max: 20 },
        ],
      },
      {
        id: "d-transport",
        title: "Transporte",
        emoji: "🚕",
        color: "wave",
        items: [
          { name: "Taxi Torre → centro", emoji: "🚕", min: 2, max: 3, note: "~6€ entre 3" },
          { name: "Taxi centro → MEGA", emoji: "🚕", min: 3, max: 4, note: "~9€ entre 3" },
          { name: "Taxi MEGA → centro", emoji: "🚕", min: 3, max: 4, note: "~9€ entre 3" },
        ],
      },
      {
        id: "d-activities",
        title: "Entradas y actividades",
        emoji: "🎟",
        color: "moss",
        items: [
          { name: "Fundación MOP (gratis)", emoji: "🎨", min: 0, max: 0 },
          { name: "MEGA Estrella Galicia", emoji: "🍺", min: 17, max: 37, note: "Libre 17€ / Guiada tiraje 27€ / Maridaje 37€" },
          { name: "Free tour misterios (propina)", emoji: "🌙", min: 3, max: 5 },
        ],
      },
    ],
  },
  {
    day: "Lunes",
    date: "20 Abril",
    emoji: "⛪",
    categories: [
      {
        id: "l-food",
        title: "Comida y bebida",
        emoji: "🍽",
        color: "sunset",
        items: [
          { name: "Comida — Mercado de Abastos Santiago", emoji: "🍽", min: 25, max: 35, note: "Marisco que te cocinan allí" },
          { name: "Café Venecia (café + tapa gratis)", emoji: "☕", min: 3, max: 5 },
        ],
      },
      {
        id: "l-transport",
        title: "Transporte",
        emoji: "🚕",
        color: "wave",
        items: [
          { name: "Tren A Coruña → Santiago (ida)", emoji: "🚂", min: 5, max: 7 },
          { name: "Tren Santiago → A Coruña (vuelta)", emoji: "🚂", min: 5, max: 7 },
          { name: "Taxi al aeropuerto", emoji: "✈️", min: 7, max: 8, note: "~22€ entre 3" },
        ],
      },
      {
        id: "l-activities",
        title: "Entradas y actividades",
        emoji: "🎟",
        color: "moss",
        items: [
          { name: "Cubiertas Catedral Santiago", emoji: "⛪", min: 20, max: 20, note: "Reservar online, aforo limitado" },
        ],
      },
    ],
  },
];

export const savingTips = [
  { emoji: "🦐", text: "Mariscada sin percebes: pedir centollos, zamburiñas y nécoras baja de ~60€ a ~35-45€/pp." },
  { emoji: "🍷", text: "El Ribeiro de la casa en bares de barrio es excelente y barato (~2-3€). No hace falta carta de vinos." },
  { emoji: "🚕", text: "Taxis entre 3 personas: siempre dividir. Un taxi de 9€ son 3€/persona." },
  { emoji: "🍺", text: "Moderar copas a 2 por noche ahorra ~5-7€/pp por noche." },
  { emoji: "🥫", text: "Souvenir gastronómico: conservas gallegas en supermercado Gadis (5-8€) en vez de tiendas turísticas." },
];
