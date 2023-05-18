import { Wrapper } from "./failure.styled"


type SuccessProps = {
  children: React.ReactNode
}

const Failure = ({ children }: SuccessProps) => {

  return (
    <Wrapper>
      { children }
    </Wrapper>
  )
}


export default Failure