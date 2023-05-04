import { useTrackedState } from "@/store"
import { 
  BookInfoContainter,
  Category,
  Image,
  List, 
  ListItem, 
  Status, 
  Stocks, 
  Title, 
  Wrapper } from "./books.styled"
import { BooksPaginator } from "@/Components/paginator"


const Books = () =>{
  const { books } = useTrackedState()

  const renderBooksList = () => {
    const mappedBooks = books.map(book => (
      <ListItem key={ book.title }>
        <Image
          src={ `storage/books/${ book.image }` }
          alt={ book.title }  />
        <BookInfoContainter>
          <Title>{ book.title }</Title>
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
      <List>
        { renderBooksList() }
      </List>
      <BooksPaginator />
    </Wrapper>
  )
}


export default Books