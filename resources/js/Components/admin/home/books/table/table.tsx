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


const Table = () => {
  const { books } = usePageProps<AdminPageProps>()

  const renderBooks = () =>{
    const mappedBooks = books.data.map(book => (
      <TableRow key={ book.title }>
        <td>
          <input 
            type="checkbox"
            id={ `${ book.id }` }
            name={ `${ book.id }` } />
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
        { renderBooks() }
      </tbody>
    </Wrapper>
  )
}


export default Table