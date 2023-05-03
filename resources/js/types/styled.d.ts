import "styled-components";


declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      red: string,
      navlink: string,
    },
    breakpoints: {
      tablet: number,
      desktop: number
    }
  }
}