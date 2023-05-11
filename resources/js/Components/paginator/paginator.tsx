import { 
  LinkItem,
  LinksList, 
  Wrapper } from "./paginator.styled"
import { Link } from "@inertiajs/react"
import { usePageProps } from "@/Hooks/usePageProps"
import { AdminPageProps } from "@/Pages/Admin"


const Paginator = () => {
  const { books } = usePageProps<AdminPageProps>()
  
  const renderLinks = () =>{
    const links = books.meta.links.map((link, index) => (
      <LinkItem 
        key={ `${ index }${ link.url?? "current" }` }
        isActive={ link.active }>
        { link.url && <>
          { !link.active && (
            <Link href={ link.url }>
              { index===0? "<" : 
                index===books.meta.links.length-1? ">" : link.label }
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