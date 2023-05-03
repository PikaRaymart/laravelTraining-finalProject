import { useBooksFilters } from "@/Hooks/useBooksFilters"
import { AdminHeader } from "@/Layouts/Admin/Header"
import { PageWithLayout } from "@/app"
import { Head } from "@inertiajs/react"


const AdminPage: PageWithLayout = () =>{
  useBooksFilters()

  return (
    <main>
    </main>
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