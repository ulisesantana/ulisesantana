export const lightPrismTheme = `
/**
 * prism.js default theme for JavaScript, CSS and HTML
 * Based on dabblet (http://dabblet.com)
 * @author Lea Verou
 */

code[class*="language-"],
pre[class*="language-"] {
\tcolor: black;
\tbackground: none;
\ttext-shadow: 0 1px white;
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

pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
\ttext-shadow: none;
\tbackground: #b3d4fc;
}

pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
code[class*="language-"]::selection, code[class*="language-"] ::selection {
\ttext-shadow: none;
\tbackground: #b3d4fc;
}

@media print {
\tcode[class*="language-"],
\tpre[class*="language-"] {
\t\ttext-shadow: none;
\t}
}

/* Code blocks */
pre[class*="language-"] {
\tpadding: 1em;
\tmargin: .5em 0;
\toverflow: auto;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
\tbackground: #eae5e1;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
\tpadding: .1em;
\tborder-radius: .3em;
\twhite-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
\tcolor: slategray;
}

.token.punctuation {
\tcolor: #999;
}

.token.namespace {
\topacity: .7;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.deleted {
\tcolor: #905;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
\tcolor: #690;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
\tcolor: #9a6e3a;
\tbackground: #eae5e1;
}

.token.atrule,
.token.attr-value,
.token.keyword {
\tcolor: #07a;
}

.token.function,
.token.class-name {
\tcolor: #DD4A68;
}

.token.regex,
.token.important,
.token.variable {
\tcolor: #ea4c00;
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
`
