import { rem } from "@/Styled/functions";
import styled from "styled-components";
import { 
  Image, 
  Status } from "../books.styled";


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

export const Wrapper = styled.ul`
  border: 1px solid ${ ({ theme }) => theme.colors.grey3 };
`