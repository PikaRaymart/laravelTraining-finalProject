import { AdminHeader } from "@/Layouts/Admin/Header"
import { PageWithLayout } from "@/app"
import { usePage } from "@inertiajs/react"


const AdminPage: PageWithLayout = () =>{
  const { auth } = usePage().props

  return (
    <main>
    </main>
  )
}

AdminPage.layout = page => <>
  <AdminHeader />
  { page }
</>


export default AdminPage