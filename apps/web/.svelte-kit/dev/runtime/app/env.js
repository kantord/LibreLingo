export { prerendering } from '../env.js';

/**
 * @type {import('$app/env').browser}
 */
const browser = !import.meta.env.SSR;
/**
 * @type {import('$app/env').dev}
 */
const dev = !!import.meta.env.DEV;
/**
 * @type {import('$app/env').mode}
 */
const mode = import.meta.env.MODE;
/**
 * @type {import('$app/env').amp}
 */
const amp = !!import.meta.env.VITE_SVELTEKIT_AMP;

export { amp, browser, dev, mode };
