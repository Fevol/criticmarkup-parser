import { LanguageSupport, LRLanguage } from "@codemirror/language";
import { parser } from "./criticmarkup.grammar";

export const criticmarkupLanguage = LRLanguage.define({
	name: "criticmarkup",
	parser: parser.configure({}),
});

export function criticmarkup() {
	return new LanguageSupport(criticmarkupLanguage);
}
