import { 
  fluid, 
  rem } from "@/Styled/functions"
import styled from "styled-components"


export const Price = styled.p`
  color: ${ ({ theme }) => theme.colors.dark1 };
  font-weight: 700;
`

export const Author = styled.p`
  color: ${ ({ theme }) => theme.colors.dark3 };
  font-size: ${ rem(14) };
  margin-bottom: ${ rem(4) };
`

export const Title = styled.h3`
  color: ${ ({ theme }) => theme.colors.dark2 };
  line-height: 1.4;
  font-weight: 600;
  font-size: ${ fluid(14, 3.2, 16) };
  margin-bottom: ${ rem(16) };
`