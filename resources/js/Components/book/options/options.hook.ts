import { usePageProps } from "@/Hooks/usePageProps"
import { useForm } from "@inertiajs/react"
import { BookPageProps } from "../book"


type BookOptionsForm = {
  id: number,
  quantity: number
}

export const useBookOptions = () => {
  const { book } = usePageProps<BookPageProps>()
  const { data, setData } = useForm<BookOptionsForm>({
    quantity: 1,
    id: book.id
  })

  const handleChangeQuantity = ( quantity: number ) => {
    if ( quantity < 1 || quantity > book.stocks) {
      return
    }

    setData("quantity", quantity)
  }

  return {
    data,
    handleChangeQuantity,
    stocks: book.stocks
  }
}