import { usePageProps } from "@/Hooks/usePageProps"
import { 
  ListWrapper, 
  SectionHeading, 
  Wrapper } from "./list.styled"
import { CartPageProps } from "@/Pages/Cart"
import { BookItem } from "./book"
import { 
  CartBottomRow, 
  CartOptions, 
  CheckoutOption, 
  TotalCartPrice, 
  UpdateOption} from "../cart.styled"
import { Link } from "@inertiajs/react"


const List = () => {
  const { cart } = usePageProps<CartPageProps>()

  const renderCartItems = () =>{
    const cartItems = cart.map(({ cartId, quantity, book }) => (
      <BookItem
        key={ cartId }
        book={ book }
        quantity={ quantity } />
    ))

    return cartItems
  }

  return (
    <Wrapper>
      <SectionHeading>Books</SectionHeading>
      <ListWrapper>
        { renderCartItems() }
      </ListWrapper>
      <CartBottomRow>
        <TotalCartPrice>
          <span>Total: </span>
          ₱{ cart.reduce(( accu, curr ) => accu + curr.quantity * curr.book.price, 0).toFixed(2) }
        </TotalCartPrice>     
        <CartOptions>
          <UpdateOption>Update Cart</UpdateOption>
          <CheckoutOption>
            <Link href="#">Proceed Checkout</Link>
          </CheckoutOption>
        </CartOptions>
      </CartBottomRow>
    </Wrapper>
  )
}


export default List