import { useTrackedState } from "@/store"
import { Wrapper } from "./list.styled"
import { BookItem } from "./book"


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
    <Wrapper>
      { renderBooks() }
    </Wrapper>
  )
}


export default List