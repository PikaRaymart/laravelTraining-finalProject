import { rem } from "@/Styled/functions";
import styled, { css } from "styled-components";


type LinkItemProps = {
  isActive?: boolean
}

export const LinkItem = styled.li<LinkItemProps>`
  border-radius: 50%;
  border: 1px solid ${ ({ theme }) => theme.colors.grey3 };
  display: grid;
  font-size: ${ rem(14) };
  font-weight: 500;
  height: ${ rem(40) };
  margin-right: ${ rem(4) };
  place-content: center;
  width: ${ rem(40) };

  ${ ({ isActive }) => isActive && css`
    background-color: ${ ({ theme }) => theme.colors.red };
    border: none;
    color: #FFFFFF;
  ` }

  a {
    display: grid;
    height: ${ rem(40) };
    place-content: center;
    width: ${ rem(40) };
  }
`

export const LinksList = styled.ul`
  align-items: center;
  display: flex;
`

export const Wrapper = styled.nav`
  margin: ${ rem(24) } auto ${ rem(16) } auto;
  max-width: max-content;
`