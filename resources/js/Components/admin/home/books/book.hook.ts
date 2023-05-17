import { useForm } from "@inertiajs/react"
import { FormEvent } from "react"


export type UseBooksFormData = {
  bookIds: number[]
}

export type HandleDeleteBooks = ( event: FormEvent ) => void
export type HandleAddIdToDeletion = ( bookId: number ) => void
export type HandleBulkIdAddition = ( event: React.ChangeEvent<HTMLInputElement>, bookIds: number[] ) => void

export const useBooks = () => { 
  const { data, setData, wasSuccessful, ...form } = useForm<UseBooksFormData>({
    bookIds: []
  })

  const handleDeleteBooks = ( event:FormEvent ) =>{
    event.preventDefault()
    form.delete("/admin/delete/bulk", {
      onSuccess: () =>{
        setData("bookIds", [])
      }
    })
  }

  const handleAddIdToDeletion: HandleAddIdToDeletion = ( bookId ) => {
    setData("bookIds", data.bookIds.find(id => id===bookId)? data.bookIds.filter(id => id!==bookId) : data.bookIds.concat([bookId]))
  }

  const handleBulkIdAddition: HandleBulkIdAddition = ( event, bookIds ) => {
    setData("bookIds", event.target.checked? bookIds : [])
  }

  return {
    data,
    handleDeleteBooks,
    handleAddIdToDeletion,
    handleBulkIdAddition,
    wasSuccessful
  }
}