import { usePageProps } from "@/Hooks/usePageProps"
import { useBookOptions } from "./options.hook"
import { 
  BuyButton,
  CartButton,
  Wrapper } from "./options.styled"
import { BookQuantityOption } from "./quantity"
import { ToastSuccess } from "@/Components/toast/success"
import { ToastFailure } from "@/Components/toast/failure"


const Options = () =>{ 
  const { 
    data, 
    handleChangeQuantity, 
    stocks, 
    handleSendAddToCart, 
    limitReached, 
    wasSuccessful,
    handleBuyBook,
    hasErrors,
    errors } = useBookOptions()
  const { flash } = usePageProps()

  return (
    <>
      { wasSuccessful && !!flash.success && <ToastSuccess>{ flash.success }</ToastSuccess> }
      { hasErrors && <ToastFailure>{ errors.failure }</ToastFailure> }
      <Wrapper >
        <BookQuantityOption
          quantity={  limitReached || !stocks? 0 : data.quantity }
          handleChangeQuantity={ quantity => handleChangeQuantity(quantity) }
          stocks={ limitReached? 0 : stocks }/>
        <form onSubmit={ handleSendAddToCart }>
          <CartButton aria-disabled={ limitReached }>Add to cart</CartButton>
          <BuyButton 
            onClick={ handleBuyBook }
            aria-disabled={ limitReached } type="button">Buy now</BuyButton>
        </form>
      </Wrapper>
    </>
  )
}


export default Options