import { 
  DeleteButton,
  DeleteContainer, 
  Wrapper } from "./books.styled"
import { BooksPaginator } from "@/Components/paginator"
import { useDetectResponsiveness } from "@/Hooks/useDetectResponsiveness"
import { BooksTable } from "./table"
import { BooksList } from "./list"
import { useBooks } from "./book.hook"
import { ToastSuccess } from "@/Components/toast/success"
import { usePageProps } from "@/Hooks/usePageProps"


const Books = () =>{
  const isMobile = useDetectResponsiveness()
  const { 
    data, 
    handleDeleteBooks, 
    handleAddIdToDeletion, 
    handleBulkIdAddition,
    wasSuccessful } = useBooks()
  const { flash } = usePageProps()

  return (
    <Wrapper>
      { wasSuccessful && <ToastSuccess>{ flash.success }</ToastSuccess> }
      <form onSubmit={ handleDeleteBooks }>
        { !!data.bookIds.length && (
          <DeleteContainer>
            <DeleteButton type="submit">Delete</DeleteButton>
          </DeleteContainer>
        ) }
      </form>
      { isMobile && (
        <BooksList
          data={ data }
          handleBulkIdAddition={ handleBulkIdAddition } 
          handleAddIdToDeletion={ handleAddIdToDeletion } />
      ) }
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