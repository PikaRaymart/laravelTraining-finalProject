import { 
  fluid, 
  rem } from "@/Styled/functions";
import styled,{ keyframes } from "styled-components";


export const ToastAnimation = keyframes`
  0%, 100% {
    transform: translate(-50%, -100%);
  } 
  25%, 75% {
    transform: translate(-50%, 0);
  } 
` 

export const Wrapper = styled.div`
  animation: ${ ToastAnimation } 4s ease forwards;
  border-radius: 0 0 ${ rem(4) } ${ rem(4) };
  color: #FFFFFF;
  font-weight: 600;
  font-size: ${ fluid(14, 1.6, 16) };
  inset: 0 auto auto 50%;
  max-width: ${ fluid(300, 50, 480) };
  padding: ${ rem(24) } ${ rem(32) };
  position: fixed;
  text-align: center;
  z-index: 50;
  width: 100vw;
`