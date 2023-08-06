import { parser } from './criticmarkup.grammar';
import { LRLanguage, LanguageSupport } from '@codemirror/language';

export const criticmarkupLanguage = LRLanguage.define({
	name: 'criticmarkup',
	parser: parser.configure({}),
});

export function criticmarkup() {
	return new LanguageSupport(criticmarkupLanguage);
}
