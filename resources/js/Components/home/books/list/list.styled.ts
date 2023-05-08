import { 
  breakpoint,
  fluid, 
  rem } from "@/Styled/functions";
import styled from "styled-components";

export const Wrapper = styled.ul`
  display: grid;
  flex-wrap: wrap;
  gap: ${ fluid(16, 2.4, 24) } ${ rem(16) };
  grid-template-columns: repeat(auto-fit, minmax(${ rem(155) }, 1fr));

  ${ breakpoint("tablet",`
    grid-template-columns: repeat(3, 1fr);
  `) }

${ breakpoint("desktop",`
    grid-template-columns: repeat(4, 1fr);
  `) }
`