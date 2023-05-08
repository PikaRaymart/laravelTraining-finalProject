import { AdminHeader } from "@/Layouts/Admin/Header";
import { PageWithLayout } from "@/app";
import { Head } from "@inertiajs/react";
import { AdminCreateBook } from "@/Components/admin/book/create";


const CreateBookPage: PageWithLayout = () =>{

  return (
    <AdminCreateBook />
  )
}

CreateBookPage.layout = page => (
  <>
    <Head>
      <title>Admin | Create Book</title>
    </Head>
    <AdminHeader />
    { page }
  </>
)


export default CreateBookPage