import { 
  breakpoint, 
  rem } from "@/Styled/functions";
import styled from "styled-components";


export const Image = styled.img`
  box-shadow: 4px 4px 10px rgba(0, 0, 0, .15);
  min-height: ${ rem(252) };
  margin: 0 auto ${ rem(16) };

  ${ breakpoint("desktop", `
    transition: transform .3s ease;
  `) }
`

export const Wrapper = styled.li`

  ${ breakpoint("tablet", `
    
    &:hover ${ Image } {
      transform: translateY(-5px);
    }
  `) }
`