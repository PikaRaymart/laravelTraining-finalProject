import { usePageProps } from "@/Hooks/usePageProps"
import { 
  InputContainer,
  ListItem, 
  Wrapper } from "./list.styled"
import { AdminPageProps } from "@/Pages/Admin"
import { 
  BookInfoContainter, 
  Category, 
  Image, 
  Status, 
  Stocks, 
  Title } from "../books.styled"
import { Link } from "@inertiajs/react"
import { 
  HandleAddIdToDeletion, 
  HandleBulkIdAddition, 
  UseBooksFormData } from "../book.hook"


type ListProps = {
  data: UseBooksFormData,
  handleAddIdToDeletion: HandleAddIdToDeletion,
  handleBulkIdAddition: HandleBulkIdAddition
}

const List = ({ data, handleAddIdToDeletion, handleBulkIdAddition }: ListProps) => {
  const { books } = usePageProps<AdminPageProps>()

  const renderBooks = () => {
    const mappedBooks = books.data.map(book => (
      <ListItem key={ book.title }>
        <InputContainer>
          <label
            className="sr-only" 
            htmlFor={ `${book.id}` }>add { book.title } for deletion
          </label>
          <input 
            type="checkbox"
            id={ `${ book.id }` }
            name={ `${ book.id }` }
            checked={ !!data.bookIds.find(bookId => bookId===book.id) }
            onChange={ () => handleAddIdToDeletion(book.id) } />
        </InputContainer>
        { book.image && (
          <Image
            src={ `storage/books/${ book.image }` }
            alt={ book.title }  />
        ) }
        <BookInfoContainter>
          <Title>
            <Link href={ `/books/edit/${ book.id }` }>{ book.title }</Link>
          </Title>
          <Category>{ book.category }</Category>
          <Stocks>{ book.stocks } stocks left</Stocks>
        </BookInfoContainter>
        <Status isActive={ book.status }>{ book.status }</Status>
      </ListItem>
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