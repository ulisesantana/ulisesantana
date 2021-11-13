import {createGlobalStyle} from "styled-components";
import {resetCSS} from "./resetCSS";
import {lightPrismTheme} from "./prism.light";
import {darkPrismTheme} from "./prism.dark";

export const GlobalStyle = createGlobalStyle`
${resetCSS}
:root {
  color-scheme: light dark;
  --black: #323330;
  --font-family-1: 'Fira Sans',sans-serif;
  --font-family-2: 'Poppins', sans-serif;
  --font-size-0: 14px;
  --font-size-1: 16px;
  --font-size-2: 18px;
  --font-size-3: 21px;
  --font-size-4: 34px;
  --font-size-5: 41px;
  --font-size-6: 48px;
  --line-height-normal: 1;
  --line-height-normal-text: 1.5;
  --line-height-title: 2;
  --primary-color: #F7E018;
  --secondary-color: #2D79C7;
}

.theme-light {
  // light theme
  --bg-color: #F7F7F7;
  --highlight-color: #323330;
  --icon-color: var(--text-color);
  --inactive-field-color: #F7F7F7;
  --light-color: #cccccc;
  --light-border-color: #9a9a9a;
  --link-color: #292929;
  --link-visited-color: var(--secondary-color);
  --tag-color: var(--secondary-color);
  --text-color: #292929;
  ${lightPrismTheme}
}

.theme-dark {
  // dark theme
  --bg-color: #323330;
  --highlight-color: #F7F7F7;
  --icon-color: var(--primary-color);
  --inactive-field-color: #545454;
  --light-color: #676767;
  --light-border-color: #a7a7a7;
  --link-color: #F7E018;
  --link-visited-color: var(--secondary-color);
  --tag-color: var(--primary-color);
  --text-color: #F7F7F7;
  ${darkPrismTheme}
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
  font-family: var(--font-family-1);
  margin: 0;
  padding: 16px;
  font-size: 1rem;
  overflow-x: hidden;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  width: 100% !important;
}

p{
  color: inherit;
  text-align: justify;
  line-height: 2;
  margin: 2rem auto;
}

input, textarea, select, button{var(--font-family-1)}

a {
  color: inherit;
  text-decoration: none;
  box-shadow: none;
  
  &:visited {
    color: var(--link-visited-color);
  }

  svg {
    color: var(--icon-color);
  }
}

blockquote {
  font-family: var(--font-family-2);
  font-weight: 500;
}

pre[class*="language-"] {
  padding: 1.5rem;
  margin: 2rem 0;
  overflow: auto;
}

table {
  display: block;
  overflow: auto;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  margin-bottom: 2rem;
  line-height: 1.6;
}

table tr {
  background-color: var(--bg-color);
  border-top: 1px solid #c6cbd1;
}

table tr:nth-child(2n) {
  background-color: var(--inactive-field-color);
}

table th{
  font-weight: 500;
}

table td,
  table th {
  border: 1px solid #dfe2e5;
  padding: .4rem 1rem;
}

p, span, figcaption, article li {
  a {
    border-bottom: solid 4px var(--primary-color);
    color: var(--text-color);
    font-weight: 700;
    transition: all ease-in-out 0.3s;
  }
}

blockquote {
  background-color: var(--primary-color);
  color: var(--black);
  a:hover{
    background-color: var(--secondary-color);
  }
}

a.anchor.before {
  border-bottom: none;
  svg {
    color: var(--text-color);
    fill: var(--text-color);
    margin-bottom: 2px;
    margin-right: 8px;
  }
}

.table-of-contents  {
  a {
    border: none
  }
  ol,ul {
    margin-bottom: 0;
    margin-top: 0;
  }
  li, p {
    padding: 0 !important;
    margin: 0 !important;
  }
}

.only-print {
  display: none;
}

@media print {
  body {
    display: block;
    padding: 0;
    margin: 0;
  }

  .page-break-after {
      page-break-after: always;
    }
  
  .only-print {
      display: block !important;
    }
  
  .no-print{
      display: none !important;
    }
}
`
