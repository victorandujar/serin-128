/**
 * Full d'encàrrec: tipus d'obra → feines → nom i població → missatge de WhatsApp preparat.
 */
import { waUrl } from '../data/business';

const TXT = {
  ca: { hi: 'Hola, sóc', want: 'Voldria pressupost per a', at: 'Municipi', errNom: 'Escriu el teu nom.', errOpc: 'Tria almenys una opció.' },
  es: { hi: 'Hola, soy', want: 'Quería presupuesto para', at: 'Municipio', errNom: 'Escribe tu nombre.', errOpc: 'Elige al menos una opción.' },
} as const;

export const initConfigurador = (form: HTMLFormElement): void => {
  const lang = form.dataset.lang === 'es' ? 'es' : 'ca';
  const txt = TXT[lang];
  const groups = [...form.querySelectorAll<HTMLElement>('[data-group]')];
  const errOpc = form.querySelector<HTMLElement>('[data-err-opc]');
  const nom = form.querySelector<HTMLInputElement>('[name="nom"]');
  const errNom = nom ? form.querySelector<HTMLElement>(`#${nom.getAttribute('aria-describedby')}`) : null;

  const currentCat = (): string => form.querySelector<HTMLInputElement>('[name="cat"]:checked')?.value ?? '';

  form.querySelectorAll<HTMLInputElement>('[name="cat"]').forEach((r) =>
    r.addEventListener('change', () => {
      groups.forEach((g) => (g.hidden = g.dataset.group !== r.value));
    }),
  );

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const cat = currentCat();
    const opts = [...form.querySelectorAll<HTMLInputElement>(`[data-group="${cat}"] input:checked`)].map((i) => i.value);
    const name = nom?.value.trim() ?? '';
    const mun = form.querySelector<HTMLInputElement>('[name="municipi"]')?.value.trim() ?? '';
    const okOpc = opts.length > 0;
    const okNom = name.length >= 2;
    if (errOpc) errOpc.textContent = okOpc ? '' : txt.errOpc;
    if (errNom) errNom.textContent = okNom ? '' : txt.errNom;
    nom?.setAttribute('aria-invalid', String(!okNom));
    if (!okOpc) { form.querySelector<HTMLElement>(`[data-group="${cat}"] input`)?.focus(); return; }
    if (!okNom) { nom?.focus(); return; }
    const catLabel = form.querySelector<HTMLInputElement>('[name="cat"]:checked')?.dataset.catLabel ?? cat;
    const msg = [`${txt.hi} ${name}.`, `${txt.want}: ${catLabel.toLowerCase()} — ${opts.join(', ')}.`, mun && `${txt.at}: ${mun}.`].filter(Boolean).join('\n');
    window.open(waUrl(msg), '_blank', 'noopener');
  });
};
