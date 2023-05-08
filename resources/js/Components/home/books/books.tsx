import { 
  SectionHeading, 
  Wrapper } from "./books.styled"
import { BooksList } from "./list"


const Books = () => {

  return(
    <Wrapper>
      <SectionHeading>Just for you</SectionHeading>
      <BooksList />
    </Wrapper>
  )
}


export default Books