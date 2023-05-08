import { BookForm } from "../form"
import { 
  useBookForm, 
  useBookFormImage } from "../form/form.hooks"
import { useUpdateBook } from "./update.hooks"
import { Wrapper } from "./update.styled"


const Update = () =>{
  const { data, errors, handleDataChange, handleImageChange, handleUpdateForm, handleSetBookDefaults } = useBookForm()
  const { handleUpdateBook } = useUpdateBook(handleUpdateForm, handleSetBookDefaults, data.id)
  const { imageUrl, handleChangeImageUrl } = useBookFormImage(null)

  return (
    <Wrapper>
      <BookForm 
        book={ data }
        imageUrl={ imageUrl }
        errors={ errors }
        handleFormSubmit={ handleUpdateBook }
        handleDataChange={ handleDataChange }
        handleImageChange={ handleImageChange }
        handleChangeImageUrl={ handleChangeImageUrl }/>
    </Wrapper>
  )
}


export default Update