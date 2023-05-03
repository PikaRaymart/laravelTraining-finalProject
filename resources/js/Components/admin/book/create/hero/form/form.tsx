import { useForm } from "@inertiajs/react"
import { 
  FormControls,
  FormDiscard,
  FormError,
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
import { FormEvent, useCallback } from "react"
import { Book } from "@/store"


const Form = () =>{
  const { data, post, setData, errors } = useForm<Book>({
    title: "",
    author: "",
    description: "",
    category: "",
    image: null,
    price: 0,
    stocks: 0,
    status: ""
  })

  const handleFormSubmit = ( event: FormEvent ) => {
    event.preventDefault()

    const formData = new FormData()

    for (const [key, val] of Object.entries(data)) {
      if ( val && (typeof val ==="string" || val instanceof Blob ) ) {
        formData.append(key, val)
      }
    }

    post("/admin/store")
  } 
  
  const checkErrors = ( e: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement, name: keyof typeof errors ) => {
    if ( errors[name] ) {
      e.setAttribute("aria-invalid", "true")
      e.setAttribute("aria-describedBy", `${ name }-error`)
    } else {
      e.removeAttribute("aria-invalid")
      e.removeAttribute("aria-describedBy")
    }
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
            ref={ e => e && checkErrors(e, "status") }
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
            ref={ e => e && checkErrors(e, "title") }
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
            ref={ e => e && checkErrors(e, "author") }
            onChange={ e => setData("author", e.target.value) } />
          { errors.author && <FormError id="author-error">{ errors.author }</FormError> }
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="status">Book category</InputLabel>
          <Input
            type="text"
            id="category"
            name="category"
            value={ data.category }
            ref={ e => e && checkErrors(e, "category") }
            onChange={ e => setData("category", e.target.value) } />
          { errors.category && <FormError id="category-error">{ errors.category }</FormError> }
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="quantity">Stocks</InputLabel>
          <Input
            type="number"
            id="stocks"
            name="stocks"
            value={ data.stocks??0 }
            ref={ e => e && checkErrors(e, "stocks") }
            onChange={ e => setData("stocks", parseInt(e.target.value)) } />
          { errors.stocks && <FormError id="stocks-error">{ errors.stocks }</FormError> }
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="price">Price</InputLabel>
          <Input
            type="number"
            id="price"
            name="price"
            value={ data.price??0 }
            ref={ e => e && checkErrors(e, "price") }
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
            ref={ e => e && checkErrors(e, "description") }
            onChange={ e => setData("description", e.target.value) } />
          { errors.description && <FormError id="description-error">{ errors.description }</FormError> }
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