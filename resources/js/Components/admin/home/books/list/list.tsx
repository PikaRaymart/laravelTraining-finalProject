import { usePageProps } from "@/Hooks/usePageProps"
import { 
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


const List = () => {
  const { books } = usePageProps<AdminPageProps>()

  const renderBooks = () => {
    const mappedBooks = books.data.map(book => (
      <ListItem key={ book.title }>
        { book.image && (
          <Image
            src={ `storage/books/${ book.image }` }
            alt={ book.title }  />
        ) }
        <BookInfoContainter>
          <Title>
            <Link href={ `/admin/edit/${ book.id }` }>{ book.title }</Link>
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