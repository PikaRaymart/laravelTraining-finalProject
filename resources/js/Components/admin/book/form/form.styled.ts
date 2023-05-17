import { 
  breakpoint, 
  fluid, 
  rem } from "@/Styled/functions";
import styled, { css } from "styled-components";


type FormOptionProps = {
  notAvailable?: boolean
}

export const FormOption = styled.button<FormOptionProps>`
  border-radius: ${ rem(56) };
  border: 1.5px solid;
  font-size: ${ fluid(14, 3.2, 16) };
  font-weight: 500;
  padding: ${ fluid(10, 2.4, 12) } ${ fluid(20, 4.8, 24) };

  ${ ({ notAvailable }) => notAvailable && css`
    cursor: not-allowed;
    opacity: .5;
  ` }
`

export const FormDiscard = styled(FormOption)`
  padding: 0;
  position: relative;

  ${ ({ theme: { colors } }) => `
    border-color: ${ colors.red };
    color: ${ colors.red };
  ` }

  a {
    display: block;
    padding: ${ fluid(10, 2.4, 12) } ${ fluid(20, 4.8, 24) };
  }
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
  display: block;
  height: auto;
`

export const InputLabel = styled.label`
  color: ${ ({ theme }) => theme.colors.dark1 };
  display: block;
  font-size: ${ rem(14) };
  font-weight: 700;

  span {
    color: ${ ({ theme }) => theme.colors.dark1 };
    font-size: ${ rem(12) };
    font-weight: 300;
  }
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

export const FloatingPhoto = styled.img`
  margin: 0 auto;
  height: 100%;
  width: 80%;
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

type PhotoContainerProps = {
  hasImage?: boolean
}

export const PhotoContainer = styled.div<PhotoContainerProps>`
  aspect-ratio: 1/1;
  background-color: ${ ({ hasImage }) => hasImage? "" : "#F9FAFC" };
  border-radius: ${ rem(8) };
  border: ${ ({ theme, hasImage }) => hasImage? "" : `2px dashed ${ theme.colors.dark2 }` };
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