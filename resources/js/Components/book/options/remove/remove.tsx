import { 
  Label, 
  Wrapper } from "./remove.styled"


type RemoveProps = {
  id: number,
  handleRemoveCartBook: ( remove: boolean ) => void
}

const Remove = ({ id, handleRemoveCartBook }: RemoveProps) =>{

  return (
    <Wrapper >
      <legend className="sr-only">cart book remove</legend>
      <input 
        className="sr-only"
        type="radio"
        id={ id + "-remove" }
        value="true"
        name={ id + "delete" }
        onChange={ () => handleRemoveCartBook(true) }  />
      <Label htmlFor={ id + "-remove" }>
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="10.253" height="10.253" viewBox="0 0 10.253 10.253">
          <g id="remove-red" transform="translate(5.127 -3.359) rotate(45)">
            <line id="Line_8" data-name="Line 8" x2="12" transform="translate(0 6)" fill="none" stroke="#ff4747" strokeLinecap="round" strokeWidth="1.25"/>
            <line id="Line_9" data-name="Line 9" y1="12" transform="translate(6)" fill="none" stroke="#ff4747" strokeLinecap="round" strokeWidth="1.25"/>
          </g>
        </svg>
      </Label>
      <input
        className="sr-only"
        type="radio"
        id={ id + "-undo" }
        value="false"
        name={ id + "delete" }  
        defaultChecked
        onChange={ () => handleRemoveCartBook(false) }/>
      <Label htmlFor={ id + "-undo" }>
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12.171" height="13.508" viewBox="0 0 12.171 13.508">
          <g id="Edit_Undo" data-name="Edit / Undo" transform="translate(-4.168 -2.25)">
            <path id="Vector" d="M8.529,6.529H5V3m.205,9.429a5.647,5.647,0,1,0,.133-6.347" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
          </g>
        </svg>
      </Label>
    </Wrapper>
  )
}


export default Remove