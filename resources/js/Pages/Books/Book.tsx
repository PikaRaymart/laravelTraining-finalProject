import { GuestHeader } from "@/Layouts/Guest/header";
import { PageWithLayout } from "@/app";
import { Head } from "@inertiajs/react";


const BookPage: PageWithLayout = () =>{

  return (
    <></>
  )
}

BookPage.layout = page => (
  <>
    <Head>
      <title>Book | PlumeBooks</title>
    </Head>
    <GuestHeader />
    { page }
  </>
)


export default BookPage