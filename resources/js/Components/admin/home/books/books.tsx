import { useTrackedState } from "@/store"
import { 
  BookInfoContainter,
  Category,
  Image,
  List, 
  ListItem, 
  Status, 
  Stocks, 
  Table, 
  TableHead, 
  TableRow, 
  Title, 
  Wrapper } from "./books.styled"
import { BooksPaginator } from "@/Components/paginator"
import { useDetectResponsiveness } from "./books.hooks"
import { Link } from "@inertiajs/react"


const Books = () =>{
  const { books } = useTrackedState()
  const isMobile = useDetectResponsiveness()

  const renderBooksList = () => {
    const mappedBooks = books.map(book => (
      <ListItem key={ book.title }>
        <Image
          src={ `storage/books/${ book.image }` }
          alt={ book.title }  />
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

  const renderBooksTableBody = () =>{
    const mappedBooks = books.map(book => (
      <TableRow key={ book.title }>
        <td>
          <input 
            type="checkbox"
            id={ `${ book.id }` }
            name={ `${ book.id }` } />
        </td>
        <td>
          <Image
            src={ `storage/books/${ book.image }` }
            alt={ book.title } />
        </td>
        <td>
          <Title>
            <Link href={ `/admin/edit/${ book.id }` }>{ book.title }</Link>
          </Title>
        </td>
        <td>
          <Category>{ book.category }</Category>
        </td>
        <td>
          <Status isActive={ book.status }>{ book.status }</Status>
        </td>
        <td>
          <Stocks >{ book.stocks } stocks left</Stocks>
        </td>
      </TableRow>
    ))

    return mappedBooks
  }

  return (
    <Wrapper>
      { isMobile && (
        <List>
          { renderBooksList() }
        </List>
      ) }
      { !isMobile && (
        <Table>
          <TableHead>
            <tr>
              <th>
                <input
                  id="select-all"
                  name="select-all" 
                  type="checkbox" />
              </th>
              <th></th>
              <th>Book</th>
              <th>Category</th>
              <th>Status</th>
              <th>Inventory</th>
            </tr>
          </TableHead>
          <tbody>
            { renderBooksTableBody() }
          </tbody>
        </Table>
      ) }
      <BooksPaginator />
    </Wrapper>
  )
}


export default Books