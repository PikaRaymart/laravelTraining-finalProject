import { 
  BooksFilters, 
  useDispatch } from "@/store"
import { usePage } from "@inertiajs/react"
import { useEffect } from "react"


export const useBooksFilters = () =>{
  const { booksFilters } = usePage<{ booksFilters: BooksFilters }>().props
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: "SET_BOOKS_FILTERS",
      payload: booksFilters
    })
  }, [])
}