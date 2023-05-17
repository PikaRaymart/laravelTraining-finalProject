import styled from "styled-components";
import { Wrapper as ToastWrapper } from "../toast.styled"
import { fluid } from "@/Styled/functions";


export const Wrapper = styled(ToastWrapper)`
  background-color: ${ ({ theme }) => theme.colors.dark1 };
`