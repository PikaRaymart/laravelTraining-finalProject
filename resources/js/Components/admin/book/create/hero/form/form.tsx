import { useForm } from "@inertiajs/react"
import { 
  FormControls,
  FormDiscard,
  FormInnerContainer, 
  FormSave, 
  Input, 
  InputContainer, 
  PhotoContainer, 
  PhotoInnerContainer, 
  PhotoLabel, 
  PhotoNote, 
  Textarea, 
  Wrapper } from "./form.styled"
import InputLabel from "@/Components/InputLabel"


const Form = () =>{
  const {} = useForm()

  return (
    <Wrapper>
      <FormInnerContainer>
        <PhotoContainer>
          <input
            className="sr-only"
            type="file"
            name="photo"
            id="photo" />
          <PhotoInnerContainer>
            <img 
              src="/images/choose-book-photo.png" 
              alt=""
              aria-hidden="true" />
            <p>Choose Book Photo</p>
          </PhotoInnerContainer>
          <PhotoLabel htmlFor="photo">
            <span className="sr-only">Chose book photo</span>
          </PhotoLabel>
        </PhotoContainer>
        <PhotoNote>Make sure to choose a proper image file. Try using a much bigger image so resolution will be fine when viewing a single book.
        </PhotoNote>
        <InputContainer>
          <InputLabel htmlFor="status">Book status</InputLabel>
          <Input
            as="select"
            id="status"
            name="status">
              <option value=""></option>
              <option value="Active">Active</option>
              <option value="Draft">Draft</option>
            </Input>
        </InputContainer>
      </FormInnerContainer>
      <FormInnerContainer>
        <InputContainer>
          <InputLabel htmlFor="status">Book title</InputLabel>
          <Input
            type="text"
            id="title"
            name="title" />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="status">Book author</InputLabel>
          <Input
            type="text"
            id="author"
            name="author" />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="status">Book category</InputLabel>
          <Input
            type="text"
            id="category"
            name="category" />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="quantity">Quantity</InputLabel>
          <Input
            type="number"
            id="quantity"
            name="quantity" />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="price">Price</InputLabel>
          <Input
            type="number"
            id="price"
            name="price" />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="description">Book description</InputLabel>
          <Textarea
            as="textarea"
            id="status"
            name="status"
            rows={5} />
        </InputContainer>
      </FormInnerContainer>
      <FormControls>
        <FormSave type="submit">Save</FormSave>
        <FormDiscard type="button">Discard</FormDiscard>
      </FormControls>
    </Wrapper>
  )
}


export default Form