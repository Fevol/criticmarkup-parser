# CriticMarkup Lezer grammar

This is a [CriticMarkup](https://github.com/CriticMarkup/CriticMarkup-toolkit) grammar for CodeMirror's [Lezer](https://lezer.codemirror.net/) parser system.
Originally developed by kometenstaub, this fork aims to make some improvements to the grammar in terms of extensibility, testing, and resolving
some nesting issues of the original grammar.

This repository is not affiliated with the CriticMarkup maintainers, and is intended to be used with CodeMirror 6.

The grammar and parser are developed alongside with the [CriticMarkup plugin](https://github.com/Fevol/obsidian-criticmarkup) for [Obsidian](https://obsidian.md/).



## Usage

There are five types of ranges that will be outputted by the grammar's parser, which are defined as follows:
- Addition: `{++ ... ++}`
- Deletion: `{-- ... --}`
- Substitution: `{~~ ... ~> ... ~~}`
- Comment: `{>> ... <<}`
- Highlight: `{== ... ==}`

To get the text contexts for each of these ranges, you can simply splice the first and last three characters off of the node's text.

For Substitution, in order to get the text contexts for the two sides of the substitution, you simply have to peek
at the next node in the tree, which is a `MSub` node, and get its from/to text contexts. When walking through the tree,
you can simply skip over the `MSub` node, since it does not provide any other useful information.


## Tests
There are four different test files that attempt to, each testing a different aspect of the grammar:
- `basic_markdown.txt`: Tests the interaction of the Parser with Markdown text and the CriticMarkup grammar.
- `basic_ranges.txt`: Tests well-formedness of each node type.
- `malformed_ranges.txt`: Tests cases where ranges should not get parsed.
- `edge_cases.txt`: Tests edge cases of the grammar.

### Issues
Currently, there is one issue with the grammar that is [not easily resolvable](https://discuss.codemirror.net/t/proper-local-token-group-usage-and-incorrect-matching/5778/11),
without hampering performance or the simplicity of the grammar.

The error is that unclosed opening brackets `{++` will match all subsequent tokens, and thus later
ranges might not get parsed correctly.


## Contributors
@kometenstaub - Developing the original grammar and plugin, and providing much needed guidance and support.<br>
@marijnh - Answering my incessant questions about Lezer and how grammars should be constructed.
