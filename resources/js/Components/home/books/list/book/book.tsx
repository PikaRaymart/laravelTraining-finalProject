import { Book as BookType } from "@/store"
import { 
  Author,
    Image, 
    Price, 
    Title, 
    Wrapper } from "./book.styled"


type BookProps = {
  book: BookType
}

const Book = ({ book }: BookProps) => {

  return (
    <Wrapper>
      <Image
        src={ `/storage/books/${ book.image }` }
        alt={ book.title } />
      <Title>{ book.title }</Title>
      <Author>{ book.author }</Author>
      <Price>₱{ book.price.toFixed(2) }</Price>
    </Wrapper>
  )
}


export default Book