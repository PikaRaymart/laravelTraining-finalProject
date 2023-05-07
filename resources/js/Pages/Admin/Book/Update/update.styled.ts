import { 
  fluid, 
  rem } from "@/Styled/functions";
import styled from "styled-components";


export const MainWrapper = styled.main`
  background-color: #F9FAFC;
  min-height: 100vh;
  padding: ${ fluid(24, 6.4, 32) } ${ fluid(16, 6.4, 32) } ${ rem(64) };
`