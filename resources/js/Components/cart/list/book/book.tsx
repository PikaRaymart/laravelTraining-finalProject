import { Book as BookType } from "@/Pages/Books/Book"
import { 
  OptionsContainer, 
  Wrapper } from "./book.styled"
import { Price } from "@/Components/shared/book/book.styled"
import {
  Image,
  Author,
  Title } from "@/Components/cart/book/book.styled"
import { BookRemoveOption } from "@/Components/book/options/remove"
import { Link } from "@inertiajs/react"


type BookProps = {
  children: React.ReactNode,
  book: BookType,
  handleRemoveCartBook: ( remove: boolean ) => void
}

const Book = ({ children, book, handleRemoveCartBook }: BookProps) => {

  return (
    <Wrapper>
      <Image
        src={ `/storage/books/${ book.image }` }
        alt={ book.title } />
      <div>
        <Title>
          <Link href={ `/books/${ book.id }` }>{ book.title }</Link>
        </Title>
        <Author>{ book.author }</Author>
        <Price>₱{ book.price.toFixed(2) }</Price>
        <OptionsContainer>
          { children }
          <BookRemoveOption 
            id={ book.id }
            handleRemoveCartBook={ ( remove ) => handleRemoveCartBook(remove) }/>
        </OptionsContainer>
      </div>
    </Wrapper>
  )
}


export default Book