import { 
  TableHead, 
  Wrapper } from "./table.styled"


type TableProps = {
  children: React.ReactNode
}

const Table = ({ children }: TableProps) => {

  return (
    <Wrapper>
      <TableHead>
        <tr>
          <th>Books</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Remove</th>
        </tr>
      </TableHead>
      <tbody>
        { children }
      </tbody>
    </Wrapper>
  )
}


export default Table