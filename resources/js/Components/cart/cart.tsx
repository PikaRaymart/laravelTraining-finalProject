import { useDetectResponsiveness } from "@/Hooks/useDetectResponsiveness"
import { useCart } from "./cart.hooks"
import { 
  InnerWrapper, 
  MainWrapper } from "./cart.styled"
import { CartList } from "./list"
import { CartTable } from "./table"


const Cart = () => {
  const { data } = useCart()
  const isMobile = useDetectResponsiveness()

  return (
    <MainWrapper>
      <h1 className="sr-only">Your cart</h1>
      <InnerWrapper>
        { isMobile && <CartList />  }
        { !isMobile && <CartTable /> }
      </InnerWrapper>
    </MainWrapper>
  )
}


export default Cart