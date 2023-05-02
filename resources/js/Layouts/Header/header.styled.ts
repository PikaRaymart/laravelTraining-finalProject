import { 
  breakpoint,
  fluid, 
  rem } from "@/Styled/functions";
import styled from "styled-components";


export const Signout = styled.li`
  font-size: ${ rem(16) };
  font-weight: 500;

  a {
    border-radius: ${ rem(56) };
    border: 1px solid #FF4747;
    color: #FF4747;
    display: block;
    padding: ${ rem(12) } ${ rem(24) };
  }
`

export const NavItem = styled.li`
  font-size: ${ rem(16) };
  font-weight: 500;

  &:not(:last-of-type) {
    margin-bottom: ${ rem(16) };
  }

  a {
    border-radius: ${ rem(56) };
    color: #404548;
    display: block;
    padding: ${ rem(12) } ${ rem(24) };
  }

  ${ breakpoint("tablet", `
    &:not(:last-of-type) {
      margin-bottom: 0;
    }
  `) }
`

export const Navlist = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;

  ${ breakpoint("tablet", `
    flex-direction: row;
  `) }
`

export const NavWrapper = styled.nav`
  background-color: #FFFFFF;
  inset: 0 0 auto auto;
  min-height: 100vh;
  opacity: 0;
  padding-top: ${ rem(64) };
  position: fixed;
  transition: 
    opacity .3s ease,
    transform .3s ease,
    visibility .3s ease;
  transform: translateX(100%);
  visibility: hidden;
  width: ${ rem(180) };

  ${ breakpoint("tablet", `
    all: revert;
  `) }
`

export const DropdownOverlay = styled.div`
  background-color: rgba(0, 0, 0, .8);
  inset: 0;
  opacity: 0;
  position: fixed;
  transition:
    opacity .3s ease,
    visibility .3s ease;
  visibility: hidden;
`

export const Hamburger = styled.button`
  height: ${ rem(24) };
  position: relative;
  width: ${ rem(24) };
  z-index: 10;

  img {
    transition: 
      visibility .3s ease,
      opacity .3s ease;
    
    &:nth-of-type(2) {
      inset: 0;
      opacity: 0;
      position: absolute;
      visibility: hidden;
    }
  }

  &[aria-expanded="true"] {

    img {

      &:first-of-type {
        opacity: 0;
        visiblity: hidden;
      }

      &:nth-of-type(2) {
        opacity: 1;
        visibility: visible;
      }
    }

    ~ ${ DropdownOverlay } {
      opacity: 1;
      visibility: visible;
    }

    ~${ NavWrapper } {
      opacity: 1;
      transform: translateX(0);
      visibility: visible;
    }
  }

  ${ breakpoint("tablet", `
    display: none;
  `) }
`

export const Wrapper = styled.header`
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  display: flex;
  height: ${ fluid(60, 9.6, 96) };
  justify-content: space-between;
  padding: 0 ${ fluid(16, 8, 80) } 0 ${ fluid(16, 8, 80) };
`

