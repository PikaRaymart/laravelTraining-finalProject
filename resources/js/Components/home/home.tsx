import { HomeBooksSection } from "./books"
import { HomeHeroSection } from "./hero"
import { MainWrapper } from "./home.styled"


const Home = () => {

  return (
    <MainWrapper>
      <HomeHeroSection />
      <HomeBooksSection />
    </MainWrapper>
  )
}


export default Home