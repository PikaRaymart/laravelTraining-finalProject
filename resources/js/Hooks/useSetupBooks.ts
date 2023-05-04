import { 
  Book,
  BooksFilters, 
  BooksMetaData, 
  useDispatch } from "@/store"
import { usePage } from "@inertiajs/react"
import { useEffect } from "react"


type UseSetupBooksProps = {
  booksFilters: BooksFilters,
  books: BooksMetaData & {
    data: Book[]
  }
}

export const useSetupBooks = () =>{
  const { booksFilters, books } = usePage<UseSetupBooksProps>().props
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch({
      type: "SET_BOOKS_FILTERS",
      payload: booksFilters
    })    
    
    dispatch({
      type: "SET_BOOKS",
      payload: books.data
    })
  }, [])
}