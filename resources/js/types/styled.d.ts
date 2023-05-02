import "styled-components";


declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      navlink: string
    },
    breakpoints: {
      tablet: number,
      desktop: number
    }
  }
}