import { 
  rem,
  fluid } from "@/Styled/functions";
import styled from "styled-components";


export const Wrapper = styled.div`
  background-color: #FFFFFF;
  border-radius: ${ rem(8) };
  border: 1px solid ${ ({ theme }) => theme.colors.grey3 };
  max-width: ${ rem(1040) };
  margin: 0 auto;
  padding: ${ fluid(24, 4, 40) } ${ fluid(16, 4.8, 24) } ${ rem(64) } ${ fluid(16, 4.8, 24) };
`

export const MainWrapper = styled.main`
  background-color: #F9FAFC;
  min-height: 100vh;
  padding: ${ fluid(24, 6.4, 32) } ${ fluid(16, 6.4, 32) } ${ rem(64) };
`