import { Book as BookHome } from "@/Components/book";
import { Footer } from "@/Layouts/Footer";
import { HeaderGuard } from "@/Layouts/Header/Guard";
import { PageWithLayout } from "@/app";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { Book } from "./books";


export type BookPageProps = PageProps & {
  book: Book,
  availableStocks: number,
  limitReached: boolean
}

const BookPage: PageWithLayout = () => {
  
  return (
    <BookHome />
  )
}

BookPage.layout = page => (
  <>
    <Head>
      <title>{page.props.book.title}</title>
    </Head>
    <HeaderGuard />
    { page }
    <Footer />
  </>
)


export default BookPage