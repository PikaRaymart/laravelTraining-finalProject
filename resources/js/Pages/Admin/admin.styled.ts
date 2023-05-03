import { 
  breakpoint, 
  rem } from "@/Styled/functions";
import styled from "styled-components";


export const CreateBookLink = styled.div`
  inset: auto ${ rem(16) } ${ rem(24) } auto;
  position: fixed;

  a {
    background-color: ${ ({ theme }) => theme.colors.dark1 };
    border-radius: 50%;
    color: #FFFFFF;
    display: grid;
    height: ${ rem(56) };
    place-content: center;
    width: ${ rem(56) };
  }

  span {
    display: none;
  }

  ${ breakpoint("tablet", `
    margin-left: ${ rem(16) };
    position: static;

    a {
      border-radius: ${ rem(56) };
      height: auto;
      padding: ${ rem(12) } ${ rem(24) };
      width: auto;
    }

    img {
      display: none;
    }

    span {
      display: block;
    }
  `) }
`

export const RemoveFilterDesktop = styled.div`

  ${ breakpoint("desktop",`
    display: none;
  `) }
`

export const TopControls = styled.div`
  align-items: center;
  display: grid;
  gap: 0 ${ rem(8) };
  grid-template-columns: 1fr max-content;
  padding: ${ rem(20) } ${ rem(16) } 0 ${ rem(16) };

  ${ breakpoint("tablet", `
    grid-template-columns: 1fr max-content max-content;
    padding: ${ rem(16) } ${ rem(24) } 0 ${ rem(24) };
  `) }
`

export const ShowFiltersDesktop = styled.div`
  display: none;

  ${ breakpoint("desktop", `
    display: block;
  `) }
`

export const MainGridContainer = styled.div`
  max-width: ${ rem(1000) };
`

export const MainWrapper = styled.main`

  ${ breakpoint("desktop", `
    display: grid;
    grid-template-columns: ${ rem(300) } 1fr; 
  `) }
`