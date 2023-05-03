import "styled-components";


declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      red: string,
      navlink: string,
      dark1: string,
      dark2: string,
      dark3: string,
      dark4: string,
      blue: string,
      grey1: string,
      grey2: string,
      grey3: string
    },
    breakpoints: {
      tablet: number,
      desktop: number
    }
  }
}