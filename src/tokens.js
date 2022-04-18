/*
MIT License

Copyright (C) 2020 by Marijn Haverbeke <marijnh@gmail.com> and others

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/


import {ExternalTokenizer} from "@lezer/lr"
import {
	newline as newlineToken, eof, newlineEmpty, newlineBracketed
} from "./parser.terms.js"

const newline = 10, carriageReturn = 13, space = 32, tab = 9, hash = 35

export const newlines = new ExternalTokenizer((input, stack) => {
	if (input.next < 0) {
		input.acceptToken(eof)
	} else if (input.next != newline && input.next != carriageReturn) {
	} else if (stack.context.depth < 0) {
		input.acceptToken(newlineBracketed, 1)
	} else {
		input.advance()
		let spaces = 0
		while (input.next == space || input.next == tab) { input.advance(); spaces++ }
		let empty = input.next == newline || input.next == carriageReturn || input.next == hash
		input.acceptToken(empty ? newlineEmpty : newlineToken, -spaces)
	}
}, {contextual: true, fallback: true})
