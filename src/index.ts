import {parser} from "./criticmarkup.grammar"
import {LRLanguage, LanguageSupport} from "@codemirror/language"
//import {styleTags, tags as t} from "@codemirror/highlight"

export const criticmarkupLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
        /*
      indentNodeProp.add({
        Application: delimitedIndent({closing: ")", align: false})
      }),
      foldNodeProp.add({
        Application: foldInside
      }),
      styleTags({
        Identifier: t.variableName,
        Boolean: t.bool,
        String: t.string,
        LineComment: t.lineComment,
        "( )": t.paren
      })
        */
    ]
  }),
  languageData: {
    // commentTokens: {line: ";"}
  }
})

export function criticmarkup() {
  return new LanguageSupport(criticmarkupLanguage)
}
