import { usePageProps } from "@/Hooks/usePageProps"
import { 
  TableHead, 
  TableRow, 
  Wrapper } from "./table.styled"
import { AdminPageProps } from "@/Pages/Admin"
import { 
  Category, 
  Image, 
  Status, 
  Stocks, 
  Title } from "../books.styled"
import { Link } from "@inertiajs/react"
import { 
  HandleAddIdToDeletion, 
  HandleBulkIdAddition, 
  UseBooksFormData} from "../book.hook"


type TableProps = {
  data: UseBooksFormData,
  handleAddIdToDeletion: HandleAddIdToDeletion,
  handleBulkIdAddition: HandleBulkIdAddition
}

const Table = ({ data, handleAddIdToDeletion, handleBulkIdAddition }: TableProps) => {
  const { books } = usePageProps<AdminPageProps>()

  const renderBooks = () =>{
    const mappedBooks = books.data.map(book => (
      <TableRow key={ book.title }>
        <td>
          <label
            className="sr-only" 
            htmlFor={ `${book.id}` }>add { book.title } for deletion</label>
          <input 
            type="checkbox"
            id={ `${ book.id }` }
            name={ `${ book.id }` }
            checked={ !!data.bookIds.find(bookId => bookId===book.id) }
            onChange={ () => handleAddIdToDeletion(book.id) } />
        </td>
        <td>
          { book.image && (
            <Image
              src={ `storage/books/${ book.image }` }
              alt={ book.title } />
          ) }
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
      <TableHead>
        <tr>
          <th>
            <label
              className="sr-only" 
              htmlFor="select-all">add all books for deletion</label>
            <input
              id="select-all"
              name="select-all" 
              type="checkbox"
              onChange={ event => handleBulkIdAddition(event, books.data.reduce((accu, curr) => accu.concat(curr.id), [] as number[])) } />
          </th>
          <th></th>
          <th>Book</th>
          <th>Category</th>
          <th>Status</th>
          <th>Inventory</th>
        </tr>
      </TableHead>
      <tbody>
        { renderBooks() }
      </tbody>
    </Wrapper>
  )
}


export default Table