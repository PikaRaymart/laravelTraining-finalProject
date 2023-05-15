import { Header } from "@/Layouts/Header"
import { 
  NavItem, 
  Signout } from "@/Layouts/Header/header.styled"
import { Link } from "@inertiajs/react"


const AdminHeader = () =>{

  return (
    <Header>
      <NavItem>
        <Link href={ route("admin") }>Dashboard</Link>
      </NavItem>
      <Signout>
        <Link href={ route("admin-logout") } method="post" as="button">Sign Out</Link>
      </Signout>
    </Header>
  )
}


export default AdminHeader