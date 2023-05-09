import { useBookOptions } from "./options.hook"
import { 
  BuyButton,
  CartButton,
  QuantityButton,
  QuantityWrapper, 
  Wrapper } from "./options.styled"


const Options = () =>{ 
  const { data, handleChangeQuantity, stocks } = useBookOptions()

  return (
    <Wrapper>
      <QuantityWrapper>
        <QuantityButton 
          onClick={ () => handleChangeQuantity(data.quantity-1) }
          aria-disabled={ data.quantity-1 < 1 }>
          <span className="sr-only">remove 1 order</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="13.25" height="1.25" viewBox="0 0 13.25 1.25">
            <line id="subtract" x2="12" transform="translate(0.625 0.625)" fill="none" stroke="#404548" strokeLinecap="round" strokeWidth="1.25"/>
          </svg>
        </QuantityButton>
        { data.quantity }
        <QuantityButton 
          onClick={ () => handleChangeQuantity(data.quantity+1) }
          aria-disabled={ data.quantity+1 > stocks }>
          <span className="sr-only">add 1 order</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="13.25" height="13.25" viewBox="0 0 13.25 13.25">
            <g id="quantity-add" transform="translate(-713.875 -688.875)">
              <line id="Line_8" data-name="Line 8" x2="12" transform="translate(714.5 695.5)" fill="none" stroke="#404548" strokeLinecap="round" strokeWidth="1.25"/>
              <line id="Line_9" data-name="Line 9" y1="12" transform="translate(720.5 689.5)" fill="none" stroke="#404548" strokeLinecap="round" strokeWidth="1.25"/>
            </g>
          </svg>
        </QuantityButton>
      </QuantityWrapper>
      <CartButton>Add to cart</CartButton>
      <BuyButton>Buy now</BuyButton>
    </Wrapper>
  )
}


export default Options