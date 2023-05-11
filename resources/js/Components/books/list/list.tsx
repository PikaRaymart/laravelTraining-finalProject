import { Wrapper } from "./list.styled"
import { BookItem } from "./book"
import { BooksPaginator } from "@/Components/paginator"
import { usePageProps } from "@/Hooks/usePageProps"
import { BooksPageProps } from "@/Pages/Books"


const List = () => {
  const { books } = usePageProps<BooksPageProps>()

  const renderBooks = () => {
    const mappedBooks = books.data.map(book => (
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