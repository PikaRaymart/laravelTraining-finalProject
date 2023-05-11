import { Home } from "@/Components/home";
import { Footer } from "@/Layouts/Footer";
import { HeaderGuard } from "@/Layouts/Header/Guard";
import { PageWithLayout } from "@/app";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { Book } from "./Books/books";


export type HomePageProps = PageProps<{
  featuredBooks: Book[]
}>

const HomePage: PageWithLayout = () =>{

  return (
    <Home />
  )
}

HomePage.layout = page => (
  <>
  <Head>
    <meta charSet="utf-8" />
    <title>Get your books</title>
  </Head>
  <HeaderGuard />
    { page }
  <Footer />
  </>
)


export default HomePage