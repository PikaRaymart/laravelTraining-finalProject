import { Cart } from "@/Components/cart";
import { Footer } from "@/Layouts/Footer";
import { HeaderGuard } from "@/Layouts/Header/Guard";
import { PageWithLayout } from "@/app";
import { Book } from "@/Pages/Books/Book";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";


export type CartItem = {
  cartId: number,
  quantity: number,
  book: Book
}

export type CartPageProps = PageProps<{
  cart: CartItem[]
}>

const CartPage: PageWithLayout = () => {
  
  return (
    <Cart />
  )
}

CartPage.layout = page => (
  <>
    <Head>
      <title>Cart</title>
    </Head>
    <HeaderGuard />
    { page }
    <Footer />
  </>
)


export default CartPage