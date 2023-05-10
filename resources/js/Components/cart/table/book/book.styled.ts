import { rem } from "@/Styled/functions";
import styled from "styled-components";


export const BookInfoContainer = styled.div`
  display: flex;
  margin-right: ${ rem(32) };
`

export const TableRow = styled.tr`

  td {
    padding: ${ rem(24) } 0;

    &:first-of-type {
      width: ${ rem(340) };
    }

    h3 {
      margin-top: ${ rem(16) };
    }
  }
  

  &:not(:last-of-type) {

    td {
      border-bottom: 1px solid ${ ({ theme }) => theme.colors.grey3 };
    }
  }
`