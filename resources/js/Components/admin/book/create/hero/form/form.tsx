import { useForm } from "@inertiajs/react"
import { 
  FloatingPhoto,
  FormControls,
  FormDiscard,
  FormError,
  FormInnerContainer, 
  FormSave, 
  Input, 
  InputLabel,
  InputContainer, 
  PhotoContainer, 
  PhotoInnerContainer, 
  PhotoLabel, 
  PhotoNote, 
  Textarea, 
  Wrapper } from "./form.styled"
import { FormEvent } from "react"
import { Book } from "@/store"
import { 
  checkErrors, 
  formDraftValidity, 
  formValidity } from "./helpers"
import { useBookImage } from "./form.hooks"


const Form = () =>{
  const { data, post, setData, errors } = useForm<Book>({
    title: "",
    author: "",
    description: "",
    category: "",
    image: null,
    price: 1,
    stocks: 1,
    status: ""
  })
  const imageUrl = useBookImage(data.image)

  const handleFormSubmit = ( event: FormEvent ) => {
    event.preventDefault()

    if ( ( data.status==="Active" && !formValidity(data) ) || !formDraftValidity(data) ) return
   
    post("/admin/store", {
      forceFormData: true
    })
  }

  return (
    <Wrapper onSubmit={ handleFormSubmit }>
      <FormInnerContainer>
        <PhotoContainer>
          <input
            className="sr-only"
            type="file"
            name="image"
            id="image"
            onChange={ e => setData("image", e.target.files? e.target.files[0] : null) } />
          <PhotoInnerContainer>
            <img 
              src="/images/choose-book-photo.png" 
              alt=""
              aria-hidden="true" />
            <p>Choose Book Photo</p>
          </PhotoInnerContainer>
          <PhotoLabel htmlFor="image">
            <span className="sr-only">Chose book photo</span>
            { imageUrl && <FloatingPhoto
              src={ imageUrl }
              alt={ data.title?? "" } /> }
          </PhotoLabel>
        </PhotoContainer>
        <PhotoNote>Make sure to choose a proper image file. Try using a much bigger image so resolution will be fine when viewing a single book.
        </PhotoNote>
        <InputContainer>
          <InputLabel htmlFor="status">Book status</InputLabel>
          <Input
            as="select"
            id="status"
            name="status"
            value={ data.status }
            ref={ e => e && checkErrors(e, "status", errors.status) }
            onChange={ e => setData("status", e.target.value) }>
              <option value=""></option>
              <option value="Active">Active</option>
              <option value="Draft">Draft</option>
            </Input>
          { errors.status && <FormError id="status-error">{ errors.status }</FormError> }
        </InputContainer>
      </FormInnerContainer>
      <FormInnerContainer>
        <InputContainer>
          <InputLabel htmlFor="status">Book title</InputLabel>
          <Input
            type="text"
            id="title"
            name="title"
            value={ data.title }
            ref={ e => e && checkErrors(e, "title", errors.title, ) }
            onChange={ e => setData("title", e.target.value) } />
          { errors.title && <FormError id="title-error">{ errors.title }</FormError> }
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="status">Book author</InputLabel>
          <Input
            type="text"
            id="author"
            name="author"
            value={ data.author }
            ref={ e => e && checkErrors(e, "author", errors.author) }
            onChange={ e => setData("author", e.target.value) } />
          { errors.author && <FormError id="author-error">{ errors.author }</FormError> }
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="status">
            Book category
            <span> (comma separate for multiple categories)</span>
          </InputLabel>
          <Input
            type="text"
            id="category"
            name="category"
            value={ data.category }
            ref={ e => e && checkErrors(e, "category", errors.category) }
            onChange={ e => setData("category", e.target.value) } />
          { errors.category && <FormError id="category-error">{ errors.category }</FormError> }
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="quantity">Stocks</InputLabel>
          <Input
            type="number"
            id="stocks"
            name="stocks"
            min="1"
            value={ data.stocks??0 }
            ref={ e => e && checkErrors(e, "stocks", errors.stocks) }
            onChange={ e => setData("stocks", parseInt(e.target.value)) } />
          { errors.stocks && <FormError id="stocks-error">{ errors.stocks }</FormError> }
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="price">Price</InputLabel>
          <Input
            type="number"
            id="price"
            name="price"
            min="1"
            value={ data.price??0 }
            ref={ e => e && checkErrors(e, "price", errors.price) }
            onChange={ e => setData("price", parseInt(e.target.value)) } />
          { errors.price && <FormError id="price-error">{ errors.price }</FormError> }
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="description">Book description</InputLabel>
          <Textarea
            as="textarea"
            id="status"
            name="status"
            rows={5}
            value={ data.description }
            ref={ e => e && checkErrors(e, "description", errors.description) }
            onChange={ e => setData("description", e.target.value) } />
          { errors.description && <FormError id="description-error">{ errors.description }</FormError> }
        </InputContainer>
      </FormInnerContainer>
      <FormControls>
        <FormSave
          notAvailable={ !data.status || (data.status==="Active" && !formValidity(data)) || !formDraftValidity(data) } 
          type="submit"
          aria-disabled={ !data.status || (data.status==="Active" && !formValidity(data)) || !formDraftValidity(data) }>Save
        </FormSave>
        <FormDiscard type="button">Discard</FormDiscard>
      </FormControls>
    </Wrapper>
  )
}


export default Form