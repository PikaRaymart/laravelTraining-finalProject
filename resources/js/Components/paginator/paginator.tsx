import { useTrackedState } from "@/store"
import { 
  LinkItem,
  LinksList, 
  Wrapper } from "./paginator.styled"
import { Link } from "@inertiajs/react"


const Paginator = () => {
  const { booksMetaData } = useTrackedState()
  
  const renderLinks = () =>{
    const links = booksMetaData?.meta.links.map((link, index) => (
      <LinkItem 
        key={ `${ index }${ link.url?? "current" }` }
        isActive={ link.active }>
        { link.url && <>
          { !link.active && (
            <Link href={ link.url }>
              { index===0? "<" : 
                index===booksMetaData.meta.links.length-1? ">" : link.label }
            </Link>
          ) }
          { link.active && link.label }
        </> }
        { !link.url && (index===0? "<" : ">") }
      </LinkItem>
    ))

    return links?? []
  }

  return (
    <Wrapper aria-label="Books paginator">
      <LinksList>
        { renderLinks() }
      </LinksList>
    </Wrapper>
  )
}


export default Paginator