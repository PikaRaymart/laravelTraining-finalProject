import { usePageProps } from "@/Hooks/usePageProps"
import { useForm } from "@inertiajs/react"
import { BookPageProps } from "@/Pages/Books/Book"
import { FormEvent } from "react"


type BookOptionsForm = {
  bookId: number,
  quantity: number
}

export const useBookOptions = () => {
  const { book, availableStocks, limitReached } = usePageProps<BookPageProps>()
  const { data, setData, post } = useForm<BookOptionsForm>({
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
    limitReached? null : post('/cart', {
      onSuccess: () => {
        setData("quantity", 1)
      }
    })
  }

  return {
    data,
    handleChangeQuantity,
    handleSendAddToCart,
    stocks: availableStocks,
    limitReached
  }
}