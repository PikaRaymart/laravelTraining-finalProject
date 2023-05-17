import { rem } from "@/Styled/functions";
import styled from "styled-components";
import { 
  Image, 
  Status } from "../books.styled";


export const InputContainer = styled.div`
  margin-right: ${ rem(12) };
`

export const ListItem = styled.li`
  align-items: center;
  display: flex;
  padding: ${ rem(12) } ${ rem(16) };

  &:nth-child(even) {
    background-color: #F6F8FF;
  }

  ${ Image } {
    align-self: center;
  }

  ${ Status } {
    margin: 0 ${ rem(16) } 0 auto;
  }

  input {
    appearance: auto;
  }
`

export const Wrapper = styled.ul`
  border-top: 1px solid ${ ({ theme }) => theme.colors.grey3 };
  border-bottom: 1px solid ${ ({ theme }) => theme.colors.grey3 };
`