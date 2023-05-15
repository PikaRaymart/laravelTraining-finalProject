import { useSearchbar } from "./searchbar.hook"
import { 
  SearchInput,
  Wrapper,
 } from "./searchbar.styled"


const Searchbar = () =>{
  const {
    data,
    handleFormSubmit,
    handleSearchInput
  } = useSearchbar()

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
    </Wrapper>
  )
}


export default Searchbar