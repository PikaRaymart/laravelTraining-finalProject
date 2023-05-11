import { AdminHeader } from "@/Layouts/Admin/Header"
import { PageWithLayout } from "@/app"
import { Head } from "@inertiajs/react"
import { AdminHome } from "@/Components/admin/home"
import { PageProps } from "@/types"
import { 
  Book,
  BooksFilters, 
  BooksMetaData } from "./Books/books"


export type AdminPageProps = PageProps<{
  booksFilters: BooksFilters,
  books: BooksMetaData & {
    data: Book[]
  }
}>

const AdminPage: PageWithLayout = () =>{

  return (
    <AdminHome />
  )
}

AdminPage.layout = page => <>
  <Head>
    <meta charSet="utf-8" />
    <title>Admin | Home</title>
  </Head>
  <AdminHeader />
  { page }
</>


export default AdminPage