import { AdminHeader } from "@/Layouts/Admin/Header"
import { Header } from ".."
import { usePageProps } from "@/Hooks/usePageProps"
import { GuestHeader } from "@/Layouts/Guest/header"
import { 
  NavItem, 
  Signout } from "../header.styled"
import { Link } from "@inertiajs/react"


const Guard = () => {
  const { auth } = usePageProps()
  
  if ( !auth.user ) {
    return (
      <Header>
        <NavItem>
          <Link href={ route("books") }>Books</Link>
        </NavItem>
        <NavItem>
          <Link href={ route("register") }>Sign Up</Link>
        </NavItem>
        <Signout>
          <Link href={ route("login") }>Sign In</Link>
        </Signout>
      </Header>
    )
  }

  if ( auth.type==="admin" ) {
    return <AdminHeader />
  }

  return <GuestHeader />
}


export default Guard