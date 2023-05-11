import { Books } from "@/Components/books";
import { Footer } from "@/Layouts/Footer";
import { HeaderGuard } from "@/Layouts/Header/Guard";
import { PageWithLayout } from "@/app";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { 
  BooksFilters, 
  BooksMetaData,
  Book } from "./Books/books";


export type BooksPageProps = PageProps<{
  booksFilters: BooksFilters,
  books: BooksMetaData & {
    data: Book[]
  }
}>

const BooksPage: PageWithLayout = () =>{

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
    <Footer />
  </>
)

export default BooksPage