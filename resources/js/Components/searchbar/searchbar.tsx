import { 
  SearchInput,
  Wrapper,
 } from "./searchbar.styled"


const Searchbar = () =>{

  return (
    <Wrapper>
      <label
        className="sr-only" 
        htmlFor="search">Search for book or category</label>
      <SearchInput
        id="search"
        name="search"
        placeholder="Search for books or categories" />
    </Wrapper>
  )
}


export default Searchbar