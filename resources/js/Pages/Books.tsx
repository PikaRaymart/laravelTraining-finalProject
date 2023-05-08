import { HeaderGuard } from "@/Layouts/Header/Guard";
import { PageWithLayout } from "@/app";
import { Head } from "@inertiajs/react";


const BooksPage: PageWithLayout = () =>{

  return (
    <main></main>
  )
}

BooksPage.layout = page => (
  <>
    <Head>
      <title>Books | Collections</title>
    </Head>
    <HeaderGuard />
    { page }
  </>
)

export default BooksPage