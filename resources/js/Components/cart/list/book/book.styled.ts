import { 
  Title as SharedTitle,
  Author as SharedAuthor } from "@/Components/shared/book/book.styled";
import { rem } from "@/Styled/functions";
import styled from "styled-components";


export const RemoveLabel = styled.label`
  display: grid;
  height: inherit;
  place-content: center;
  position: absolute;
  transition: 
    opacity .3s ease,
    visibility .3s ease;
  width: inherit;

  &:first-of-type {
    background-color: #FFFFFF;
    border: 1px solid ${ ({ theme }) => theme.colors.red };
  }

  &:last-of-type {
    background-color: ${ ({ theme }) => theme.colors.dark2 };
  }

  svg {
    transition: transform .3s ease;
  }
`

export const RemoveBook = styled.div`
  height: ${ rem(40) };
  margin-left: ${ rem(24) };
  position: relative;
  width: ${ rem(40) };

  &:focus-within {
    outline: 2px dashed rgb(0, 36, 58);
    outline-offset: 1px;
  }

  input {

    &:checked {

      +${ RemoveLabel } {
        opacity: 0;
        visibility: hidden;

        svg {
          transform: translateX(100%) rotate(45deg);
        }
      }
    }
  }
`

export const OptionsContainer = styled.div`
  align-items: center;
  display: flex;
  margin-top: ${ rem(8) };
`

export const Author = styled(SharedAuthor)`
  color: ${ ({ theme }) => theme.colors.dark2 };
  font-size: ${ rem(14) };
  margin-bottom: ${ rem(16) };
`

export const Title = styled(SharedTitle)`
  color: ${ ({ theme }) => theme.colors.dark2 };
  font-size: ${ rem(14) };
  font-weight: 700;
  line-height: 1.5;
  margin: ${ rem(4) } 0 0 0;
  max-width: ${ rem(220) };
`

export const Image = styled.img`
  box-shadow: 4px 4px 10px rgba(0, 0, 0, .08);
  height: ${ rem(140) };
  margin-right: ${ rem(16) };
  width: ${ rem(96) };
`

export const Wrapper = styled.li`
  display: flex;
  padding: 0 ${ rem(16) } ${ rem(24) } 0;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${ ({ theme }) => theme.colors.grey3 };
  }

  &:not(:first-of-type) {
    padding-top: ${ rem(24) };
  }
`