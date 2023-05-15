import { Filters } from "@/Components/filters"
import { 
  CreateBookLink,
  MainGridContainer,
  MainWrapper, 
  RemoveFilterDesktop, 
  ShowFiltersDesktop, 
  TopControls} from "./home.styled"
import { Searchbar } from "@/Components/searchbar"
import { Link } from "@inertiajs/react"
import { BooksList } from "./books"
import { usePageProps } from "@/Hooks/usePageProps"
import { ToastSuccess } from "@/Components/toast/success"


const Home = () => {
  const { flash } = usePageProps() 

  return (
    <MainWrapper>
      { !!flash.success && <ToastSuccess>{ flash.success }</ToastSuccess> }
      <ShowFiltersDesktop>
        <Filters url="/admin" />
      </ShowFiltersDesktop>
      <MainGridContainer>
        <TopControls>
          <Searchbar url="/admin" />
          <RemoveFilterDesktop>
            <Filters url="/admin" />
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
        <BooksList />
      </MainGridContainer>
    </MainWrapper>
  )
}


export default Home