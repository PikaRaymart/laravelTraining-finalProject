import { useBooksFilters } from "@/Hooks/useBooksFilters"
import { AdminHeader } from "@/Layouts/Admin/Header"
import { PageWithLayout } from "@/app"
import { Head } from "@inertiajs/react"
import { 
  RemoveFilterDesktop,
  ShowFiltersDesktop, 
  MainGridContainer, 
  MainWrapper, 
  TopControls} from "./Admin/admin.styled"
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
          {/* Create Product button */}
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