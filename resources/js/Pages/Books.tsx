import { Books } from "@/Components/books";
import { useSetupBooks } from "@/Hooks/useSetupBooks";
import { HeaderGuard } from "@/Layouts/Header/Guard";
import { PageWithLayout } from "@/app";
import { Head } from "@inertiajs/react";


const BooksPage: PageWithLayout = () =>{
  useSetupBooks()

  return (
    <Books />
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