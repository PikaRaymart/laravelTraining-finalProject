import styled from "styled-components"
import { 
  Title as SharedTitle,
  Author as SharedAuthor } from "@/Components/shared/book/book.styled";
import { 
  fluid, 
  rem } from "@/Styled/functions";


export const OutOfStocks = styled.p`
  color: ${ ({ theme }) => theme.colors.red };
  font-size: ${ fluid(12, 1., 14) };
  font-weight: 600;
  margin-top: ${ rem(4) };
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