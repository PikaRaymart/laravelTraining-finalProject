import { 
  fluid, 
  rem } from "@/Styled/functions";
import styled from "styled-components";


export const TableHead = styled.thead`
  font-size: ${ fluid(14, 1.6, 16) };
  font-weight: 600;
  text-align: left;
  
  th {
    border-bottom: 1px solid ${ ({ theme }) => theme.colors.grey3 };
    padding-bottom: ${ rem(16) };
  }
`

export const Wrapper = styled.table`
  width: 100%;
`