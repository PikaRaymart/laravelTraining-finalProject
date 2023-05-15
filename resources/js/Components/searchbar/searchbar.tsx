import { useSearchbar } from "./searchbar.hook"
import { 
  ClearSearchbar,
  SearchInput,
  Wrapper,
 } from "./searchbar.styled"


type SearhbarProps = {
  url: string
}

const Searchbar = ({ url }: SearhbarProps) =>{
  const {
    data,
    handleFormSubmit,
    handleSearchInput,
    handleResetSearchbar
  } = useSearchbar(url)

  return (
    <Wrapper onSubmit={ handleFormSubmit }>
      <label
        className="sr-only" 
        htmlFor="search">Search for books</label>
      <SearchInput
        id="search"
        name="search"
        value={ data.searchItem }
        placeholder="Search for books"
        onChange={ handleSearchInput } />
      <ClearSearchbar
        type="button"
        onClick={ handleResetSearchbar }>
        <img 
          src="/images/icons/hamburger-close.png" 
          alt=""
          aria-hidden="true" />
        <span className="sr-only">reset searchbar</span>
      </ClearSearchbar>
    </Wrapper>
  )
}


export default Searchbar