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
import { 
  checkErrors, 
  formDraftValidity, 
  formValidity } from "./helpers"
import { 
  HandleDataChange, 
  HandleFormSubmit, 
  HandleImageChange } from "./form.hooks"
import { Book } from "@/Pages/Books/Book"

type FormProps = {
  book: Omit<Book, "id">,
  imageUrl: string,
  errors: Partial<Record<keyof Book, string>>,
  handleFormSubmit: HandleFormSubmit,
  handleDataChange: HandleDataChange,
  handleImageChange: HandleImageChange,
  handleChangeImageUrl: HandleImageChange
}

const Form = ({ 
  book, 
  imageUrl,
  errors,
  handleFormSubmit,
  handleImageChange,
  handleDataChange,
  handleChangeImageUrl
}: FormProps) =>{

  return (
    <Wrapper onSubmit={ event => handleFormSubmit(event, book) }>
      <FormInnerContainer>
        <PhotoContainer hasImage={ !!book.image }>
          <input
            className="sr-only"
            type="file"
            name="image"
            id="image"
            onChange={ event => {
              handleImageChange(event)
              handleChangeImageUrl(event)
            } } />
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
              alt={ book.title?? "" } /> }
            { typeof book.image==="string" && !imageUrl && <FloatingPhoto
              src={ `/storage/books/${ book.image }` }
              alt={ book.title?? "" } /> }
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
            value={ book.status }
            ref={ e => e && checkErrors(e, "status", errors.status) }
            onChange={ event => handleDataChange(event.target.value, "status") }>
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
            value={ book.title }
            ref={ e => e && checkErrors(e, "title", errors.title, ) }
            onChange={ event => handleDataChange(event.target.value, "title") } />
          { errors.title && <FormError id="title-error">{ errors.title }</FormError> }
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="status">Book author</InputLabel>
          <Input
            type="text"
            id="author"
            name="author"
            value={ book.author }
            ref={ e => e && checkErrors(e, "author", errors.author) }
            onChange={ event => handleDataChange(event.target.value, "author") } />
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
            value={ book.category }
            ref={ e => e && checkErrors(e, "category", errors.category) }
            onChange={ event => handleDataChange(event.target.value, "category") } />
          { errors.category && <FormError id="category-error">{ errors.category }</FormError> }
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="quantity">Stocks</InputLabel>
          <Input
            type="number"
            id="stocks"
            name="stocks"
            min="1"
            value={ book.stocks??0 }
            ref={ e => e && checkErrors(e, "stocks", errors.stocks) }
            onChange={ event => handleDataChange(event.target.value, "stocks") } />
          { errors.stocks && <FormError id="stocks-error">{ errors.stocks }</FormError> }
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="price">Price</InputLabel>
          <Input
            type="number"
            id="price"
            name="price"
            min="1"
            value={ book.price??0 }
            ref={ e => e && checkErrors(e, "price", errors.price) }
            onChange={ event => handleDataChange(event.target.value, "price") } />
          { errors.price && <FormError id="price-error">{ errors.price }</FormError> }
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="description">Book description</InputLabel>
          <Textarea
            as="textarea"
            id="status"
            name="status"
            rows={5}
            value={ book.description }
            ref={ e => e && checkErrors(e, "description", errors.description) }
            onChange={ event => handleDataChange(event.target.value, "description") } />
          { errors.description && <FormError id="description-error">{ errors.description }</FormError> }
        </InputContainer>
      </FormInnerContainer>
      <FormControls>
        <FormSave
          notAvailable={ !book.status || (book.status==="Active" && !formValidity(book)) || !formDraftValidity(book) } 
          type="submit"
          aria-disabled={ !book.status || (book.status==="Active" && !formValidity(book)) || !formDraftValidity(book) }>Save
        </FormSave>
        <FormDiscard type="button">Discard</FormDiscard>
      </FormControls>
    </Wrapper>
  )
}


export default Form