import { BookForm } from "../form"
import { 
  useBookForm, 
  useBookFormImage } from "../form/form.hooks"
import { useUpdateBook } from "./update.hooks"
import { 
  MainWrapper, 
  Wrapper } from "./update.styled"


const Update = () =>{
  const { data, errors, handleDataChange, handleImageChange, handleUpdateForm, handleSetBookDefaults } = useBookForm()
  const { handleUpdateBook } = useUpdateBook(handleUpdateForm, handleSetBookDefaults, data.id)
  const { imageUrl, handleChangeImageUrl } = useBookFormImage(null)

  return (
    <MainWrapper>
      <Wrapper>
        <h1 className="sr-only">Update book</h1>
        <BookForm 
          book={ data }
          imageUrl={ imageUrl }
          errors={ errors }
          handleFormSubmit={ handleUpdateBook }
          handleDataChange={ handleDataChange }
          handleImageChange={ handleImageChange }
          handleChangeImageUrl={ handleChangeImageUrl }/>
      </Wrapper>
    </MainWrapper>
  )
}


export default Update