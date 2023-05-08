import { Header } from "@/Layouts/Header"
import { 
  NavItem, 
  Signout } from "@/Layouts/Header/header.styled"
import { Link } from "@inertiajs/react"


const GuestHeader = () =>{

  return (
    <Header>
      <NavItem>
        <Link href={ route("books") }>Books</Link>
      </NavItem>
      <Signout>
        <Link href={ route("logout") } method="post" as="button">Sign Out</Link>
      </Signout>
    </Header>
  )
}


export default GuestHeader