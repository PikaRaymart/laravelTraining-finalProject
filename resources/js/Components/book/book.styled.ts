import { 
  breakpoint,
  fluid, 
  rem } from "@/Styled/functions";
import styled from "styled-components";


export const Description = styled.p`
  color: ${ ({ theme }) => theme.colors.dark1 };
  font-size: ${ fluid(14, 3, 15) };
  line-height: 1.7;
`

export const DescriptionWrapper = styled.div`
  margin-bottom: ${ rem(32) };

  h2 {
    color: ${ ({ theme }) => theme.colors.dark2 };
    font-size: ${ rem(14) };
    font-weight: 600;
    margin-bottom: ${ rem(4) };
  }
`

export const Price = styled.p`
  font-size: ${ fluid(20, 2.4, 24) };
  font-weight: 600;
`

export const BasicInfo = styled.p`
  font-size: ${ rem(15) };

  span {
    color: ${ ({ theme }) => theme.colors.dark2 };
    font-size: ${ rem(14) };
    font-weight: 600;
  }
`

export const Stocks = styled(BasicInfo)`
  color: ${ ({ theme }) => theme.colors.blue };
  margin-bottom: ${ rem(32) };
`

export const Author = styled(BasicInfo)`
  margin-bottom: ${ rem(16) };
`

export const Title = styled.h1`
  font-size: ${ fluid(24, 2.8, 28) };
  font-weight: 700;
  line-height: 1.4;
`

export const Image = styled.img`
  max-width: ${ fluid(212, 50, 320) };
`

export const ContentContainer = styled.div`
  color: ${ ({ theme }) => theme.colors.dark1 };

  ${ breakpoint("desktop", `
    flex-basis: 100%;
  `) }
`

export const ImageWrapper = styled.div`
  background-color: rgba(62, 62, 62, .08);
  display: grid;
  min-height: ${ fluid(380, 75, 570) };
  max-width: ${ rem(544) };
  margin-bottom: ${ rem(24) };
  place-content: center;

  ${ breakpoint("desktop", `
    flex-basis: 100%;
    margin: 0 ${ rem(24) } 0 0;
  `) }
`

export const BookWrapper = styled.div`
  
  ${ breakpoint('desktop', `
    align-items: flex-start;
    display: flex;
  `) }
`

export const MainWrapper = styled.main`
  padding: ${ fluid(48, 6.4, 64) } ${ fluid(24, 6, 80) };
`