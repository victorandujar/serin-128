import type { L } from '../i18n/ui';

export interface Opcio { readonly id: string; readonly label: L }
export interface Categoria { readonly id: string; readonly label: L; readonly opcions: readonly Opcio[] }

/** Opcions basades en els serveis que el negoci anuncia. */
export const categories: readonly Categoria[] = [
  {
    id: 'bany',
    label: { ca: 'Bany', es: 'Baño' },
    opcions: [
      { id: 'dutxa', label: { ca: 'Canviar banyera per dutxa', es: 'Cambiar bañera por ducha' } },
      { id: 'moble', label: { ca: 'Moble i rentamans', es: 'Mueble y lavabo' } },
      { id: 'rajola', label: { ca: 'Rajoles i paviment', es: 'Azulejos y suelo' } },
      { id: 'complet', label: { ca: 'Reforma completa', es: 'Reforma completa' } },
    ],
  },
  {
    id: 'cuina',
    label: { ca: 'Cuina', es: 'Cocina' },
    opcions: [
      { id: 'mobles', label: { ca: 'Mobles nous', es: 'Muebles nuevos' } },
      { id: 'taulell', label: { ca: 'Taulell i placa', es: 'Encimera y placa' } },
      { id: 'instal', label: { ca: 'Aigua, llum i gas', es: 'Agua, luz y gas' } },
      { id: 'completa', label: { ca: 'Reforma completa', es: 'Reforma completa' } },
    ],
  },
  {
    id: 'instal',
    label: { ca: 'Instal·lacions', es: 'Instalaciones' },
    opcions: [
      { id: 'caldera', label: { ca: 'Caldera / calefacció', es: 'Caldera / calefacción' } },
      { id: 'aigua', label: { ca: "Osmosi i descalcificador", es: 'Ósmosis y descalcificador' } },
      { id: 'portes', label: { ca: 'Portes', es: 'Puertas' } },
    ],
  },
];
