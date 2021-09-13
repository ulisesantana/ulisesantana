import {createGlobalStyle} from "styled-components";
import {Theme, themeGet} from "./theme";

export const GlobalStyle = createGlobalStyle<{
  theme: Theme
}>`
html {
  box-sizing: border-box;
  font-size: 18px;
  line-height: 1.15;
  margin: 0;
  padding: 0;
  -webkit-text-size-adjust: 100%;
  -ms-overflow-style: scrollbar;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
  html a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  li,
  dl,
  th,
  dt,
  input,
  textarea,
  span,
  div {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

h1,
  h2,
  h3,
  h4,
  h5,
  h6{
  margin-top: 0;
  font-family: 'Poppins',sans-serif;
}

body {
  background-color: ${themeGet("backgroundColor")};
  color: ${themeGet("textColor")};
  font-family: 'Fira Sans',sans-serif;
  margin: 0;
  padding: 16px;
  font-size: 1rem;
  overflow-x: hidden;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
}

p{
  text-align: justify;
  line-height: 2;
  margin: 2rem auto;
}

input, textarea, select, button{font-family: 'Fira Sans',sans-serif;}

ul,ol {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  box-shadow: none;

  &:hover {
    text-decoration: none;
  }
  
  &:visited {
    color: ${props => props.theme.isDark ? themeGet( "secondary") : 'purple'};
  }
}

blockquote{
  font-family: 'Poppins',sans-serif;
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
  background-color: ${themeGet('backgroundColor')};
  border-top: 1px solid #c6cbd1;
}

table tr:nth-child(2n) {
  background-color: ${themeGet('inactiveField')};
}

table th{
  font-weight: 500;
}

table td,
  table th {
  border: 1px solid #dfe2e5;
  padding: .4rem 1rem;
}

.nav-sticky{
.header {
    box-shadow: 0 0 15px rgba(0,0,0,.08);
  .navbar{
    @media (min-width: 1400px) {
        padding-top: 25px;
        padding-bottom: 25px;
      }
    @media (min-width: 1200px) {
        padding-top: 20px;
        padding-bottom: 20px;
      }
    }
  }

}

body {
  width: 100% !important;
  overflow-x: hidden;
}

p, span, figcaption, article li {
  a {
    border-bottom: solid 4px ${themeGet("primary")};
    color: ${themeGet("textColor")}
      font-weight: 700;
    transition: all ease-in-out 0.3s;
  }
}


blockquote {
  background-color: ${themeGet("primary")};
  color: ${themeGet("black")};
  a:hover{
    background-color: ${themeGet("secondary")};
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

//@media (prefers-color-scheme: dark) {
//  body {
//      filter: invert();
//    background-color: deeppink;
//  }
//} 
`
