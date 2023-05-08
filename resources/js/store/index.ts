import { Dispatch } from "react"
import { createContainer } from "react-tracked"
import { useImmerReducer } from "use-immer"

  
export type BooksFilters = {
  categories: string[]
}

export type Book = {
  id: number,
  title: string,
  author: string,
  description: string,
  image: File | null | string,
  status: string,
  category: string,
  stocks: number,
  price: number
}

type Link = {
  url: string | null,
  label: string,
  active: boolean
}

export type BooksMetaData = {
  meta: {
    links: Link[]
  }
}

type Draft = {
  reactTracked: boolean,
  booksFilters: BooksFilters,
  books: Book[],
  booksMetaData?: BooksMetaData,
  featuredBooks?: Book[]
}

type Action = |
  { type: "START_TRACKING" } |
  { type: "SET_BOOKS_FILTERS", payload: BooksFilters } |
  { type: "SET_BOOKS", payload: Book[] } |
  { type: "SET_BOOKS_METADATA", payload: BooksMetaData }

const reducer = ( draft: Draft, action: Action ) => {
  
  switch(action.type) {
    case "START_TRACKING":
      
      return
    
    case "SET_BOOKS_FILTERS": 
      draft.booksFilters = action.payload

      return
    case "SET_BOOKS":
      draft.books = action.payload

      return

    case "SET_BOOKS_METADATA":
      draft.booksMetaData = action.payload

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