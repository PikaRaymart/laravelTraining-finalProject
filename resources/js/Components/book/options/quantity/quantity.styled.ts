import styled, { css } from "styled-components"
import { breakpoint, rem } from "@/Styled/functions"


export const QuantityButton = styled.button`
  display: grid;
  height: ${ rem(46) };
  place-content: center;
  width: ${ rem(40) };

  &[aria-disabled="true"] {
    cursor: not-allowed;
  }
`

type QuantityWrapperProps = {
  isSmall?: boolean
}

export const QuantityWrapper = styled.div<QuantityWrapperProps>`
  align-items: center;
  background-color: rgba(59, 86, 255, .08);
  color: ${ ({ theme }) => theme.colors.dark1 };
  display: flex;
  font-size: ${ rem(18) };
  font-weight: 500;
  gap: 0 ${ rem(4) };
  height: ${ rem(46) };
  max-width: max-content;
  margin-right: auto;

  ${ ({ isSmall }) => isSmall && css`
    height: ${ rem(40) };
    
    ${ QuantityButton } {
      height: ${ rem(40) };
      width: ${ rem(40) };
    }
  ` }

  ${ breakpoint("desktop", `
    margin-right: ${ rem(48) };
  `) }
`