import { 
  RemoveFilterDesktop, 
  ShowFiltersDesktop } from "../admin/home/home.styled"
import { Filters } from "../filters"
import { Searchbar } from "../searchbar"
import { 
  MainGridContainer, 
  MainWrapper, 
  TopControls} from "./books.styled"
import { BooksList } from "./list"


const Books = () => {

  return (
    <MainWrapper>
      <h1 className="sr-only">Books collection</h1>
      <ShowFiltersDesktop>
        <Filters />
      </ShowFiltersDesktop>
      <MainGridContainer>
        <TopControls>
          <Searchbar />
          <RemoveFilterDesktop>
            <Filters />
          </RemoveFilterDesktop>
        </TopControls>
        <BooksList />
      </MainGridContainer>
    </MainWrapper>
  )
}


export default Books