import { 
  DeleteButton,
  DeleteContainer, 
  Wrapper } from "./books.styled"
import { BooksPaginator } from "@/Components/paginator"
import { useDetectResponsiveness } from "@/Hooks/useDetectResponsiveness"
import { BooksTable } from "./table"
import { BooksList } from "./list"
import { useBooks } from "./book.hook"


const Books = () =>{
  const isMobile = useDetectResponsiveness()
  const { data, handleDeleteBooks, handleAddIdToDeletion, handleBulkIdAddition } = useBooks()

  return (
    <Wrapper>
      <form onSubmit={ handleDeleteBooks }>
        { !!data.bookIds.length && (
          <DeleteContainer>
            <DeleteButton type="submit">Delete</DeleteButton>
          </DeleteContainer>
        ) }
      </form>
      { isMobile && <BooksList /> }
      { !isMobile && (
        <BooksTable
          data={ data }
          handleBulkIdAddition={ handleBulkIdAddition } 
          handleAddIdToDeletion={ handleAddIdToDeletion } />
      ) }
      <BooksPaginator />
    </Wrapper>
  )
}


export default Books