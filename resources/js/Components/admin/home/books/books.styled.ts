import { 
  breakpoint, 
  fluid, 
  rem } from "@/Styled/functions";
import styled from "styled-components";


export const TableRow = styled.tr`

  &:nth-child(even) {
    background-color: #F6F8FF;
  }

  td {
    padding: ${ rem(8) } 0;
    
    &:first-of-type {
      padding: ${ rem(12) } ${ rem(18) };
      width: ${ rem(54) };

      input {
        margin: 0;
      }
    }

    &:nth-of-type(3) {
      padding-right: ${ rem(32) };
      width: ${ rem(220) };
    }
  }
`

export const TableHead = styled.thead`  
  border-bottom: 1px solid ${ ({ theme }) => theme.colors.grey3 };
  font-size: ${ fluid(14, 1.6, 16) };
  font-weight: 600;
  text-align: left;

  th {
    border-bottom: 1px solid ${ ({ theme }) => theme.colors.grey3 };
    padding: ${ rem(12) } ${ rem(8) };

    &:first-of-type {
      padding: ${ rem(12) } ${ rem(18) };

      input {
        margin: 0;
      }
    }
  }
`

export const Table = styled.table`
  border: 1px solid ${ ({ theme }) => theme.colors.grey3 };
  border-radius: ${ rem(8) };
  border-spacing: 0;
  max-width: ${ rem(1000) };
  width: 100%;

  input {
    appearance: auto;
  }
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
    padding: 0 ${ rem(24) };
  `) }
`