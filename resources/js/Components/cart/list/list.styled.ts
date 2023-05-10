import { rem } from "@/Styled/functions";
import styled from "styled-components";


export const SectionHeading = styled.h2`
  font-size: ${ rem(16) };
  font-weight: 600;
  margin-bottom: ${ rem(24) };
  padding-bottom: ${ rem(16) };

  ${ ({ theme }) => `
    border-bottom: 1px solid ${ theme.colors.grey3 };
    color: ${ theme.colors.dark3 };
  ` }
`

export const ListWrapper = styled.ul`

`

export const Wrapper = styled.div`

`