import { AdminHeader } from "@/Layouts/Admin/Header";
import { PageWithLayout } from "@/app";
import { Head } from "@inertiajs/react";
import { MainWrapper } from "./Create/create.styled";
import { AdminCreateBook } from "@/Components/admin/book/create";


const CreateBookPage: PageWithLayout = () =>{

  return (
    <MainWrapper>
      <h1 className="sr-only">Create book</h1>
      <AdminCreateBook />
    </MainWrapper>
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