import styled from "styled-components";
import { Wrapper as ToastWrapper } from "../toast.styled"


export const Wrapper = styled(ToastWrapper)`
  background-color: ${ ({ theme }) => theme.colors.dark1 };
`