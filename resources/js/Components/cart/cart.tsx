import { useDetectResponsiveness } from "@/Hooks/useDetectResponsiveness"
import { useCart } from "./cart.hooks"
import { 
  CartBottomRow,
  CartOptions,
  CheckoutOption,
  InnerWrapper, 
  MainWrapper, 
  TotalCartPrice, 
  UpdateOption} from "./cart.styled"
import { CartList } from "./list"
import { CartTable } from "./table"
import { Link } from "@inertiajs/react"
import { usePageProps } from "@/Hooks/usePageProps"
import { CartPageProps } from "@/Pages/Cart"
import { BookItem } from "./list/book"


const Cart = () => {
  const { data, handleChangeCartQuantity, handleRemoveCartBook, handleSubmitCartUpdates } = useCart()
  const { cart } = usePageProps<CartPageProps>()
  const isMobile = useDetectResponsiveness()

  return (
    <MainWrapper>
      <h1 className="sr-only">Your cart</h1>
      <InnerWrapper>
        { isMobile && (
          <CartList>
            { cart.map(({ cartId, book }) => (
              <BookItem
                key={ cartId }
                book={ book }
                quantity={ data.updates.find(update => update.cartId===cartId)?.quantity?? 0 }
                handleChangeCartQuantity={ ( quantity: number ) => handleChangeCartQuantity(cartId, quantity) }
                handleRemoveCartBook={ handleRemoveCartBook } />
                )) }
          </CartList>
        )  }
        { !isMobile && <CartTable /> }
        <CartBottomRow onSubmit={ handleSubmitCartUpdates }>
          <TotalCartPrice>
            <span>Total: </span>
            ₱{ data.updates.reduce((accu, curr) => accu + curr.quantity * (cart.find(cartItem => cartItem.cartId===curr.cartId)?.book.price??0), 0).toFixed(2) }
          </TotalCartPrice>     
          <CartOptions>
            <UpdateOption type="submit">Update Cart</UpdateOption>
            <CheckoutOption>
              <Link href="#">Proceed Checkout</Link>
            </CheckoutOption>
          </CartOptions>
        </CartBottomRow>
      </InnerWrapper>
    </MainWrapper>
  )
}


export default Cart