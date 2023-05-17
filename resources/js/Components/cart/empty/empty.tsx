import { 
  Image, 
  SubHeading, 
  Wrapper } from "./empty.styled"


const Empty = () =>{

  return (
    <Wrapper>
      <Image
        src="/images/empty-cart.png"
        alt=""
        aria-hidden="true" />
      <SubHeading>Ooops. Looks like your cart is empty</SubHeading>
    </Wrapper>
  )
}


export default Empty