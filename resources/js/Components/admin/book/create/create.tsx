import { 
  MainWrapper, 
  Wrapper } from "./create.styled"
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
    <MainWrapper>
      <h1 className="sr-only">Create book</h1>
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
    </MainWrapper>
  )
}


export default Create