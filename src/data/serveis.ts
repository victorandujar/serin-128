import type { L } from '../i18n/ui';
export interface Servei { readonly id: string; readonly title: L; readonly items: readonly L[] }
/** Llistes tretes de serin128.com, sense afegir res. */
export const serveis: readonly Servei[] = [
  { id: 'banys', title: { ca: 'Banys', es: 'Baños' }, items: [
    { ca: 'Enderroc', es: 'Derribo' }, { ca: 'Enrajolat i terra ceràmic', es: 'Alicatado y suelo cerámico' }, { ca: 'Fontaneria i electricitat', es: 'Fontanería y electricidad' }, { ca: 'Aixetes', es: 'Grifería' }, { ca: "Finestres d'alumini", es: 'Ventanas de aluminio' },
  ] },
  { id: 'cuines', title: { ca: 'Cuines', es: 'Cocinas' }, items: [
    { ca: 'Enderroc i enrajolat', es: 'Derribo y alicatado' }, { ca: 'Fontaneria, electricitat i gas', es: 'Fontanería, electricidad y gas' }, { ca: 'Aixetes', es: 'Grifería' }, { ca: "Finestres d'alumini", es: 'Ventanas de aluminio' }, { ca: 'Disseny dels mobles', es: 'Diseño de los muebles' },
  ] },
  { id: 'calor', title: { ca: 'Calefacció i aire', es: 'Calefacción y aire' }, items: [
    { ca: 'Calefacció de gas natural', es: 'Calefacción de gas natural' }, { ca: 'Canvi de caldera de condensació', es: 'Cambio de caldera de condensación' }, { ca: 'Ariston, Baxi, Ferroli', es: 'Ariston, Baxi, Ferroli' }, { ca: 'Aire condicionat', es: 'Aire acondicionado' },
  ] },
  { id: 'aigua', title: { ca: 'Aigua i energia', es: 'Agua y energía' }, items: [
    { ca: 'Descalcificador domèstic', es: 'Descalcificador doméstico' }, { ca: 'Osmosi inversa', es: 'Ósmosis inversa' }, { ca: 'Aerotèrmia', es: 'Aerotermia' }, { ca: 'Plaques solars', es: 'Placas solares' }, { ca: 'Geotèrmia', es: 'Geotermia' },
  ] },
];
