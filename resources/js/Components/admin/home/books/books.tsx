import { Wrapper } from "./books.styled"
import { BooksPaginator } from "@/Components/paginator"
import { useDetectResponsiveness } from "@/Hooks/useDetectResponsiveness"
import { BooksTable } from "./table"
import { BooksList } from "./list"


const Books = () =>{
  const isMobile = useDetectResponsiveness()

  return (
    <Wrapper>
      { isMobile && <BooksList /> }
      { !isMobile && <BooksTable /> }
      <BooksPaginator />
    </Wrapper>
  )
}


export default Books