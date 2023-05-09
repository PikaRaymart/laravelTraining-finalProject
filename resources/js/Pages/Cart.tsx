import { Footer } from "@/Layouts/Footer";
import { HeaderGuard } from "@/Layouts/Header/Guard";
import { PageWithLayout } from "@/app";
import { Book } from "@/store";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";


export type CartItem = Book & {
  quantity: number
}

export type CartPageProps = PageProps<{
  cart: CartItem[]
}>

const CartPage: PageWithLayout = (props: CartPageProps) => {
  
  return (
    <></>
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