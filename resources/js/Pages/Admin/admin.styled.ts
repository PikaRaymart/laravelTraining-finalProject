import { 
  breakpoint, 
  rem } from "@/Styled/functions";
import styled from "styled-components";


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