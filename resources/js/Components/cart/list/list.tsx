import { 
  ListWrapper, 
  SectionHeading, 
  Wrapper } from "./list.styled"


type ListProps = {
  children: React.ReactNode
}

const List = ({ children }: ListProps) => {

  return (
    <Wrapper>
      <SectionHeading>Books</SectionHeading>
      <ListWrapper>
        { children }
      </ListWrapper>
    </Wrapper>
  )
}


export default List