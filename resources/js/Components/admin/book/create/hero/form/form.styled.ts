import { 
  breakpoint, 
  fluid, 
  rem } from "@/Styled/functions";
import styled from "styled-components";


export const FormOption = styled.button`
  border-radius: ${ rem(56) };
  border: 1.5px solid;
  font-size: ${ fluid(14, 3.2, 16) };
  font-weight: 500;
  padding: ${ fluid(10, 2.4, 12) } ${ fluid(20, 4.8, 24) };
`

export const FormDiscard = styled(FormOption)`

  ${ ({ theme: { colors } }) => `
    border-color: ${ colors.red };
    color: ${ colors.red };
  ` }
`

export const FormSave = styled(FormOption)`
  border-color: #FFFFFF;
  color: #FFFFFF;
  margin-right: ${ rem(10) };
`

export const FormControls = styled.div`
  background-color: ${ ({ theme }) => theme.colors.dark1 };
  display: flex;
  inset: auto 0 0 0;
  justify-content: center;
  padding: ${ rem(12) } 0;
  position: fixed;
`

export const FormError = styled.p`
  color: ${ ({ theme }) => theme.colors.red };
  font-size: ${ rem(14) };
  font-weight: 500;
  margin: ${ rem(2) } 0 0 ${ rem(12) };
`

export const Input = styled.input`
  border: 1px solid ${ ({  theme }) => theme.colors.grey1 };
  border-radius: ${ rem(4) };
  font-size: ${ rem(14) };
  height: ${ rem(46) };
  line-height: 1.5;
  padding: ${ rem(12) };
  width: inherit;
`

export const Textarea = styled(Input)`
  height: auto;
`

export const InputLabel = styled.label`
  color: ${ ({ theme }) => theme.colors.dark1 };
  display: block;
  font-size: ${ rem(14) };
  font-weight: 700;
  margin-bottom: ${ rem(8) };
`

export const InputContainer = styled.div`
  width: 100%;

  &:not(:last-of-type) {
    margin-bottom: ${ rem(16) };
  }
`

export const PhotoNote = styled.p`
  color: ${ ({ theme }) => theme.colors.dark2 };
  font-size: ${ rem(14) };
  line-height: 1.5;
  margin-bottom: ${ rem(24) };
`

export const PhotoLabel = styled.label`
  inset: 0;
  position: absolute;

  ${ breakpoint("desktop", `
    cursor: pointer;
  `) }
`

export const PhotoInnerContainer = styled.div`
  display: grid;
  inset: 0;
  justify-items: center;
  place-content: center;
  position: absolute;

  img {
    margin-bottom: ${ rem(16) };
  }

  p {
    color: ${ ({ theme }) => theme.colors.dark2 };
    font-size: ${ rem(16) };
    font-weight: 600;
  }
`

export const PhotoContainer = styled.div`
  aspect-ratio: 1/1;
  background-color: #F9FAFC;
  border-radius: ${ rem(8) };
  border: 2px dashed ${ ({ theme }) => theme.colors.dark2 };
  max-width: ${ rem(400) };
  margin: 0 auto ${ rem(16) };
  position: relative;

  ${ breakpoint("tablet", `
    max-width: ${ rem(320) };
  `) }
`

export const FormInnerContainer = styled.div`

  &:not(:last-of-type) {
    margin-bottom: ${ rem(16) };
  }

  ${ breakpoint("tablet", `

    &:not(:last-of-type) {
      margin-bottom: 0;
    }
  `) }
`

export const Wrapper = styled.form`

  ${ breakpoint("tablet", `
    display: grid;
    grid-template-columns: ${ fluid(256, 32, 320) } 1fr;
    gap: 0 ${ fluid(16, 3.2, 32) };
  `) }
`