import { 
  breakpoint, 
  fluid, 
  rem } from "@/Styled/functions";
import styled from "styled-components";
import { 
  FormControls, 
  FormOption } from "../../book/form/form.styled";


export const DeleteButton = styled(FormOption)`
  background-color: #FFFFFF;
  color: ${ ({ theme }) => theme.colors.dark1 };
`

export const DeleteContainer = styled(FormControls)`
`

type StatusProps = {
  isActive: string
}

export const Status = styled.p<StatusProps>`
  background-color: ${ ({ isActive }) => "#A7E8D0" };
  border-radius: ${ rem(32) };
  color: ${ ({ theme }) => theme.colors.dark1 };
  font-size: ${ rem(13) };
  font-weight: 500;
  max-width: max-content;
  padding: ${ rem(6) } ${ rem(10) };
`

export const Stocks = styled.p`
  color: ${ ({ theme }) => theme.colors.red };
  font-size: ${ fluid(13, 2.8, 14) };
`

export const Category = styled.p`
  color: ${ ({ theme }) => theme.colors.dark1 };
  font-size: ${ fluid(13, 2.8, 14) };
`

export const Title = styled.h3`
  color: ${ ({ theme }) => theme.colors.dark1 };
  font-size: ${ fluid(13, 2.8, 14) };
  font-weight: 500;
`

export const Image = styled.img`
  height: ${ rem(46) };
  width: ${ rem(32) };
`

export const BookInfoContainter = styled.div`
  font-size: ${ fluid(13, 2.8, 14) };
  line-height: 1.5;
  margin-left: ${ rem(16) };
  max-width: ${ rem(224) };
`

export const Wrapper = styled.div`
  margin-top: ${ rem(48) };

  ${ breakpoint("tablet", `
    margin-top: ${ rem(24) };
    padding: 0 ${ rem(24) };
  `) }
`