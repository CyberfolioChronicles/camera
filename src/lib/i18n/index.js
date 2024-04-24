import { init, register, locale, getMessageFormatter, format } from 'svelte-i18n';
import { ws } from '$lib/connector/websocket';
import defaultState from '$lib/defaultState';
import { derived } from 'svelte/store';

const detectRecursiveKeys = /<(?<key>[\w-]+)>/gm;
/**
 * Map of languages and their corresponding codes.
 * @type {Object.<string, string>}
 */
const languageMap = {
	Deutsch: 'de',
	English: 'en'
};
let defaultLanguage = defaultState.language;
ws.get('language').subscribe((value) => {
	defaultLanguage = languageMap[value];
	locale.set(languageMap[value]);
});
register('en', () => import('./locales/en.json'));
register('de', () => import('./locales/de.json'));

export const r_ = derived([format], ([$format]) => recursiveTranslate.bind($format));
/**
 * Translates the given key recursively by replacing any recursive placeholders with their corresponding translations.
 * @property {any} this - The message formatter.
 * @param {string | import('svelte-i18n')} id - The key to be translated.
 * @param {MessageObject} [options] - The options to be passed to the message formatter.
 */
export function recursiveTranslate(id, options) {
	let translated = this(id, options);
	if (detectRecursiveKeys.test(translated)) {
		const matches = translated.match(detectRecursiveKeys) || [];
		/**
		 * @param {string} match - The match to be replaced.
		 */
		matches.forEach((match) => {
			const key = match.replace('<', '').replace('>', '');
			// Replace the match with the translation of the key
			const translation = recursiveTranslate.bind(this, key, options)();
			if (options && Object.hasOwn(options, key)) {
				translated = translated.replace(match, options[key]);
				translated = recursiveTranslate.bind(this, translated, options)();
			}
			if (ws.has(key)) {
				ws.get(key).subscribe((value) => {
					translated = translated.replace(match, value);
				});
			}
			translated = translated.replace(match, translation);
		});
	}
	return translated;
}

init({
	fallbackLocale: defaultLanguage,
	initialLocale: defaultLanguage
});
