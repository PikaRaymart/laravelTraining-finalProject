import { Dispatch } from "react"
import { createContainer } from "react-tracked"
import { useImmerReducer } from "use-immer"

  
export type BooksFilters = {
  categories: string[]
}

export type Book = {
  title: string,
  author: string,
  description: string,
  image: File | null,
  status: string,
  category: string,
  stocks: number,
  price: number
}

type Draft = {
  reactTracked: boolean,
  booksFilters: BooksFilters,
  books: Book[],
  featuredBooks: Book[]
}

type Action = |
  { type: "START_TRACKING" } |
  { type: "SET_BOOKS_FILTERS", payload: BooksFilters }

const reducer = ( draft: Draft, action: Action ) => {
  
  switch(action.type) {
    case "START_TRACKING":
      
      return
    
    case "SET_BOOKS_FILTERS": 
      draft.booksFilters = action.payload

      return
    default:
      return draft
  } 
}

const initialState: Draft = {
  reactTracked: true,
  booksFilters: {
    categories: []
  },
  books: [],
  featuredBooks: []
}

const useValue = (): [ Draft, Dispatch<Action> ] => {
  const [ state, dispatch ] = useImmerReducer(reducer, initialState)

  return [ state, dispatch ]
}

export const {
  Provider,
  useTrackedState,
  useUpdate: useDispatch
} = createContainer(useValue)