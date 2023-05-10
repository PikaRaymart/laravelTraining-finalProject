import { useForm } from "@inertiajs/react"


type Update = {
  cartId: number,
  quantity: number,
  delete?: boolean
}

type CartFormData = {
  updates: Update[]
}

export const useCart = () => {
  const { data, setData } = useForm<CartFormData>({
    updates: []
  })

  return {
    data
  }
}