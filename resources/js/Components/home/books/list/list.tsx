import { usePageProps } from "@/Hooks/usePageProps"
import { Wrapper } from "./list.styled"
import { HomePageProps } from "@/Pages/Home"
import { BookItem } from "./book"


const List = () =>{
  const { featuredBooks } = usePageProps<HomePageProps>()

  const renderBooks = () => {
    const mappedBooks = featuredBooks.map(book => (
      <BookItem
        key={ book.id } 
        book={ book } />
    ))

    return mappedBooks
  }

  return (
    <Wrapper>
      { renderBooks() }
    </Wrapper>
  )
}


export default List