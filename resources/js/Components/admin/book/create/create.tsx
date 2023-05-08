import { Wrapper } from "./create.styled"
import { BookForm } from "../form"
import { 
  useBookForm, 
  useBookFormImage } from "../form/form.hooks"
import { useCreateBook } from "./create.hooks"


const Create = () => {
  const { data, errors, handleDataChange, handleImageChange, handlePostForm } = useBookForm()
  const { handleCreateBook } = useCreateBook(handlePostForm)
  const { imageUrl, handleChangeImageUrl } = useBookFormImage(null)

  return (
    <Wrapper>
      <BookForm
        book={ data }
        imageUrl={ imageUrl }
        errors={ errors }
        handleFormSubmit={ handleCreateBook }
        handleDataChange={ handleDataChange }
        handleImageChange={ handleImageChange }
        handleChangeImageUrl={ handleChangeImageUrl }/>
    </Wrapper>
  )
}


export default Create