// post header desktop font-size 48px
// post body desktop font-size 21px
// post header mobile font-size 34px
// post body mobile font-size 18px

// thumbnail header font-size 21px
// thumbnail description font-size 18px

import {createGlobalStyle, DefaultTheme, InterpolationFunction, ThemedStyledProps} from "styled-components";

export interface Theme extends DefaultTheme {
  isDark?: boolean
  breakpoints: Record<string, number>
  space: Record<string, number>
  fontSizes: Record<string, number>
  fontWeights: Record<string, number>
  fontFamily: Record<string, string>
  lineHeights: {
    normal: number
    normalText: number
    title: number
    text: number
  },
  letterSpacings: {
    normal: string
    tracked: string
    tight: string
    mega: string
  },
  borders: Record<string, string>
  radius: Record<string, string|number>,
  widths: Record<string, number>
  heights: Record<string, number>
  maxWidths: Record<string, number>
  transparent: string
  black: string
  white: string
  textColor: string
  lightColor: string
  lightTextColor: string
  inactiveField: string
  inactiveColor: string
  inactiveBG: string
  borderColor: string
  backgroundColor: string
  lightBorderColor: string
  primary: string
  primaryHover: string
  secondary: string
}

const fromArrayToObject = <T>(array: Array<T>): Record<string, T> => Object.fromEntries(Object.entries(array))

// const fromArrayToObject = (array: Array<string|number>) => array.reduce((acc, value, index) => ({
//   ...acc,
//   [index]: value
// }), {})

const baseTheme = {
  breakpoints: fromArrayToObject([576, 768, 991, 1220]),
  space: fromArrayToObject([0, 5, 8, 10, 15, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 100, 120]),
  fontSizes: fromArrayToObject([14, 16, 18, 21, 34, 41, 48, 80, 96]),
  fontWeights: fromArrayToObject([100, 200, 300, 400, 500, 600, 700, 800, 900]),
  fontFamily: fromArrayToObject(["'Fira Sans',sans-serif", "'Poppins', sans-serif"]),
  lineHeights: {
    normal: 1,
    normalText: 1.5,
    title: 2,
    text: 2,
  },
  letterSpacings: {
    normal: "normal",
    tracked: "0.1em",
    tight: "-0.05em",
    mega: "0.25em",
  },
  borders: fromArrayToObject(["0", "1px solid", "2px solid", "3px solid", "4px solid", "5px solid", "6px solid"]),
  radius: fromArrayToObject([3, 4, 5, 10, 20, 30, 60, 120, "50%"]),
  widths: fromArrayToObject([36, 40, 45, 48, 54, 70, 81, 128, 256]),
  heights: fromArrayToObject([36, 40, 44, 48, 50, 55, 70, 80, 120, 230]),
  maxWidths: fromArrayToObject([16, 32, 64, 128, 256, 512, 768, 1024, 1536]),
  transparent: "transparent",
  black: "#323330",
  white: "#F7F7F7"
}

export const lightTheme: Theme = {
  ...baseTheme,
  backgroundColor: baseTheme.white,
  textColor: "#292929",
  lightColor: "#acacac",
  lightTextColor: "#aaaaaa",
  inactiveField: "#F7F7F7",
  inactiveColor: "#767676",
  inactiveBG: "#e6e6e6",
  borderColor: "#DBDBDB",
  lightBorderColor: "#ededed",
  primary: "#F0DB4F",
  primaryHover: "#ba7e06",
  secondary: "#007acc",
}

export const darkTheme: Theme = {
  ...baseTheme,
  backgroundColor: baseTheme.black,
  textColor: baseTheme.white,
  lightColor: "#676767",
  lightTextColor: "#aaaaaa",
  inactiveField: "#F7F7F7",
  inactiveColor: "#767676",
  inactiveBG: "#e6e6e6",
  borderColor: "#DBDBDB",
  lightBorderColor: "#ededed",
  primary: "#F0DB4F",
  primaryHover: "#ba7e06",
  secondary: "#007acc",
}

function accessRecursive (value: unknown, accessor: string): string {
 if (typeof value === 'object' && value !== null) {
   if (accessor.includes('.')) {
     const [nextLevel, ...rest] = accessor.split('.')
     return accessRecursive(value[nextLevel as keyof object], rest.join(''))
   }
   return value[accessor as keyof object] as string
 }
 return ''
}

type ThemeGetter = (accessor: string) => InterpolationFunction<ThemedStyledProps<{ theme: Theme }, DefaultTheme>>
// @ts-ignore
export const themeGet: ThemeGetter = (accessor) => (props: {theme: Theme}) => accessRecursive(props.theme, accessor)

export const GlobalStyle = createGlobalStyle<{
  theme: Theme
  didAppLoad: boolean
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
