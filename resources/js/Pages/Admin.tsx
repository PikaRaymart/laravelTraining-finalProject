import { useBooksFilters } from "@/Hooks/useBooksFilters"
import { AdminHeader } from "@/Layouts/Admin/Header"
import { PageWithLayout } from "@/app"
import { Head } from "@inertiajs/react"
import { 
  FiltersWrapper, 
  MainGridContainer, 
  MainWrapper, 
  TopControls} from "./Admin/admin.styled"
import { Searchbar } from "@/Components/searchbar"


const AdminPage: PageWithLayout = () =>{
  useBooksFilters()

  return (
    <MainWrapper>
      <FiltersWrapper>

      </FiltersWrapper>
      <MainGridContainer>
        <TopControls>
          <Searchbar />
          {/* Filters */}
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