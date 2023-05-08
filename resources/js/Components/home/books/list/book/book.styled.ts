import { 
  customBreakpoint,
  fluid, 
  rem } from "@/Styled/functions";
import styled from "styled-components";


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

export const Image = styled.img`
  box-shadow: 4px 4px 10px rgba(0, 0, 0, .15);
  min-height: ${ fluid(160, 24, 240) };
  max-width: ${ fluid(120, 16, 164) };
  margin: 0 auto ${ rem(16) };
`

export const Wrapper = styled.li`
  background-color: rgba(0, 0, 255, .03);
  padding: ${ rem(24) } ${ fluid(12, 2.4, 24) } ${ rem(16) };
  text-align: center;

  ${ customBreakpoint(376, `
    text-align: left;
  `) }
`