import { Link } from "@inertiajs/react"
import { 
  DropdownOverlay, 
  Hamburger, 
  NavWrapper, 
  Navlist, 
  Wrapper } from "./header.styled"
import ApplicationLogo from "@/Components/ApplicationLogo"
import { useExpansion } from "@/Hooks/useExpansion"


type HeaderProps = {
  children: React.ReactNode
}

const Header = ({ children }: HeaderProps) => {
  const [ isExpanded, handleExpansion ] = useExpansion()

  return (
    <Wrapper>
      <Link href={ route("home") }>
        <ApplicationLogo />
      </Link>
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