export const langs = ['ca', 'es'] as const;
export type Lang = (typeof langs)[number];
export type L = Record<Lang, string>;

/** Ruta d'una pàgina en cada idioma (el català no porta prefix). */
export const path = (lang: Lang, slug = ''): string => (lang === 'ca' ? `/${slug}` : `/es/${slug}`).replace(/\/$/, '') || '/';

export const ui = {
  meta: {
    title: { ca: 'SERIN · Reformes de banys i cuines i instal·lacions a Sant Boi de Llobregat', es: 'SERIN · Reformas de baños y cocinas e instalaciones en Sant Boi de Llobregat' },
    description: {
      ca: 'SERIN, carrer Rosselló 128 de Sant Boi. Reformes de banys i cuines, calefacció, aire condicionat, aerotèrmia i fontaneria al Baix Llobregat. Tel. 93 630 81 90.',
      es: 'SERIN, calle Rosselló 128 de Sant Boi. Reformas de baños y cocinas, calefacción, aire acondicionado, aerotermia y fontanería en el Baix Llobregat. Tel. 93 630 81 90.',
    },
  },
  nav: {
    configurador: { ca: 'Pressupost', es: 'Presupuesto' },
    diari: { ca: "Diari d'obra", es: 'Diario de obra' },
    galeria: { ca: 'Fotos', es: 'Fotos' },
    serveis: { ca: 'Què fem', es: 'Qué hacemos' },
    contacte: { ca: 'On som', es: 'Dónde estamos' },
    cta: { ca: 'Demana pressupost', es: 'Pide presupuesto' },
  },
  hero: {
    eyebrow: { ca: 'Sant Boi de Llobregat · Baix Llobregat', es: 'Sant Boi de Llobregat · Baix Llobregat' },
    title: { ca: 'Reformes i instal·lacions, amb equip propi.', es: 'Reformas e instalaciones, con equipo propio.' },
    lead: {
      ca: 'Paletes, lampistes, pintors i especialistes en pladur: uns deu professionals que fan banys, cuines i instal·lacions de principi a fi.',
      es: 'Albañiles, fontaneros, pintores y especialistas en pladur: unos diez profesionales que hacen baños, cocinas e instalaciones de principio a fin.',
    },
  },
  conf: {
    title: { ca: 'Què vols reformar?', es: '¿Qué quieres reformar?' },
    step1: { ca: '1 · Tria', es: '1 · Elige' },
    step2: { ca: '2 · Què t’agradaria fer', es: '2 · Qué te gustaría hacer' },
    step3: { ca: '3 · On és l’obra', es: '3 · Dónde es la obra' },
    municipi: { ca: 'Municipi', es: 'Municipio' },
    nom: { ca: 'El teu nom', es: 'Tu nombre' },
    send: { ca: 'Demanar pressupost per WhatsApp', es: 'Pedir presupuesto por WhatsApp' },
    preview: { ca: 'Una obra nostra semblant', es: 'Una obra nuestra parecida' },
    errNom: { ca: 'Escriu el teu nom.', es: 'Escribe tu nombre.' },
    errOpc: { ca: 'Tria almenys una opció.', es: 'Elige al menos una opción.' },
    msgHi: { ca: 'Hola, sóc', es: 'Hola, soy' },
    msgWant: { ca: 'Voldria pressupost per a', es: 'Quería presupuesto para' },
    msgAt: { ca: 'Municipi', es: 'Municipio' },
    privacy: { ca: 'Només prepara el missatge al teu WhatsApp. Aquesta web no guarda dades.', es: 'Solo prepara el mensaje en tu WhatsApp. Esta web no guarda datos.' },
  },
  diari: {
    eyebrow: { ca: "Diari d'obra", es: 'Diario de obra' },
    title: { ca: 'Un bany, del primer al darrer dia', es: 'Un baño, del primer al último día' },
    lead: {
      ca: 'Fotos d’una obra real nostra de 2014. Arrossega la línia de temps per veure com canvia.',
      es: 'Fotos de una obra real nuestra de 2014. Arrastra la línea de tiempo para ver cómo cambia.',
    },
    label: { ca: "Data de l'obra", es: 'Fecha de la obra' },
    dia: { ca: 'Dia', es: 'Día' },
  },
  galeria: {
    eyebrow: { ca: 'Treballs', es: 'Trabajos' },
    title: { ca: 'Fet per nosaltres', es: 'Hecho por nosotros' },
    all: { ca: 'Tot', es: 'Todo' },
    banys: { ca: 'Banys', es: 'Baños' },
    cuines: { ca: 'Cuines', es: 'Cocinas' },
    portes: { ca: 'Portes', es: 'Puertas' },
    close: { ca: 'Tancar', es: 'Cerrar' },
    open: { ca: 'Ampliar foto', es: 'Ampliar foto' },
  },
  serveis: {
    eyebrow: { ca: 'Serveis', es: 'Servicios' },
    title: { ca: 'Tot el que fem', es: 'Todo lo que hacemos' },
  },
  equip: {
    title: { ca: 'Un equip de deu persones, tots els oficis', es: 'Un equipo de diez personas, todos los oficios' },
  },
  contacte: {
    eyebrow: { ca: 'Contacte', es: 'Contacto' },
    title: { ca: 'Vine, truca o escriu-nos', es: 'Ven, llama o escríbenos' },
    horari: { ca: 'Horari', es: 'Horario' },
    horariText: { ca: 'Dilluns a divendres · 9:00–13:00 i 17:00–20:00', es: 'Lunes a viernes · 9:00–13:00 y 17:00–20:00' },
    telefons: { ca: 'Telèfons', es: 'Teléfonos' },
    adreca: { ca: 'Adreça', es: 'Dirección' },
    arribar: { ca: 'Com arribar-hi', es: 'Cómo llegar' },
    zona: { ca: 'Treballem a', es: 'Trabajamos en' },
  },
  demo: {
    text: { ca: 'Proposta de disseny no oficial', es: 'Propuesta de diseño no oficial' },
    by: { ca: 'Preparada per Web Local Growth per a SERIN', es: 'Preparada por Web Local Growth para SERIN' },
  },
  footer: {
    legal: { ca: 'Avís legal', es: 'Aviso legal' },
    privacy: { ca: 'Privacitat', es: 'Privacidad' },
    demo: { ca: 'Proposta no oficial · Web Local Growth', es: 'Propuesta no oficial · Web Local Growth' },
  },
  mobile: { call: { ca: 'Trucar', es: 'Llamar' } },
} as const;

type Leaf = { readonly ca: string; readonly es: string };
/** Retorna el text en l'idioma demanat. */
export const tr = (lang: Lang, leaf: Leaf): string => leaf[lang];

/** Text curt en línia segons l'idioma. */
export const p = (lang: Lang, ca: string, es: string): string => (lang === 'ca' ? ca : es);
