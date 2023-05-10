import { useBookOptions } from "./options.hook"
import { 
  BuyButton,
  CartButton,
  Wrapper } from "./options.styled"
import { BookQuantityOption } from "./quantity"


const Options = () =>{ 
  const { data, handleChangeQuantity, stocks, handleSendAddToCart, limitReached } = useBookOptions()

  return (
    <Wrapper >
      <BookQuantityOption
         quantity={  limitReached? 0 : data.quantity }
         handleChangeQuantity={ quantity => handleChangeQuantity(quantity) }
         stocks={ limitReached? 0 : stocks }/>
      <form onSubmit={ handleSendAddToCart }>
        <CartButton>Add to cart</CartButton>
        <BuyButton>Buy now</BuyButton>
      </form>
    </Wrapper>
  )
}


export default Options