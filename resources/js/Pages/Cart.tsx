import { Cart } from "@/Components/cart";
import { Footer } from "@/Layouts/Footer";
import { HeaderGuard } from "@/Layouts/Header/Guard";
import { PageWithLayout } from "@/app";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { Book } from "./Books/books";


export type CartPageProps = PageProps<{
  cart: {
    cartId: number,
    quantity: number,
    book: Book
  }[],
  success?: string,
  failure?: string
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