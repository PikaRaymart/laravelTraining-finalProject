import { 
  BookInfoContainer, 
  TableRow } from "./book.styled"
import { 
  Image,
  Title,
  Author, 
  OutOfStocks} from "@/Components/cart/book/book.styled"
import { Price } from "@/Components/book/book.styled"
import { BookRemoveOption } from "@/Components/book/options/remove"
import { Link } from "@inertiajs/react"
import { Book as BookType } from "@/Pages/Books/books"


type BookProps = {
  children: React.ReactNode,
  book: BookType,
  handleRemoveCartBook: ( remove: boolean ) => void
}

const Book = ({ children, book, handleRemoveCartBook }: BookProps) => {

  return (
    <TableRow>
      <td>
        <BookInfoContainer>
          <Image
            src={ `/storage/books/${ book.image }` }
            alt={ book.title } />
          <div>
            <Title>
              <Link href={ `/books/${ book.id }` }>{ book.title }</Link>
            </Title>
            <Author>{ book.author }</Author>
            { !(!!book.stocks) && <OutOfStocks>Book out of stocks</OutOfStocks> }
          </div>
        </BookInfoContainer>
      </td>
      <td>
        { children }
      </td>
      <td>
        <Price>₱{ book.price.toFixed(2) }</Price>
      </td>
      <td>
        <BookRemoveOption
          id={ book.id }
          handleRemoveCartBook={ ( remove ) => handleRemoveCartBook(remove) } />
      </td>
    </TableRow>
  )
}


export default Book