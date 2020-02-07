import { createGlobalStyle } from "styled-components"
import { themeGet } from "styled-system"

const ResetCSS = createGlobalStyle`
  html {
    font-size: 15px;
    box-sizing: border-box;
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
  }

  a:hover {
    text-decoration: none;
  }

  blockquote{
    font-family: 'Poppins',sans-serif;
    font-weight: 500;
  }

  :not(pre) > code[class*="language-"], pre[class*="language-"] {
    background: #f5f5f5;
  }

  pre[class*="language-"] {
    padding: 1.5em;
    margin: 2em 0;
    overflow: auto;
  }

  table {
    display: block;
    overflow: auto;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    margin-bottom: 2em;
    line-height: 1.6;
  }

  table tr {
    background-color: #fff;
    border-top: 1px solid #c6cbd1;
  }

  table tr:nth-child(2n) {
    background-color: #f6f8fa;
  }

  table th{
    font-weight: 500;
  }

  table td,
  table th {
    border: 1px solid #dfe2e5;
    padding: .4em 1em;
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
    width: 100vw !important;
    overflow-x: hidden;
    transition: 0.3s;
  }
  
  a {
    color: ${themeGet("colors.black", "black")}
    font-weight: 700;
    text-shadow: 1px 0 1px ${themeGet("colors.lightTextColor", "black")};
    transition: all ease-in-out 0.3s;
    
    &:visited {
      color: ${themeGet("colors.secondary", "blue")};
      text-shadow: none;
    }
  }
  
  blockquote {
    a:hover{
      background-color: ${themeGet("colors.secondary", "blue")};
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

  /* @media (prefers-color-scheme: dark) {
    body {
        filter: invert();
    }
  } */
`

export default ResetCSS
