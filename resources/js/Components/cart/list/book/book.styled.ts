import { rem } from "@/Styled/functions";
import styled from "styled-components";


export const OptionsContainer = styled.div`
  align-items: center;
  display: flex;
  margin-top: ${ rem(8) };
`

export const Wrapper = styled.li`
  display: flex;
  padding: 0 ${ rem(16) } ${ rem(24) } 0;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${ ({ theme }) => theme.colors.grey3 };
  }

  &:not(:first-of-type) {
    padding-top: ${ rem(24) };
  }
`