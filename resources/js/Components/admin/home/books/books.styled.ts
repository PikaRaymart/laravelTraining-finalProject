import { 
  breakpoint, 
  fluid, 
  rem } from "@/Styled/functions";
import styled from "styled-components";


type StatusProps = {
  isActive: string
}

export const Status = styled.p<StatusProps>`
  background-color: ${ ({ isActive }) => "#A7E8D0" };
  border-radius: ${ rem(32) };
  color: ${ ({ theme }) => theme.colors.dark1 };
  font-size: ${ rem(13) };
  font-weight: 500;
  padding: ${ rem(6) } ${ rem(10) };
`

export const Stocks = styled.p`
  color: ${ ({ theme }) => theme.colors.red };
`

export const Category = styled.p`
  color: ${ ({ theme }) => theme.colors.dark1 };
`

export const Title = styled.h3`
  color: ${ ({ theme }) => theme.colors.dark1 };
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

export const ListItem = styled.li`
  align-items: center;
  display: flex;
  padding: ${ rem(12) } ${ rem(16) };

  &:nth-child(even) {
    background-color: #F6F8FF;
  }

  ${ Image } {
    align-self: flex-start;
  }

  ${ Status } {
    margin: 0 ${ rem(16) } 0 auto;
  }
`

export const List = styled.ul`
  border: 1px solid ${ ({ theme }) => theme.colors.grey3 };
`

export const Wrapper = styled.div`
  margin-top: ${ rem(48) };

  ${ breakpoint("tablet", `
    margin-top: ${ rem(24) };
  `) }
`