import { parser } from './criticmarkup.grammar';
import { LRLanguage, LanguageSupport } from '@codemirror/language';

export const criticmarkupLanguage = LRLanguage.define({
	parser,
});

export function criticmarkup() {
	return new LanguageSupport(criticmarkupLanguage);
}
