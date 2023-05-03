import { 
  Book,
  BooksFilters, 
  useDispatch } from "@/store"
import { usePage } from "@inertiajs/react"
import { useEffect } from "react"


export const useBooksFilters = () =>{
  const { booksFilters, books } = usePage<{ booksFilters: BooksFilters, books: Book[] }>().props
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: "SET_BOOKS_FILTERS",
      payload: booksFilters
    })
  }, [])
}