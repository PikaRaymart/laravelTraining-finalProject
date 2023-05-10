import styled from "styled-components"
import { rem } from "@/Styled/functions"


export const Label = styled.label`
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

export const Wrapper = styled.fieldset`
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

      +${ Label } {
        opacity: 0;
        visibility: hidden;

        svg {
          transform: translateX(100%) rotate(45deg);
        }
      }
    }
  }
`