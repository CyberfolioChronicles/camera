export const prerender = true;

import '$lib/i18n'; // Import to initialize. Important :)
import { waitLocale } from 'svelte-i18n';

export const load = async () => {
	await waitLocale();
};
