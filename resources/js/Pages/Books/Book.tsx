import { Book } from "@/Components/book";
import { Footer } from "@/Layouts/Footer";
import { HeaderGuard } from "@/Layouts/Header/Guard";
import { PageWithLayout } from "@/app";
import { Head } from "@inertiajs/react";


const BookPage: PageWithLayout = () => {
  
  return (
    <Book />
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