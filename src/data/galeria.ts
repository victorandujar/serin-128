import type { ImageMetadata } from 'astro';
import type { L } from '../i18n/ui';
import b1 from '../assets/obres/bany-2017-a.jpg';
import b2 from '../assets/obres/bany-2017-b.jpg';
import b3 from '../assets/obres/bany-dutxa-2.jpg';
import b4 from '../assets/obres/bany-moble-2.jpg';
import b5 from '../assets/obres/bany-plat.jpg';
import b6 from '../assets/obres/bany-mosaic.jpg';
import c1 from '../assets/obres/cuina-fusta-2.jpg';
import c2 from '../assets/obres/cuina-blanca.jpg';
import c3 from '../assets/obres/cuina-angle.jpg';
import c4 from '../assets/obres/cuina-taulell.jpg';
import c5 from '../assets/obres/cuina-fosca.jpg';
import p1 from '../assets/obres/porta-doble.jpg';
import p2 from '../assets/obres/porta-fusta.jpg';
import p3 from '../assets/obres/porta-entrada.jpg';
import p4 from '../assets/obres/porta-blanca.jpg';

export type Tipus = 'banys' | 'cuines' | 'portes';
export interface Foto { readonly tipus: Tipus; readonly img: ImageMetadata; readonly alt: L }

export const fotos: readonly Foto[] = [
  { tipus: 'banys', img: b1, alt: { ca: 'Bany amb dutxa a terra, moble doble i tovalloler', es: 'Baño con ducha a ras de suelo, mueble doble y toallero' } },
  { tipus: 'cuines', img: c1, alt: { ca: 'Cuina amb mobles de fusta i taulell de granit', es: 'Cocina con muebles de madera y encimera de granito' } },
  { tipus: 'banys', img: b2, alt: { ca: 'Bany amb paret efecte marbre i columna', es: 'Baño con pared efecto mármol y columna' } },
  { tipus: 'portes', img: p1, alt: { ca: 'Porta doble de fusta amb vidres', es: 'Puerta doble de madera con cristales' } },
  { tipus: 'cuines', img: c3, alt: { ca: 'Cuina en angle amb forn integrat i placa', es: 'Cocina en esquina con horno integrado y placa' } },
  { tipus: 'banys', img: b3, alt: { ca: 'Dutxa amb rajola fosca i columna de dutxa', es: 'Ducha con azulejo oscuro y columna de ducha' } },
  { tipus: 'cuines', img: c2, alt: { ca: 'Cuina blanca amb taulell fosc', es: 'Cocina blanca con encimera oscura' } },
  { tipus: 'portes', img: p2, alt: { ca: 'Porta interior de fusta amb tres vidres', es: 'Puerta interior de madera con tres cristales' } },
  { tipus: 'banys', img: b4, alt: { ca: 'Moble de bany fosc amb rentamans blanc', es: 'Mueble de baño oscuro con lavabo blanco' } },
  { tipus: 'cuines', img: c5, alt: { ca: 'Cuina amb mobles foscos i finestra', es: 'Cocina con muebles oscuros y ventana' } },
  { tipus: 'banys', img: b5, alt: { ca: 'Plat de dutxa amb paret de mosaic', es: 'Plato de ducha con pared de mosaico' } },
  { tipus: 'portes', img: p3, alt: { ca: "Porta d'entrada de fusta fosca", es: 'Puerta de entrada de madera oscura' } },
  { tipus: 'cuines', img: c4, alt: { ca: "Detall d'aigüera d'acer en taulell", es: 'Detalle de fregadero de acero en encimera' } },
  { tipus: 'banys', img: b6, alt: { ca: 'Dutxa amb franja de mosaic', es: 'Ducha con franja de mosaico' } },
  { tipus: 'portes', img: p4, alt: { ca: 'Porta blanca lacada', es: 'Puerta blanca lacada' } },
];
