import { 
  breakpoint,
  fluid, 
  rem } from "@/Styled/functions";
import styled from "styled-components";


export const FiltersOption = styled.button`
  border-radius: ${ rem(56) };
  color: #FFFFFF;
  display: grid;
  font-size: ${ fluid(14, 3.2, 16) };
  font-weight: 500;
  height: ${ fluid(40, 4.6, 46) };
  place-content: center;
  width: 100%;

  &:not(:last-of-type) {
    margin-bottom: ${ rem(8) };
  }
`

export const FilterReset = styled(FiltersOption)`
  background-color: ${ ({ theme }) => theme.colors.dark2 };
`

export const FilterNow = styled(FiltersOption)`
  background-color: ${ ({ theme }) => theme.colors.red };
`

export const FiltersOptionsContainer = styled.div`
  margin-top: ${ rem(32) };
  padding: 0 ${ rem(16) };
`

export const PriceInput = styled.input`
  background-color: rgba(59, 86, 255, .02);
  border-radius: ${ rem(56) };
  border: 1px solid ${ ({ theme }) => theme.colors.grey3 };
  font-size: ${ fluid(14, 3.2, 16) };
  padding: ${ fluid(10, 2.4, 12) } ${ fluid(10, 2.4, 12) } ${ fluid(10, 2.4, 12) } ${ fluid(12, 3.2, 16) };
  width: 100%;

  ::placeholder {
    color: ${ ({ theme }) => theme.colors.grey1 };
  }
`

export const PriceInputWrapper = styled.div`

  &:not(:last-of-type) {
    margin-bottom: ${ rem(4) };
  }
`

export const CategoryLabel = styled.label`
  margin-left: ${ rem(8) };
  text-transform: capitalize;
`

export const CategoryItem = styled.li`
  align-items: center;
  display: flex;

  &:not(:last-of-type) {
    margin-bottom: ${ rem(10) };
  }
`

export const CategoryList = styled.ul`
  color: ${ ({ theme }) => theme.colors.dark3 };
  font-size: ${ rem(15) };
  padding-left: ${ rem(8) };
`

export const Legend = styled.legend`
  color: ${ ({ theme }) => theme.colors.dark1 };
  font-weight: 600;
  margin-bottom: ${ rem(12) };
  position: static;
`

export const Fieldset = styled.fieldset`
  border-bottom: 1px solid #E9E9E9;
  padding: 0 ${ rem(16) } ${ rem(16) } ${ rem(48) };

  &:not(:last-of-type) {
    margin-bottom: ${ rem(16) };
  }
`

export const FilterHeading = styled.h2`
  color: ${ ({ theme }) => theme.colors.dark1 };
  font-weight: 600;
  margin: 0 0 ${ rem(24) } ${ rem(48) };
`

export const FilterClose = styled.button`
  display: block;
  margin: 0 ${ rem(16) } 0 auto;

  ${ breakpoint("desktop", `
    display: none;
  `) }
`

export const FilterInnerContainer = styled.div`
  background-color: #FFFFFF;
  border-left: 1px solid #E9E9E9;
  inset: ${ fluid(60, 10.25, 96) } 0 auto auto;
  height: calc(100vh - ${ fluid(60, 10.25, 96) });
  opacity: 0;
  overflow-y: scroll;
  padding: ${ rem(32) } 0 ${ rem(32) } 0 ;
  position: fixed;
  transition: 
    opacity .3s ease,
    visibility .3s ease,
    transform .3s ease;
  transform: translateX(100%);
  visibility: hidden;
  width: ${ rem(300) };

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  ${ breakpoint("desktop", `
    border-left: none;
    border-right: 1px solid #E9E9E9;
    opacity: 1;
    position: static;
    transform: none;
    visibility: visible;
  `) }
`

export const FiltersTrigger = styled.button`
  align-items: center;
  color: #021120;
  display: flex;
  font-size: ${ fluid(14, 3.2, 16) };
  font-weight: 500;
  height: ${ fluid(36, 8, 40) };
  padding-left: ${ rem(8) };

  img {
    margin-right: ${ rem(8) };
  }

  &[aria-expanded="true"] + ${ FilterInnerContainer } {
    opacity: 1;
    transform: translateX(0);
    visibility: visible;
  }

  ${ breakpoint("desktop", `
    display: none;
  `) }
`

export const Wrapper = styled.form`
  position: relative;
`