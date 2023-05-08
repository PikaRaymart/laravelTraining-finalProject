import { 
  breakpoint,
  fluid, 
  rem } from "@/Styled/functions";
import styled from "styled-components";


export const SectionHeading = styled.h2`
  color: ${ ({ theme }) => theme.colors.dark2 };
  font-weight: 700;
  font-size: ${ fluid(20, 3.2, 32) };
  margin-bottom: ${ rem(32) };
`

export const Wrapper = styled.div`
  margin: ${ fluid(64, 9.6, 96) } 0 ${ rem(128) };
  padding: 0 ${ fluid(16, 2.4, 24) };

  ${ breakpoint("desktop", `
    padding: 0 ${ rem(80) };
  `) }
`