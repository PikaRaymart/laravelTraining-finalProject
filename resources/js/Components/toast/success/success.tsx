import { Wrapper } from "./success.styled"


type SuccessProps = {
  children: React.ReactNode
}

const Success = ({ children }: SuccessProps) => {

  return (
    <Wrapper>
      { children }
    </Wrapper>
  )
}


export default Success