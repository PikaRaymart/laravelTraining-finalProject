import { BookForm } from "../form"
import { useUpdateBook } from "./update.hooks"
import { Wrapper } from "./update.styled"


const Update = () =>{
  const {} = useUpdateBook()

  return (
    <Wrapper>
      <BookForm />
    </Wrapper>
  )
}


export default Update