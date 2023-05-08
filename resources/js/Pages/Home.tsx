import { Home } from "@/Components/home";
import { HeaderGuard } from "@/Layouts/Header/Guard";
import { PageWithLayout } from "@/app";
import { Book } from "@/store";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";


export type HomePageProps = PageProps<{
  featuredBooks: Book[]
}>

const HomePage: PageWithLayout = (props: PageProps) =>{
  
  return (
    <Home />
  )
}

HomePage.layout = page => (
  <>
  <Head>
    <meta charSet="utf-8" />
    <title>PlumeBooks | Get your books</title>
  </Head>
  <HeaderGuard />
    { page }
  </>
)


export default HomePage