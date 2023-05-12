import { 
  fluid, 
  rem } from "@/Styled/functions";
import styled from "styled-components";


export const Option = styled.button`
  border-radius: ${ rem(32) };
  color: #FFFFFF;
  font-size: ${ fluid(14, 1.6, 16) };
  font-weight: 600;
  padding: ${ fluid(10, 1.2, 12) } ${ fluid(20, 2.4, 24) };

  &[aria-disabled="true"] {
    cursor: not-allowed;
  }
`

export const BuyButton = styled(Option)`
  background-color: ${ ({ theme }) => theme.colors.red };
`

export const CartButton = styled(Option)`
  background-color: ${ ({ theme }) => theme.colors.dark1 };
  margin-right: ${ rem(4) };
`

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
`