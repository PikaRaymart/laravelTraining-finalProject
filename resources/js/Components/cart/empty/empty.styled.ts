import { fluid, rem } from "@/Styled/functions"
import styled from "styled-components"


export const SubHeading = styled.h2`
  color: ${ ({ theme }) => theme.colors.dark2 };
  font-size: ${ fluid(14, 1.8, 20) };
  font-weight: 700;
  margin-top: ${ rem(12) };
  text-align: center;
`

export const Image = styled.img`
  filter: grayscale(.85);
  margin: 0 auto;
  max-width: ${ fluid(120, 16, 160) };
`

export const Wrapper = styled.div`
  margin-bottom: ${ fluid(64, 8, 80) };
` 