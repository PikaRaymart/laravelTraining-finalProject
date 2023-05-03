import { useBooksFilters } from "@/Hooks/useBooksFilters"
import { AdminHeader } from "@/Layouts/Admin/Header"
import { PageWithLayout } from "@/app"
import { Head, Link } from "@inertiajs/react"
import { 
  RemoveFilterDesktop,
  ShowFiltersDesktop, 
  MainGridContainer, 
  MainWrapper, 
  TopControls,
  CreateBookLink} from "./Admin/admin.styled"
import { Searchbar } from "@/Components/searchbar"
import { Filters } from "@/Components/filters"


const AdminPage: PageWithLayout = () =>{
  useBooksFilters()

  return (
    <MainWrapper>
      <ShowFiltersDesktop>
        <Filters />
      </ShowFiltersDesktop>
      <MainGridContainer>
        <TopControls>
          <Searchbar />
          <RemoveFilterDesktop>
            <Filters />
          </RemoveFilterDesktop>
          <CreateBookLink>
            <Link href={ route("create-book") }>
              <img 
                src="/images/icons/create-book.png" 
                alt=""
                aria-hidden="true" />
              <span>Create Product</span>
            </Link>
          </CreateBookLink>
        </TopControls>
      </MainGridContainer>
    </MainWrapper>
  )
}

AdminPage.layout = page => <>
  <Head>
    <title>Admin | Home</title>
  </Head>
  <AdminHeader />
  { page }
</>


export default AdminPage