import { 
  HandleFormSubmit, 
  HandlePostForm } from "../form/form.hooks"


export const useCreateBook = ( handlePostForm: HandlePostForm ) =>{

  const handleCreateBook: HandleFormSubmit = ( event ) =>{
    event.preventDefault()
    handlePostForm("/admin/store")
  }

  return {
    handleCreateBook
  }
}