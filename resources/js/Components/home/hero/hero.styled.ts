import { 
  fluid, 
  rem } from "@/Styled/functions";
import styled from "styled-components";


export const HeroDescription = styled.p`
  color: ${ ({ theme }) => theme.colors.dark3 };
  font-size: ${ fluid(14, 1.8, 18) };
  line-height: 1.7;
`

export const HeroMainHeading = styled.h1`
  color: ${ ({ theme }) => theme.colors.dark2 };
  font-size: ${ fluid(24, 5.6, 56) };
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: ${ fluid(16, 2.4, 24) };

  span {
    color: ${ ({ theme }) => theme.colors.red };
  }
`

export const InnerWrapper = styled.div`
  max-width: ${ fluid(592, 80, 800) };
  margin: 0 auto;
  text-align: center;
`

export const Wrapper = styled.div`
  background: url("/images/home-hero-bg.png") no-repeat center center/100% 100%;
  min-height: ${ fluid(464, 67, 672) };
  padding: ${ fluid(48, 12, 128) } ${ rem(16) };
`