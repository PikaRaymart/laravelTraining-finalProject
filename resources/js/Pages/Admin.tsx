import { useSetupBooks } from "@/Hooks/useSetupBooks"
import { AdminHeader } from "@/Layouts/Admin/Header"
import { PageWithLayout } from "@/app"
import { Head } from "@inertiajs/react"
import { AdminHome } from "@/Components/admin/home"


const AdminPage: PageWithLayout = () =>{
  useSetupBooks()

  return (
    <AdminHome />
  )
}

AdminPage.layout = page => <>
  <Head>
    <title>Admin | Home</title>
  </Head>
  <AdminHeader />
  { page }
</>


export default AdminPage