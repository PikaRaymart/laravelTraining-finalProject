import { useDetectResponsiveness } from "@/Hooks/useDetectResponsiveness"
import { usePageProps } from "@/Hooks/usePageProps"
import { Header } from "@/Layouts/Header"
import { 
  CartLink,
  NavItem, 
  Signout } from "@/Layouts/Header/header.styled"
import { Link } from "@inertiajs/react"


const CustomerHeader = () =>{
  const { auth } = usePageProps() 
  const isMobile = useDetectResponsiveness()

  return (
    <Header>
      <NavItem>
        <Link href={ route("books") }>Books</Link>
      </NavItem>
      <Signout>
        <Link href={ route("logout") } method="post" as="button">Sign Out</Link>
      </Signout>
      { !!auth.user && auth.type==="customer" && !isMobile && (
        <CartLink>
          <Link href={ route("cart") }>
            <img 
              src="/images/icons/cart.png" 
              alt=""
              aria-hidden="true" />
          </Link>
        </CartLink>
      ) }
    </Header>
  )
}


export default CustomerHeader