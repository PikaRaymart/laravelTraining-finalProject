import { useTrackedState } from "@/store"
import { Wrapper } from "./list.styled"
import { BookItem } from "./book"
import { BooksPaginator } from "@/Components/paginator"


const List = () => {
  const { books } = useTrackedState()

  const renderBooks = () => {
    const mappedBooks = books.map(book => (
      <BookItem
        key={ book.id }
        book={ book } />
    )) 

    return mappedBooks
  }

  return (
    <>
      <Wrapper>
        { renderBooks() }
      </Wrapper>
      <BooksPaginator />
    </>
  )
}


export default List