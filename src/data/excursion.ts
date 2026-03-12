export interface ExcursionStop {
  id: string;
  name: string;
  time: string;
  duration: string;
  description: string;
  highlight: string;
  tip: string;
  icon: string;
  lat: number;
  lng: number;
}

export const excursionInfo = {
  title: "Costa da Morte",
  subtitle: "El fin del mundo atlántico",
  description:
    "La Costa da Morte es uno de los paisajes más dramáticos y auténticos de toda Europa. Acantilados vertiginosos, faros solitarios, pueblos pesqueros y la fuerza del Atlántico en estado puro.",
  transport: {
    recommended: "Coche de alquiler (imprescindible para la libertad de moverte)",
    duration: "~2h desde A Coruña hasta Muxía",
    alternative: "Hay buses pero con frecuencias muy limitadas. No recomendado para un día.",
    cost: "Alquiler desde ~30€/día. Gasolina ~15-20€ ida y vuelta.",
  },
  essentialTip: "Lleva chubasquero aunque haga sol. El viento y la lluvia horizontal son parte de la experiencia en Costa da Morte.",
};

export const excursionStops: ExcursionStop[] = [
  {
    id: "e1",
    name: "Malpica",
    time: "10:30",
    duration: "45min",
    description: "Puerto pesquero auténtico. Primer contacto con la costa salvaje.",
    highlight: "Puerto real de pescadores, sin turistificación.",
    tip: "Toma un café en el puerto observando las barcas.",
    icon: "⚓",
    lat: 43.3263,
    lng: -8.8088,
  },
  {
    id: "e2",
    name: "Camariñas",
    time: "12:00",
    duration: "45min",
    description: "Pueblo famoso por su encaje de bolillos, tradición centenaria.",
    highlight: "Las encajeras trabajan al aire libre con una técnica única en Europa.",
    tip: "Un pañuelo de encaje es el recuerdo perfecto.",
    icon: "🧶",
    lat: 43.1291,
    lng: -9.1783,
  },
  {
    id: "e3",
    name: "Santuario de Muxía",
    time: "13:30",
    duration: "1.5h",
    description: "Iglesia al borde del océano con rocas sagradas. Final del Camino de Santiago por la costa.",
    highlight: "La Pedra de Abalar: una roca gigante que se dice que se mece con las olas.",
    tip: "Baja a las rocas con cuidado. Las olas rompen con una fuerza increíble.",
    icon: "⛪",
    lat: 43.1069,
    lng: -9.2178,
  },
  {
    id: "e4",
    name: "Faro de Fisterra",
    time: "17:00",
    duration: "1.5h",
    description: "El mítico fin del mundo. Los romanos creían que aquí acababa la tierra.",
    highlight: "Puesta de sol legendaria. El kilómetro 0 del Camino de Santiago.",
    tip: "Quédate hasta el atardecer si puedes. Es una experiencia que no olvidarás.",
    icon: "🏠",
    lat: 42.8826,
    lng: -9.2727,
  },
  {
    id: "e5",
    name: "Cascada del Ézaro",
    time: "19:00",
    duration: "45min",
    description: "La única cascada de Europa continental que cae directamente al mar.",
    highlight: "Un fenómeno natural único. En verano la iluminan por la noche.",
    tip: "Sube al mirador de arriba para la mejor perspectiva.",
    icon: "💧",
    lat: 42.9133,
    lng: -9.1286,
  },
];

export const santiagoInfo = {
  title: "Santiago de Compostela",
  subtitle: "La ciudad del Apóstol",
  description:
    "Meta del Camino de Santiago y Patrimonio de la Humanidad. Una ciudad monumental con la catedral más famosa de España, calles medievales y una gastronomía excepcional.",
  transport: {
    recommended: "Tren desde A Coruña (cada 30 min, ~1h)",
    duration: "~1h",
    alternative: "Bus Monbus (~1h15min, frecuente)",
    cost: "~12-15€ ida y vuelta en tren",
  },
  essentialTip: "Compra el billete de tren online con antelación. La estación de Santiago está a 15 min andando del centro.",
};

export const santiagoStops: ExcursionStop[] = [
  {
    id: "sg1",
    name: "Catedral de Santiago",
    time: "10:00",
    duration: "1.5h",
    description: "La catedral más famosa de España. Meta del Camino de Santiago.",
    highlight: "La fachada barroca del Obradoiro es una de las imágenes más icónicas de España.",
    tip: "La visita a las cubiertas es de pago pero merece mucho la pena.",
    icon: "⛪",
    lat: 42.8805,
    lng: -8.5448,
  },
  {
    id: "sg2",
    name: "Casco histórico",
    time: "11:30",
    duration: "1.5h",
    description: "Rúa do Franco, Rúa do Vilar, Praza da Quintana. Arquitectura medieval.",
    highlight: "Santiago es Patrimonio de la Humanidad. Cada callejuela tiene siglos de historia.",
    tip: "Rúa do Franco es la calle de tapas. Prueba los pimientos de Padrón.",
    icon: "🏛",
    lat: 42.8790,
    lng: -8.5440,
  },
  {
    id: "sg3",
    name: "Mercado de Abastos",
    time: "13:30",
    duration: "1.5h",
    description: "Uno de los mejores mercados de España. Marisco fresco que te preparan allí mismo.",
    highlight: "Compra marisco en los puestos y llévalos al bar para que te los cocinen.",
    tip: "Las zamburiñas y los percebes son la estrella del mercado.",
    icon: "🛒",
    lat: 42.8782,
    lng: -8.5425,
  },
  {
    id: "sg4",
    name: "Parque de la Alameda",
    time: "15:30",
    duration: "1h",
    description: "Jardines centenarios con el mejor mirador de la Catedral.",
    highlight: "Las vistas de la Catedral desde aquí son la postal perfecta de Santiago.",
    tip: "Busca la estatua de las Dos Marías, personajes míticos de Santiago.",
    icon: "🌿",
    lat: 42.8770,
    lng: -8.5480,
  },
];
