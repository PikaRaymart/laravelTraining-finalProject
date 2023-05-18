import { usePageProps } from "@/Hooks/usePageProps"
import { useForm } from "@inertiajs/react"
import { BookPageProps } from "@/Pages/Books/Book"
import { FormEvent } from "react"


type BookOptionsForm = {
  bookId: number,
  quantity: number,
  failure?: string
}

export const useBookOptions = () => {
  const { 
    book, 
    availableStocks, 
    limitReached } = usePageProps<BookPageProps>()
  const { 
    data, 
    setData, 
    post, 
    wasSuccessful, 
    hasErrors, 
    errors } = useForm<BookOptionsForm>({
    quantity: 1,
    bookId: book.id
  })

  const handleChangeQuantity = ( quantity: number ) => {
    if ( quantity < 1 || quantity > book.stocks || limitReached) {
      return
    }

    setData("quantity", quantity)
  }

  const handleSendAddToCart = ( event: FormEvent ) =>{
    event.preventDefault()
    limitReached || !availableStocks? null : post('/cart', {
      onSuccess: () => {
        setData("quantity", 1)
      }
    })
  }

  const handleBuyBook = () =>{
    if ( !availableStocks ) return;

    post("/checkout")
  }

  return {
    data,
    handleChangeQuantity,
    handleSendAddToCart,
    stocks: availableStocks,
    limitReached,
    wasSuccessful,
    handleBuyBook,
    hasErrors,
    errors
  }
}