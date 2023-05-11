import { Book as BookType } from "@/Pages/Books/Book"
import { Image, Wrapper } from "./book.styled"
import { 
  Author, 
  Title,
  Price } from "@/Components/shared/book/book.styled"
import { Link } from "@inertiajs/react"


type BookProps = {
  book: BookType
}

const Book = ({ book }: BookProps) => {

  return (
    <Wrapper>
      <Image
        src={ `/storage/books/${ book.image }` }
        alt={ book.title } />
      <Title>
        <Link href={ `/books/${ book.id }` }>
          { book.title }
        </Link>
      </Title>
      <Author>{ book.author }</Author>
      <Price>₱{ book.price.toFixed(2) }</Price>
    </Wrapper>
  )
}


export default Book