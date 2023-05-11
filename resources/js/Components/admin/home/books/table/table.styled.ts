import styled from "styled-components"
import { 
  rem,
  fluid } from "@/Styled/functions"


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

export const Wrapper = styled.table`
  border: 1px solid ${ ({ theme }) => theme.colors.grey3 };
  border-radius: ${ rem(8) };
  border-spacing: 0;
  max-width: ${ rem(1000) };
  width: 100%;

  input {
    appearance: auto;
  }
`