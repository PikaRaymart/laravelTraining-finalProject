import { 
  breakpoint,
  fluid, 
  rem } from "@/Styled/functions";
import styled from "styled-components";


export const ClearSearchbar = styled.button`
  display: block;
  inset: 50% ${ rem(16) } auto auto;
  position: absolute;
  transform: translateY(-50%) scale(.8);

  ${ breakpoint("desktop", `
    transform: translateY(-50%) scale(1);
  `) }
`

export const SearchInput = styled.input`
  border-radius: ${ rem(56) };
  border: 1px solid #E9E9E9;
  font-size: ${ fluid(14, 3.2, 16) };
  padding: ${ fluid(10, 2.4, 12) } 0 ${ fluid(10, 2.4, 12) } ${ fluid(20, 6.4, 32) };
  width: 100%;
`

export const Wrapper = styled.form`
  position: relative;
  width: 100%;
`