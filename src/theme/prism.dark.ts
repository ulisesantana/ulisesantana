export const darkPrismTheme = `
/**
 * prism.js tomorrow night eighties for JavaScript, CoffeeScript, CSS and HTML
 * Based on https://github.com/chriskempson/tomorrow-theme
 * @author Rose Pritchard
 */

code[class*="language-"],
pre[class*="language-"] {
\tcolor: #ccc;
\tbackground: none;
\tfont-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
\tfont-size: 1em;
\ttext-align: left;
\twhite-space: pre;
\tword-spacing: normal;
\tword-break: normal;
\tword-wrap: normal;
\tline-height: 1.5;

\t-moz-tab-size: 4;
\t-o-tab-size: 4;
\ttab-size: 4;

\t-webkit-hyphens: none;
\t-moz-hyphens: none;
\t-ms-hyphens: none;
\thyphens: none;

}

/* Code blocks */
pre[class*="language-"] {
\tpadding: 1em;
\tmargin: .5em 0;
\toverflow: auto;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
\tbackground: #2d2d2d;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
\tpadding: .1em;
\tborder-radius: .3em;
\twhite-space: normal;
}

.token.comment,
.token.block-comment,
.token.prolog,
.token.doctype,
.token.cdata {
\tcolor: #999;
}

.token.punctuation {
\tcolor: #ccc;
}

.token.tag,
.token.attr-name,
.token.namespace,
.token.deleted {
\tcolor: #e2777a;
}

.token.function-name {
\tcolor: #6196cc;
}

.token.boolean,
.token.number,
.token.function {
\tcolor: #f08d49;
}

.token.property,
.token.class-name,
.token.constant,
.token.symbol {
\tcolor: #f8c555;
}

.token.selector,
.token.important,
.token.atrule,
.token.keyword,
.token.builtin {
\tcolor: #cc99cd;
}

.token.string,
.token.char,
.token.attr-value,
.token.regex,
.token.variable {
\tcolor: #7ec699;
}

.token.operator,
.token.entity,
.token.url {
\tcolor: #67cdcc;
}

.token.important,
.token.bold {
\tfont-weight: bold;
}
.token.italic {
\tfont-style: italic;
}

.token.entity {
\tcursor: help;
}

.token.inserted {
\tcolor: green;
}
`
