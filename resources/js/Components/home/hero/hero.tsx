import { 
  HeroDescription,
  HeroMainHeading,
  InnerWrapper, 
  Wrapper } from "./hero.styled"


const Hero = () => {

  return (
    <Wrapper>
      <InnerWrapper>
        <HeroMainHeading>
          Discover Your Next Favorite Book on  
          <span> PlumeBooks</span>
        </HeroMainHeading>
        <HeroDescription> Welcome to PlumeBooks, the ultimate destination for book lovers! Browse our vast collection of books across various genres, including fiction, non-fiction, self-help, and more. With our user-friendly interface, finding your next favorite read has never been easier. Shop now and immerse yourself in the world of literature.</HeroDescription>
      </InnerWrapper>
    </Wrapper>
  )
}


export default Hero