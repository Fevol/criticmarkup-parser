# Criticmarkup lezer grammar

This is a [criticmarkup](https://github.com/CriticMarkup/CriticMarkup-toolkit) [lezer grammar](https://lezer.codemirror.net/).

The characters for strings are taken from [here](https://github.com/lezer-parser/json/blob/fb6ce500ca64c3345eee09f8bd4566cf65ad0af0/src/json.grammar#L24-L26).

## Usage

It has `Addition`, `Deletion`, `Comment`, `Highlight` and `Substitution` nodes. Those are the full nodes. That means for working with the text, you need to parse the individual nodes.

- Remove the 3 characters at the beginning and end
- If a Highlight and a Comment are directy next to each other (the respective end and start position are the same number), then it is a highlight with a comment. This only happens when there are one or more new lines in the highlight. Otherwise it will be one highlight which *may* have a comment associated with it.

Note that the tests don't work. For testing I made a very basic Obsidian plugin.

## Instructions

Things you'll need to do (see the [language support example](https://codemirror.net/6/examples/lang-package/) for a more detailed tutorial):

 * [x] `git grep EXAMPLE` and replace all instances with your language name.

 * [x] Rewrite the grammar in `src/syntax.grammar` to cover your language. See the [Lezer system guide](https://lezer.codemirror.net/docs/guide/#writing-a-grammar) for information on this file format.

 * Adjust the metadata in `src/index.ts` to work with your new grammar. *(I only removed properties, do we need to add custom properties?)*

 * [x] Adjust the grammar tests in `test/cases.txt`.

 * [x] Build (`npm run prepare`) and test (`npm test`). *(needs to be done each time the grammar is changed)*

 * [x] Rewrite this readme file.

 * [x] Optionally add a license.

 * Publish. If you want to use a `@codemirror/lang-...` package name, open an [issue](https://github.com/codemirror/codemirror.next/issues) to ask for npm publish rights for that name.
