import { 
  breakpoint,
  fluid, 
  rem } from "@/Styled/functions";
import styled from "styled-components";


export const CTAWrapper = styled.div`
  margin-top: ${ rem(16) };

  a {
    border: 2px solid #FFFFFF;
    border-radius: ${ rem(48) };
    color: #FFFFFF;
    display: inline-block;
    padding: ${ fluid(16, 2.4, 24) } ${ fluid(24, 4.8, 48) };
  }

  ${ breakpoint("tablet", `
    margin:0 0 0 ${ rem(80) };  
  `) }
`

export const SocialMediaItem = styled.li`
  margin-right: ${ rem(8) };
`

export const SocialMedias = styled.ul`
  display: flex;
`

export const SectionHeading = styled.h3`
  color: #FFFFFF;
  font-weight: 500;
  margin-bottom: ${ rem(8) };
`

export const FooterDescription = styled.p`
  color: ${ ({ theme }) => theme.colors.grey2 };
  font-size: ${ rem(15) };
  line-height: 1.6;
  margin-top: ${ rem(16) };
`

export const Logo = styled.svg`
  width: ${ fluid(152, 19.2, 192) };
`

export const InnerBlock = styled.div`
  
  &:first-of-type {
    margin-bottom: ${ rem(48) };
    max-width: ${ rem(512) };

    ${ breakpoint("desktop", `
      margin-bottom: 0;
    `) }
  }

  &:nth-of-type(2) {

    ${ breakpoint("tablet", `
      align-items: center;
      display: flex;
    `) }
  }
`

export const Wrapper = styled.footer`
  background-color: ${ ({ theme }) => theme.colors.dark2 };
  padding: ${ rem(64) } ${ fluid(16, 4.8, 24) } ${ rem(96) };

  ${ breakpoint("desktop", `
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: ${ rem(64) } ${ rem(80) };
  `) }
`