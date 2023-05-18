import { Link } from "@inertiajs/react"
import { 
  CartLink,
  DropdownOverlay, 
  Hamburger, 
  NavWrapper, 
  Navlist, 
  Wrapper } from "./header.styled"
import ApplicationLogo from "@/Components/ApplicationLogo"
import { useHeader, useHeaderAnimation } from "./header.hook"
import { useDetectResponsiveness } from "@/Hooks/useDetectResponsiveness"
import { usePageProps } from "@/Hooks/usePageProps"
import { PageProps } from "@/types"


type HeaderProps = {
  children: React.ReactNode
}

const Header = ({ children }: HeaderProps) => {
  const { isExpanded, handleExpansion } = useHeader()
  const isMobile = useDetectResponsiveness()
  const { auth } = usePageProps<PageProps>()
  const { 
    showHeaderSticky,
    hideHeaderSticky } = useHeaderAnimation()

  return (
    <Wrapper className={`${hideHeaderSticky? "scroll-in scroll-out" : 
                          showHeaderSticky? "scroll-in" : ""}`}>
      <Link href={ route("home") }>
        <ApplicationLogo />
      </Link>
      { !!auth.user && auth.type==="customer" && isMobile && (
        <CartLink>
          <Link href={ route("cart") }>
            <img 
              src="/images/icons/cart.png" 
              alt=""
              aria-hidden="true" />
          </Link>
        </CartLink>
      ) }
      <Hamburger
        onClick={ handleExpansion }
        aria-expanded={ isExpanded }>
          <img 
            src="/images/icons/hamburger.png"
            alt=""
            aria-hidden="true" />
          <img 
            src="/images/icons/hamburger-close.png" 
            alt=""
            aria-hidden="true" />
      </Hamburger>
      <DropdownOverlay />
      <NavWrapper>
        <Navlist>
          { children }
        </Navlist>
      </NavWrapper>
    </Wrapper>
  )
}


export default Header