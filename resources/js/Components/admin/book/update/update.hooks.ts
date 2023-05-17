import { useEffect } from "react"
import { 
  HandleFormSubmit, 
  HandleSetBookDefaults, 
  HandleUpdateform} from "../form/form.hooks"
import { usePage } from "@inertiajs/react"
import { 
  formDraftValidity, 
  formValidity } from "../form/helpers"
import { Book } from "@/Pages/Books/books"


type PageProps = {
  book: Partial<Book>
}

export const useUpdateBook = ( handleUpdateForm: HandleUpdateform, handleSetBookDefaults: HandleSetBookDefaults, id?: number,  ) =>{
  const { book } = usePage<PageProps>().props

  const handleUpdateBook: HandleFormSubmit = ( event, book ) =>{
    event.preventDefault()

    if ( !id || ( book.status==="Active" && !formValidity(book) ) || !formDraftValidity(book) ) return
    
    handleUpdateForm(`/books/update/${ id }`)
  }

  useEffect(() =>{
    if ( book ) {
      handleSetBookDefaults(book)
    }
  }, [ book ])

  return {
    handleUpdateBook
  }
}