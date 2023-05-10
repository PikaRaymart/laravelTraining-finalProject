import { Book as BookType } from "@/store"
import { 
  Author,
  Image, 
  OptionsContainer, 
  RemoveBook, 
  RemoveLabel, 
  Title, 
  Wrapper } from "./book.styled"
import { Price } from "@/Components/shared/book/book.styled"
import { 
  QuantityButton, 
  QuantityWrapper } from "@/Components/book/options/options.styled"
import { 
  HandleChangeCartQuantity, 
  HandleRemoveCartBook } from "../../cart.hooks"


type BookProps = {
  book: BookType,
  quantity: number,
  handleChangeCartQuantity: ( quantity: number ) => void,
  handleRemoveCartBook: HandleRemoveCartBook
}

const Book = ({ book, quantity, handleChangeCartQuantity, handleRemoveCartBook }: BookProps) => {

  return (
    <Wrapper>
      <Image
        src={ `/storage/books/${ book.image }` }
        alt={ book.title } />
      <div>
        <Title>{ book.title }</Title>
        <Author>{ book.author }</Author>
        <Price>₱{ book.price.toFixed(2) }</Price>
        <OptionsContainer>
          <QuantityWrapper isSmall={ true }>
            <QuantityButton 
              onClick={ () => !(quantity-1 < 1)? handleChangeCartQuantity(quantity-1) : null }
              aria-disabled={ quantity-1<1 }>
              <span className="sr-only">remove 1 order</span>
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="13.25" height="1.25" viewBox="0 0 13.25 1.25">
                <line id="subtract" x2="12" transform="translate(0.625 0.625)" fill="none" stroke="#404548" strokeLinecap="round" strokeWidth="1.25"/>
              </svg>
            </QuantityButton>
            { quantity }
            <QuantityButton 
              onClick={ () => !(quantity+1 > book.stocks)? handleChangeCartQuantity(quantity+1) : null }
              aria-disabled={ quantity+1>book.stocks }>
              <span className="sr-only">add 1 order</span>
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="13.25" height="13.25" viewBox="0 0 13.25 13.25">
                <g id="quantity-add" transform="translate(-713.875 -688.875)">
                  <line id="Line_8" data-name="Line 8" x2="12" transform="translate(714.5 695.5)" fill="none" stroke="#404548" strokeLinecap="round" strokeWidth="1.25"/>
                  <line id="Line_9" data-name="Line 9" y1="12" transform="translate(720.5 689.5)" fill="none" stroke="#404548" strokeLinecap="round" strokeWidth="1.25"/>
                </g>
              </svg>
            </QuantityButton>
          </QuantityWrapper>
          <RemoveBook>
            <input 
              className="sr-only"
              type="radio"
              id={ book.id + "-remove" }
              name={ book.id + "delete" } />
            <RemoveLabel htmlFor={ book.id + "-remove" }>
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="10.253" height="10.253" viewBox="0 0 10.253 10.253">
                <g id="remove-red" transform="translate(5.127 -3.359) rotate(45)">
                  <line id="Line_8" data-name="Line 8" x2="12" transform="translate(0 6)" fill="none" stroke="#ff4747" strokeLinecap="round" strokeWidth="1.25"/>
                  <line id="Line_9" data-name="Line 9" y1="12" transform="translate(6)" fill="none" stroke="#ff4747" strokeLinecap="round" strokeWidth="1.25"/>
                </g>
              </svg>
            </RemoveLabel>
            <input
              className="sr-only"
              type="radio"
              id={ book.id + "-undo" }
              name={ book.id + "delete" } 
              defaultChecked/>
            <RemoveLabel htmlFor={ book.id + "-undo" }>
              <svg xmlns="http://www.w3.org/2000/svg" width="12.171" height="13.508" viewBox="0 0 12.171 13.508">
                <g id="Edit_Undo" data-name="Edit / Undo" transform="translate(-4.168 -2.25)">
                  <path id="Vector" d="M8.529,6.529H5V3m.205,9.429a5.647,5.647,0,1,0,.133-6.347" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                </g>
              </svg>
            </RemoveLabel>
          </RemoveBook>
        </OptionsContainer>
      </div>
    </Wrapper>
  )
}


export default Book