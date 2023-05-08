import { AdminUpdateBook } from "@/Components/admin/book/update";
import { AdminHeader } from "@/Layouts/Admin/Header";
import { PageWithLayout } from "@/app";
import { Head } from "@inertiajs/react";
import { MainWrapper } from "./Update/update.styled";


const Update:PageWithLayout = () =>{

  return (
    <MainWrapper>
      <h1 className="sr-only">Update book</h1>
      <AdminUpdateBook />
    </MainWrapper>
  )
}

Update.layout = page => (
  <>
    <Head>
      <title>Admin | Update Book</title>
    </Head>
    <AdminHeader />
    { page }
  </>
)


export default Update