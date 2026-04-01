export interface GastroItem {
  id: string;
  name: string;
  emoji: string;
  subtitle: string;
  description: string;
  howToEat?: string;
  whereToEat?: string;
  price?: string;
  signal?: string;
  tip?: string;
}

export interface GastroSection {
  id: string;
  title: string;
  emoji: string;
  color: "wave" | "sunset" | "moss" | "ocean";
  intro: string;
  items: GastroItem[];
}

export const gastroSections: GastroSection[] = [
  {
    id: "mariscos",
    title: "Mariscos y Pescados",
    emoji: "🦞",
    color: "wave",
    intro: "El marisco gallego es el mejor de Europa. No es marketing — es la confluencia del Atlántico Norte, las rías y una tradición extractiva de siglos. En A Coruña lo comes a metros del barco que lo trajo.",
    items: [
      {
        id: "percebes",
        name: "Percebes",
        emoji: "🦀",
        subtitle: "El producto más icónico y el más caro de la Costa da Morte",
        description: "El percebe gallego crece pegado a las rocas en zonas de oleaje brutal — a mayor riesgo para el percebeiro, mayor calidad. Los mejores vienen de Roncudo, Muxía y Camariñas.",
        howToEat: "Cocidos en agua de mar con una hoja de laurel. Se separa la uña de la pata, se pela el tubo, y se come de un bocado. El líquido interior es parte del sabor — no lo tires.",
        whereToEat: "La Penela (Pza. María Pita) es la referencia para marisco de calidad contrastada.",
        price: "40-80€/kg según temporada. En abril estás en temporada decente.",
      },
      {
        id: "pulpo",
        name: "Pulpo á Feira",
        emoji: "🐙",
        subtitle: "El plato más representativo de Galicia",
        description: "La calidad varía brutalmente según el local. La diferencia entre pulpo bueno y mediocre es congelado vs fresco, y el tiempo de cocción.",
        howToEat: "Cortado con tijeras sobre tabla de madera, regado con aceite de oliva virgen, pimentón de La Vera y sal gruesa. Siempre con pan de maíz y en plato de madera.",
        signal: "Textura firme pero no gomosa, tentáculos enteros, piel sin despellejar. Si llega deshilachado, es que está sobre-cocido o congelado de mala calidad.",
        whereToEat: "A Pulpeira de Melide (referencia absoluta) y A Taberna de Cunqueiro.",
      },
      {
        id: "zamburinas",
        name: "Zamburiñas",
        emoji: "🐚",
        subtitle: "La joya subestimada del marisco gallego",
        description: "Vieira pequeña, más sabrosa y más barata que su hermana grande. Producto muy gallego — apenas se encuentra fuera. A la plancha con ajo y aceite es donde mejor se expresa.",
        howToEat: "En su concha, de un bocado, con el jugo que suelta. Sin complicaciones.",
        price: "12-15€ la ración de 6-8 unidades. Muy razonables.",
        whereToEat: "A Taberna de Cunqueiro es especialmente buena con las zamburiñas.",
      },
      {
        id: "necora",
        name: "Nécora",
        emoji: "🦞",
        subtitle: "La reina del marisco de otoño",
        description: "Cangrejo de cuerpo plano, patas con forma de remo, sabor intenso y profundo. Se cuecen en agua de mar y se comen frías o templadas.",
        howToEat: "Se abre el caparazón, se aprovecha el coral interior (la parte cremosa oscura — es lo mejor), y se van sacando las patas. Herramienta esencial: los dedos.",
        tip: "Mejor en otoño-invierno. En abril puede haber, pero no en su mejor momento.",
      },
      {
        id: "centollo",
        name: "Centollo",
        emoji: "🦀",
        subtitle: "El marisco de celebración por excelencia",
        description: "Grande, con patas largas y cuerpo repleto de carne. Se cuece entero y se sirve frío. El interior — el coral, las huevas y el jugo — es lo más preciado. Mezclar ese interior con caldo y mojar pan es un acto casi religioso.",
        price: "30-50€ por pieza según tamaño. Para compartir entre dos.",
        whereToEat: "La Penela en la mariscada del domingo es el momento ideal.",
      },
      {
        id: "pescados",
        name: "Pescados de temporada",
        emoji: "🐟",
        subtitle: "Menos protagonismo que el marisco, pero igual de notables",
        description: "Rodaballo a la plancha (el pescado más fino de la ría), rape en salsa marinera, merluza de pincho (capturada con anzuelo, no red) al vapor o con almejas. Sardinas asadas en verano.",
        tip: "La merluza 'de pincho' indica calidad superior — capturada una a una, sin estrés ni daño en la carne.",
      },
    ],
  },
  {
    id: "tapas",
    title: "Tapas y Bocados de Bar",
    emoji: "🫑",
    color: "sunset",
    intro: "La cultura del bar en Galicia es diferente: se va de pie, se pide caña o vino, y la tapa llega sola o se elige del mostrador. No hay menú de tapas — hay barra y hay suerte.",
    items: [
      {
        id: "padron",
        name: "Pimientos de Padrón",
        emoji: "🫑",
        subtitle: "\"Uns pican e outros non\"",
        description: "Fritos en aceite de oliva muy caliente, escurridos, sal gruesa por encima. Eso es todo. La gracia: el 90% son suaves, uno de vez en cuando pica sin avisar.",
        signal: "Piel arrugada, ligeramente carbonizada en los bordes, no empapados en aceite.",
      },
      {
        id: "empanada",
        name: "Empanada Gallega",
        emoji: "🥧",
        subtitle: "El fast food gallego más noble que existe",
        description: "Masa fina, crujiente, con sabor a aceite y sofrito. El relleno define el estilo del cocinero.",
        howToEat: "Variedades imprescindibles: de berberechos (la más gallega), de bacalao con pasas (dulce y salada), de bonito (la más común), de zamburiñas (premium).",
        tip: "Mejor en panaderías y hornos locales que en bares. En los bares de barrio del casco histórico también se encuentra buena.",
      },
      {
        id: "tortilla-betanzos",
        name: "Tortilla de Betanzos",
        emoji: "🥚",
        subtitle: "La tortilla más diferente que vas a comer en tu vida",
        description: "Betanzos está a 25km de A Coruña. La clave: mucho huevo, poco aceite, patata frita (no cocida) y punto de cocción casi líquido por dentro. Se dobla, chorrea, y eso es exactamente lo que debe hacer.",
        whereToEat: "O Cabo en la ruta de tapeo del viernes. También en Siboney.",
      },
      {
        id: "berberechos",
        name: "Berberechos al Natural",
        emoji: "🐚",
        subtitle: "Pequeños, intensos, salinos",
        description: "Abiertos al vapor con un chorrito de limón. En conserva también son excepcionales — Galicia produce las mejores conservas de mariscos del mundo.",
      },
      {
        id: "lacon-grelos",
        name: "Lacón con Grelos",
        emoji: "🥓",
        subtitle: "Plato de invierno por excelencia",
        description: "Lacón (pata delantera del cerdo curada), grelos (hoja del nabo, ligeramente amargo), chorizo y patata cocida. Contundente, humano, perfecto para un día de frío.",
      },
    ],
  },
  {
    id: "quesos",
    title: "Quesos y Charcutería",
    emoji: "🧀",
    color: "moss",
    intro: "Galicia tiene quesos con denominación de origen y charcutería con personalidad propia. El queso tetilla es el más conocido, pero hay más.",
    items: [
      {
        id: "tetilla",
        name: "Queso Tetilla",
        emoji: "🧀",
        subtitle: "El queso gallego más reconocible",
        description: "Forma de pecho femenino (de ahí el nombre). Pasta blanda, ligeramente ácido, suave. Se come solo, con membrillo, o fundido sobre verduras. Queso de acompañamiento y de final de comida.",
      },
      {
        id: "san-simon",
        name: "Queso de San Simón",
        emoji: "🧀",
        subtitle: "Ahumado, con más carácter que el Tetilla",
        description: "De leche de vaca, forma de bala. El ahumado le da un punto que aguanta bien con vinos tintos. Denominación de Origen de Lugo.",
      },
      {
        id: "charcuteria",
        name: "Chorizos y Lacón Curado",
        emoji: "🥩",
        subtitle: "Charcutería gallega seria",
        description: "El chorizo gallego es más ahumado y menos especiado que el castellano. El lacón curado (diferente del cocido) es seco, intenso, para picar con vino.",
      },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    emoji: "🍷",
    color: "ocean",
    intro: "Galicia tiene vinos blancos de clase mundial, cerveza propia y rituales con orujo que cierran cada comida.",
    items: [
      {
        id: "albarino",
        name: "Albariño",
        emoji: "🍷",
        subtitle: "El vino blanco más importante de España",
        description: "DO Rías Baixas. Muy aromático (melocotón, flor blanca, cítrico), alta acidez, perfecto con marisco. La acidez limpia la grasa y realza el yodo.",
        tip: "Obligatorio con la mariscada del domingo. Productores de referencia: Martín Códax, Paco & Lola, Do Ferreiro, Pazo de Señoráns.",
      },
      {
        id: "ribeiro",
        name: "Ribeiro",
        emoji: "🍷",
        subtitle: "El vino de bar por excelencia en A Coruña",
        description: "El vino más tradicional de Galicia. Mezcla de variedades autóctonas (Treixadura, Torrontés, Godello). Más mineral y menos aromático que el Albariño. Se sirve en cunca — vasija de cerámica blanca sin asa.",
        howToEat: "Pide \"un Ribeiro\" y te traerán la cunca. Es lo que beben los locales en el tapeo.",
      },
      {
        id: "godello",
        name: "Godello",
        emoji: "🍷",
        subtitle: "La alternativa más interesante al Albariño",
        description: "DO Valdeorras / DO Monterrei. Más complejo, con notas minerales y de fruta blanca madura. Envejece bien. Para los que quieran salir del Albariño.",
      },
      {
        id: "mencia",
        name: "Mencía",
        emoji: "🍷",
        subtitle: "El tinto elegante del noroeste",
        description: "DO Ribeira Sacra, cultivado en laderas de pizarra junto al cañón del río Sil. Elegante, floral, taninos finos. El Mencía es al noroeste lo que el Pinot Noir es a Borgoña.",
        tip: "Para pulpo (sí, pulpo con tinto es perfectamente gallego), carnes y quesos.",
      },
      {
        id: "estrella",
        name: "Estrella Galicia",
        emoji: "🍺",
        subtitle: "La cerveza gallega por excelencia",
        description: "Rubia, ligeramente amarga, muy refrescante. 1906 Reserva Especial para beber sola, la normal para tapeo. En MEGA probaréis las de edición limitada directamente del barril.",
      },
      {
        id: "orujo",
        name: "Orujo de Hierbas",
        emoji: "🥃",
        subtitle: "El ritual de despedida de toda comida gallega",
        description: "Aguardiente destilado del bagazo de uva, macerado con plantas aromáticas. Color verdoso, se sirve frío al final de la comida — normalmente de regalo del restaurante.",
        howToEat: "Nunca se rechaza. Es la señal de que la comida terminó bien. Crema de orujo: versión suave y dulce para los que el puro sea demasiado.",
      },
      {
        id: "cafe",
        name: "Café gallego",
        emoji: "☕",
        subtitle: "El café gallego tiene su propia cultura",
        description: "Café solo (espresso corto y cargado), cortado (con un poco de leche), café con leche (el estándar), carajillo (café con orujo — el desayuno del marinero), queimada (aguardiente quemado con azúcar y limón — ritual nocturno).",
        tip: "Si ofrecen queimada en algún bar, aceptad. Es una experiencia.",
      },
    ],
  },
];

export const conservas = {
  title: "Conservas Gallegas",
  emoji: "🥫",
  intro: "Uno de los grandes secretos gastronómicos de España. Las conservas gallegas no son comida de emergencia — son producto gourmet.",
  items: [
    "Mejillones en escabeche — intensos, perfectos con cerveza fría",
    "Berberechos al natural — los mejores del mercado",
    "Navajas en aceite de oliva — elegantes, suaves",
    "Pulpo en aceite — para llevar a casa como regalo",
    "Atún del Norte en aceite de oliva — el mejor bonito conservado",
  ],
  whereToBuy: "Cualquier supermercado Gadis o Froiz. Mejor souvenir gastronómico que puedes llevar.",
};

export const postres = [
  { name: "Tarta de Santiago", emoji: "🎂", description: "Tarta de almendra con la cruz de Santiago. Sin harina, sin mantequilla — solo almendra, huevo y azúcar. La comeréis en Santiago el lunes." },
  { name: "Filloas", emoji: "🍮", description: "Las crêpes gallegas. Más finas que las francesas. Con nata, miel o azúcar." },
  { name: "Bizcochos de Siboney", emoji: "🍩", description: "Los bizcochos caseros del desayuno en Siboney son una referencia. Naranja, chocolate, dulce de leche, limón y arándanos." },
];

export const mesaTips = [
  { emoji: "🕐", text: "Comida entre 14:00 y 16:00, cena a partir de 21:00. Antes es comer entre turistas." },
  { emoji: "🍞", text: "El pan no es gratis en muchos locales (1-2€). Es normal. Suele ser pan de maíz o centeno gallego — vale la pena." },
  { emoji: "🦐", text: "Preguntad siempre si el marisco es del día o congelado. En un buen local te lo dicen sin problema." },
  { emoji: "🍷", text: "El Ribeiro de la casa en bares de barrio suele ser excelente y barato. No hace falta carta de vinos." },
  { emoji: "🥃", text: "El chupito de orujo al final de la comida es de regalo. Siempre se acepta — es señal de que la comida fue bien." },
];
