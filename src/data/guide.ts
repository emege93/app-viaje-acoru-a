export interface GuideCard {
  id: string;
  title: string;
  description: string;
  placeId?: string;
  tags?: string[];
  icon?: string;
}

export interface ContextualTip {
  id: string;
  text: string;
}

export interface GuideSection {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  description?: string;
  cards: GuideCard[];
  tips?: ContextualTip[];
  layout: "horizontal-scroll" | "stacked" | "text-only";
}

export const guideSections: GuideSection[] = [
  {
    id: "mananas",
    emoji: "🌅",
    title: "Mañanas en Coruña",
    subtitle: "Los mejores sitios para empezar el día con calma",
    cards: [
      {
        id: "g-cafe-venecia",
        title: "Café Venecia",
        description: "Café clásico coruñés con barra de toda la vida. Café con leche perfecto, tostadas y empanadas de la vitrina.",
        icon: "☕",
      },
      {
        id: "g-la-tita",
        title: "La Tita",
        description: "Brunch moderno pero con alma gallega. Tortitas, huevos benedictinos y zumos naturales. Muy instagrameable.",
        icon: "🥞",
      },
      {
        id: "g-tira-do-playa",
        title: "A Tira do Playa",
        description: "Vistas a toda la bahía de Riazor y la playa. Perfecto para desayunar o comer con vistas al mar.",
        placeId: "a-tira-do-playa",
        tags: ["Vistas al mar", "Ideal desayuno"],
        icon: "🌊",
      },
    ],
    layout: "horizontal-scroll",
  },
  {
    id: "paseos-mar",
    emoji: "🌊",
    title: "Paseos junto al mar",
    subtitle: "Rutas costeras y miradores con vistas al Atlántico",
    cards: [
      {
        id: "g-paseo-maritimo",
        title: "Paseo Marítimo",
        description: "13 km bordeando la ciudad junto al mar. El tramo de Riazor a la Torre de Hércules es el más bonito.",
        placeId: "paseo-maritimo",
        icon: "🚶",
      },
      {
        id: "g-darsena",
        title: "Dársena de la Marina",
        description: "Pasea por la dársena viendo los edificios emblemáticos y el puerto. Sigue hasta el Castillo de San Antón y continúa hasta Comarea.",
        icon: "🏛",
      },
      {
        id: "g-riazor-orzan",
        title: "Playas de Riazor y Orzán",
        description: "Arena fina y paseo marítimo espectacular. Orzán es más surfera, Riazor más familiar.",
        placeId: "playa-riazor",
        icon: "🏖",
      },
      {
        id: "g-torre",
        title: "Torre de Hércules",
        description: "El faro romano más antiguo del mundo en funcionamiento. Patrimonio de la Humanidad. Las vistas desde arriba son impresionantes.",
        placeId: "torre-hercules",
        icon: "🏛",
      },
      {
        id: "g-monte-san-pedro",
        title: "Monte de San Pedro",
        description: "El mejor mirador de A Coruña. Vistas panorámicas 360° de la ciudad, el mar y la ría.",
        placeId: "monte-san-pedro",
        icon: "🌄",
      },
    ],
    tips: [
      {
        id: "ct-marina",
        text: "Los coruñeses adoran pasear desde la Marina hasta el Castillo de San Antón y seguir hasta Comarea. Es el paseo perfecto.",
      },
    ],
    layout: "horizontal-scroll",
  },
  {
    id: "comer-local",
    emoji: "🍴",
    title: "Comer como un local",
    subtitle: "Restaurantes recomendados por alguien que conoce la ciudad",
    cards: [
      {
        id: "g-comarea",
        title: "Comarea ✨",
        description: "Vistas espectaculares y comida muy muy rica. Uno de mis sitios favoritos. Perfecto para comer (en vez de cenar) y disfrutar de las vistas. ~50€ por persona.",
        placeId: "comarea",
        tags: ["Favorito local ✨", "Vistas al mar"],
        icon: "✨",
      },
      {
        id: "g-pulpeira",
        title: "A Pulpeira de Melide",
        description: "Referencia gallega para pulpo á feira. Sencillo, directo y siempre cumple.",
        placeId: "a-pulpeira-de-melide",
        tags: ["Cocina gallega"],
        icon: "🐙",
      },
      {
        id: "g-penela",
        title: "A Penela",
        description: "Marisquería de referencia. Percebes, nécoras, centollos frescos del día. LA mariscada del viaje.",
        placeId: "a-penela",
        tags: ["Cocina gallega", "Marisco"],
        icon: "🦀",
      },
      {
        id: "g-o-fado",
        title: "O Fado",
        description: "Si os gustan los arroces, este es vuestro sitio. Casero, sin florituras, pero muy rico.",
        placeId: "o-fado",
        tags: ["Arroces"],
        icon: "🍚",
      },
      {
        id: "g-nova-lanchina",
        title: "A Nova Lanchiña",
        description: "Pulpo y comida tradicional gallega muy rica. Solo merece la pena si os queda cerca del alojamiento.",
        placeId: "a-nova-lanchina",
        tags: ["Cocina gallega"],
        icon: "🐙",
      },
      {
        id: "g-tira-comer",
        title: "A Tira do Playa",
        description: "Vistas a toda la bahía de Riazor. Perfecto para comer con vistas al mar.",
        placeId: "a-tira-do-playa",
        tags: ["Vistas al mar"],
        icon: "🌊",
      },
    ],
    tips: [
      {
        id: "ct-riazor-tira",
        text: "Si estás cerca de Riazor a la hora de comer, A Tira do Playa es una parada perfecta con vistas increíbles a la bahía.",
      },
    ],
    layout: "horizontal-scroll",
  },
  {
    id: "centro-historico",
    emoji: "🏙️",
    title: "El centro histórico",
    subtitle: "Calles con siglos de historia y plazas con encanto",
    cards: [
      {
        id: "g-ciudad-vieja",
        title: "Ciudad Vieja",
        description: "El casco histórico con calles empedradas, galerías acristaladas y rincones con siglos de historia. Acaba en la Plaza de María Pita, la plaza del ayuntamiento.",
        placeId: "ciudad-vieja",
        icon: "🏛",
      },
      {
        id: "g-fundacion",
        title: "Fundación Marta Ortega",
        description: "Exposición fotográfica y espacio cultural. Arte contemporáneo que merece mucho la pena.",
        placeId: "fundacion-marta-ortega",
        icon: "📸",
      },
      {
        id: "g-pescaderia",
        title: "Barrio de la Pescadería",
        description: "Las galerías acristaladas son el símbolo de A Coruña. Fachadas enteras de cristal frente al mar en la Avenida de la Marina.",
        icon: "🏘",
      },
    ],
    layout: "stacked",
  },
  {
    id: "atardeceres",
    emoji: "🌇",
    title: "Atardeceres sobre el Atlántico",
    subtitle: "Los mejores sitios para ver caer el sol sobre el mar",
    cards: [
      {
        id: "g-sunset-monte",
        title: "Monte de San Pedro",
        description: "El mejor atardecer de la ciudad. Vistas 360° con el sol cayendo sobre el Atlántico. Lleva algo de abrigo y algo para brindar.",
        placeId: "monte-san-pedro",
        icon: "🌅",
      },
      {
        id: "g-sunset-paseo",
        title: "Paseo Marítimo al anochecer",
        description: "Caminar por el paseo con las luces de la ciudad encendiéndose es mágico. El tramo entre San Amaro y la Torre es el más bonito.",
        placeId: "paseo-maritimo",
        icon: "🌇",
      },
    ],
    layout: "stacked",
  },
  {
    id: "cenar-tapear",
    emoji: "🍷",
    title: "Cenar y tapear por el centro",
    subtitle: "Las mejores calles para picar, cenar y disfrutar de la noche",
    description: "El centro de A Coruña tiene calles llenas de sitios donde se come de maravilla. Las calles de los Olmos, de la Barrera y Galera son el epicentro del tapeo. Ve de bar en bar como hacen los locales.",
    cards: [
      {
        id: "g-zona-tapeo",
        title: "Calles Olmos, Barrera y Galera",
        description: "El corazón del tapeo en el centro. Tres calles llenas de bares con comida riquísima. El pleno centro de Coruña.",
        placeId: "zona-tapeo-centro",
        tags: ["Zona de tapeo"],
        icon: "🍷",
      },
      {
        id: "g-olabar",
        title: "OlaBar",
        description: "Uno de los favoritos en la zona del centro. Tapas creativas y buen ambiente.",
        tags: ["Recomendado"],
        icon: "🍺",
      },
      {
        id: "g-tapanegra",
        title: "TapaNegra",
        description: "Tapas de referencia en el centro de Coruña. Siempre acierta.",
        tags: ["Recomendado"],
        icon: "🍺",
      },
      {
        id: "g-bombilla",
        title: "La Bombilla",
        description: "Otro imprescindible en las calles del centro para tapear.",
        tags: ["Recomendado"],
        icon: "🍺",
      },
      {
        id: "g-rua-estrella",
        title: "Rúa de la Estrella",
        description: "La calle más animada para ir de tapas y vinos. Decenas de bares uno al lado del otro.",
        placeId: "rua-estrella",
        tags: ["Zona de tapeo"],
        icon: "🍺",
      },
    ],
    tips: [
      {
        id: "ct-preconcierto",
        text: "Antes del concierto en el Coliseum, baja a cenar o tapear por estas calles. Están a un paseo del recinto.",
      },
    ],
    layout: "horizontal-scroll",
  },
  {
    id: "tortilla",
    emoji: "🥚",
    title: "La mejor tortilla de Coruña",
    subtitle: "La tortilla de Betanzos tiene su sitio en la ciudad",
    description: "La tortilla de Betanzos es una obra maestra: muy jugosa por dentro, casi líquida, con un exterior dorado perfecto. En A Coruña hay un sitio donde la bordan.",
    cards: [
      {
        id: "g-o-cabo",
        title: "O Cabo",
        description: "Referencia para tortilla en A Coruña. Sencillo, directo y especialistas. Si te gusta la tortilla de Betanzos, este es tu sitio.",
        placeId: "o-cabo",
        tags: ["Favorito local ✨", "Tortilla"],
        icon: "🍳",
      },
    ],
    layout: "text-only",
  },
  {
    id: "descubrir-local",
    emoji: "🚶",
    title: "Descubrir Coruña como un local",
    subtitle: "La mejor forma de vivir la ciudad",
    description: "La mejor manera de descubrir A Coruña es caminando, sin prisa, perdiéndote por las calles del centro. Las calles Olmos, Barrera y Galera son un buen punto de partida, pero lo mejor es dejarte llevar. A Coruña es una ciudad fácil de recorrer a pie, con mucha gente joven y ambiente. Del resto, es perderse por las calles del centro y descubrir sitios nuevos en cada esquina.",
    cards: [],
    layout: "text-only",
  },
];
