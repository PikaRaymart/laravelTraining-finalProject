import { useBookOptions } from "./options.hook"
import { 
  BuyButton,
  CartButton,
  Wrapper } from "./options.styled"
import { BookQuantityOption } from "./quantity"


const Options = () =>{ 
  const { data, handleChangeQuantity, stocks } = useBookOptions()

  return (
    <Wrapper>
      <BookQuantityOption
         quantity={ data.quantity }
         handleChangeQuantity={ quantity => handleChangeQuantity(quantity) }
         stocks={ stocks }/>
      <CartButton>Add to cart</CartButton>
      <BuyButton>Buy now</BuyButton>
    </Wrapper>
  )
}


export default Options