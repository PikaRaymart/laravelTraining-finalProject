import { Footer } from "@/Layouts/Footer";
import { HeaderGuard } from "@/Layouts/Header/Guard";
import { PageWithLayout } from "@/app";
import { Head } from "@inertiajs/react";


const CartPage: PageWithLayout = () => {

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