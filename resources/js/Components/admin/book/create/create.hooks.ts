import { 
  HandleFormSubmit, 
  HandlePostForm } from "../form/form.hooks"
import { formDraftValidity, formValidity } from "../form/helpers"


export const useCreateBook = ( handlePostForm: HandlePostForm ) =>{

  const handleCreateBook: HandleFormSubmit = ( event, book ) =>{
    event.preventDefault()

    if ( ( book.status==="Active" && !formValidity(book) ) || !formDraftValidity(book) ) return

    handlePostForm("/admin/store")
  }

  return {
    handleCreateBook
  }
}