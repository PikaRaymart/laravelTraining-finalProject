import { 
  breakpoint,
  fluid, 
  rem } from "@/Styled/functions";
import styled, { css } from "styled-components";


export const NavItem = styled.li`
  font-weight: 500;

  a {
    border-radius: ${ rem(56) };
    color: ${ ({ theme }) => theme.colors.navlink };
    display: block;
    padding: ${ rem(12) } ${ rem(24) };
  }

  ${ breakpoint("tablet", `
    margin-bottom: 0;
  `) }
`

export const Signout = styled(NavItem)`

  a {
    border: 1px solid ${ ({ theme }) => theme.colors.red };
    color: ${ ({ theme }) => theme.colors.red };
  }
`

export const Navlist = styled.ul`
  align-items: center;
  display: flex;
  font-size: ${ rem(16) };
  font-weight: 500;
  flex-direction: column;

  ${ breakpoint("tablet", `
    flex-direction: row;
  `) }
`

const NavTransition = css`
  transition: 
    opacity .3s ease,
    transform .3s ease,
    visibility .3s ease;
`

const NavTransitionAppear = css`
  opacity: 1;
  visibility: visible;
`

const NavTransitionHide = css`
  opacity: 0;
  visibility: hidden;
`

export const NavWrapper = styled.nav`
  ${ NavTransition  };
  ${ NavTransitionHide };
  background-color: #FFFFFF;
  inset: 0 0 auto auto;
  min-height: 100vh;
  padding-top: ${ rem(64) };
  position: fixed;
  transform: translateX(100%);
  width: ${ rem(180) };
  z-index: 8;

  ${ breakpoint("tablet", `
    all: revert;
  `) }
`

export const DropdownOverlay = styled.div`
  ${ NavTransition  };
  ${ NavTransitionHide };
  background-color: rgba(0, 0, 0, .8);
  inset: 0;
  position: fixed;
`

export const Hamburger = styled.button`
  height: ${ rem(24) };
  position: relative;
  width: ${ rem(24) };
  z-index: 10;

  img {
    ${ NavTransition  };
    
    &:nth-of-type(2) {
      ${ NavTransitionHide };
      inset: 0;
      position: absolute;
    }
  }

  &[aria-expanded="true"] {

    img {

      &:first-of-type {
        ${ NavTransitionHide };
      }

      &:nth-of-type(2) {
        ${ NavTransitionAppear };
      }
    }

    ~ ${ DropdownOverlay } {
      ${ NavTransitionAppear };
    }

    ~${ NavWrapper } {
      ${ NavTransitionAppear };
      transform: translateX(0);
    }
  }

  ${ breakpoint("tablet", `
    display: none;
  `) }
`

export const Wrapper = styled.header`
  align-items: center;
  background-color: #FFFFFF;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  display: flex;
  height: ${ fluid(60, 10.25, 96) };
  justify-content: space-between;
  padding: 0 ${ fluid(16, 8, 80) } 0 ${ fluid(16, 8, 80) };
  position: relative;
  z-index: 10;
`