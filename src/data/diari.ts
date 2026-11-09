import type { ImageMetadata } from 'astro';
import type { L } from '../i18n/ui';
import d1 from '../assets/obres/diari-1.jpg';
import d2 from '../assets/obres/diari-2.jpg';
import d3 from '../assets/obres/diari-3.jpg';
import d4 from '../assets/obres/diari-4.jpg';
import d5 from '../assets/obres/diari-5.jpg';

export interface Fita { readonly date: string; readonly day: number; readonly label: L; readonly img: ImageMetadata; readonly alt: L }

/** Mateix bany, dates preses dels noms de fitxer de la càmera (2014). */
export const fites: readonly Fita[] = [
  { date: '2014-02-25', day: 1, label: { ca: 'Abans: banyera', es: 'Antes: bañera' }, img: d1, alt: { ca: 'Bany amb banyera abans de la reforma', es: 'Baño con bañera antes de la reforma' } },
  { date: '2014-03-17', day: 21, label: { ca: 'Enderroc i plat de dutxa', es: 'Derribo y plato de ducha' }, img: d2, alt: { ca: 'Paret enderrocada i plat de dutxa col·locat', es: 'Pared derribada y plato de ducha colocado' } },
  { date: '2014-03-19', day: 23, label: { ca: 'Enrajolat', es: 'Alicatado' }, img: d3, alt: { ca: 'Parets enrajolades al voltant del plat de dutxa', es: 'Paredes alicatadas alrededor del plato de ducha' } },
  { date: '2014-03-21', day: 25, label: { ca: 'Sanitaris', es: 'Sanitarios' }, img: d4, alt: { ca: 'Bany enrajolat amb el vàter col·locat', es: 'Baño alicatado con el inodoro colocado' } },
  { date: '2014-04-09', day: 44, label: { ca: 'Acabat', es: 'Terminado' }, img: d5, alt: { ca: 'Dutxa acabada amb mampara i rentamans', es: 'Ducha terminada con mampara y lavabo' } },
];
