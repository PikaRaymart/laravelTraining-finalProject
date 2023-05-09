import { 
  breakpoint, 
  fluid, 
  rem } from "@/Styled/functions";
import styled from "styled-components";


export const Wrapper = styled.ul`
  display: grid;
  gap: ${ rem(24) } ${ rem(16) };
  grid-template-columns: repeat(auto-fill, minmax(${ rem(160) }, 1fr));
  margin-top: ${ rem(32) };
  padding: 0 ${ fluid(16, 2.4, 24) };

  ${ breakpoint("tablet", `
    grid-template-columns: repeat(4, 1fr);
  `) }

  ${ breakpoint("desktop", `
    grid-template-columns: repeat(5, 1fr);
    margin-top: ${ rem(24) };
  `) }
`