import { 
  breakpoint,
  fluid, 
  rem } from "@/Styled/functions";
import styled, { css } from "styled-components";


export const EmptyCartImage = styled.img`
  margin: 0 auto;
  max-width: ${ fluid(120, 18, 180) };
`

export const EmptyCartContainer = styled.div`

` 

const FormOption = css`
  border-radius: ${ rem(32) };
  color: #FFFFFF;
  font-weight: 500;
  font-size: ${ fluid(14, 1.6, 16) };
  padding: ${ fluid(10, 1.2, 12) } ${ fluid(20, 2.4, 24) };

  &[aria-disabled="true"] {
    cursor: not-allowed;
  }
`

export const CheckoutOption = styled.div`

  a {
    ${ FormOption };
    background-color: ${ ({ theme }) => theme.colors.red };
    display: block;
  }
`

export const UpdateOption = styled.button`
  ${ FormOption };
  background-color: ${ ({ theme }) => theme.colors.dark1 };
  margin-right: ${ rem(4) };
`

export const CartOptions = styled.div`
  display: flex;
`

export const TotalCartPrice = styled.h2`
  color: ${ ({ theme }) => theme.colors.dark1 };
  font-weight: 700;
  font-size: ${ fluid(20, 2.4, 24) };
  margin-bottom: ${ rem(16) };

  span {
    font-size: ${ rem(15) };
    font-weight: 600;
    margin-right: ${ rem(4) };
  }
`

export const CartBottomRow = styled.form`
  border-top: 1px solid ${ ({ theme }) => theme.colors.grey3 };
  margin-top: ${ rem(64) };
  padding-top: ${ rem(24) };
`

export const InnerWrapper = styled.div`
  max-width: ${ rem(800) };
  margin: 0 auto;
`

export const MainWrapper = styled.main`
  margin-bottom: ${ rem(64) };
  padding: ${ rem(32) } 0 0 ${ fluid(16, 2.4, 24) };

  ${ breakpoint("desktop", `
    padding: ${ rem(64) } ${ fluid(16, 2.4, 24) };
  `) }
`