/** Dades publicades pel negoci a serin128.com (peu, contacte i "Qui som"). */
export const business = {
  name: 'SERIN',
  fullName: 'SERIN Servicios e Instalaciones',
  street: 'Carrer Rosselló, 128 (Edifici Clariana, cantonada C/ Benviure)',
  postalCode: '08830',
  city: 'Sant Boi de Llobregat',
  region: 'Barcelona',
  phones: [
    { display: '93 630 81 90', e164: '+34936308190' },
    { display: '651 83 66 64', e164: '+34651836664' },
  ],
  /** Mòbil per a WhatsApp: pendent de confirmar amb el negoci. */
  whatsapp: '34651836664',
  email: 'serin128@hotmail.com',
  areaServed: ['Sant Boi de Llobregat', 'Sant Feliu de Llobregat', 'Viladecans', 'Castelldefels', 'Cornellà de Llobregat', "L'Hospitalet de Llobregat"],
  teamSize: 10,
} as const;

export const telUrl = (e164: string): string => `tel:${e164}`;
export const waUrl = (text: string): string => `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`;
