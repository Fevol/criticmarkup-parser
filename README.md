# Criticmarkup lezer parser

This is an attempt at creating a criticmarkup parser. It currently does not handle new lines.

The character recognition for strings is taken from [here](https://github.com/lezer-parser/json/blob/fb6ce500ca64c3345eee09f8bd4566cf65ad0af0/src/json.grammar#L24-L26).

## Instructions

Things you'll need to do (see the [language support example](https://codemirror.net/6/examples/lang-package/) for a more detailed tutorial):

 * `git grep EXAMPLE` and replace all instances with your language name.

 * Rewrite the grammar in `src/syntax.grammar` to cover your language. See the [Lezer system guide](https://lezer.codemirror.net/docs/guide/#writing-a-grammar) for information on this file format.

 * Adjust the metadata in `src/index.ts` to work with your new grammar.

 * Adjust the grammar tests in `test/cases.txt`.

 * Build (`npm run prepare`) and test (`npm test`).

 * Rewrite this readme file.

 * Optionally add a license.

 * Publish. If you want to use a `@codemirror/lang-...` package name, open an [issue](https://github.com/codemirror/codemirror.next/issues) to ask for npm publish rights for that name.
