import { usePageProps } from "@/Hooks/usePageProps"
import { CartPageProps } from "@/Pages/Cart"
import { useForm } from "@inertiajs/react"
import { 
  FormEvent, 
  useEffect } from "react"


type Update = {
  cartId: number,
  quantity: number,
  delete?: boolean
}

type CartFormData = {
  updates: Update[]
}

export type HandleChangeCartQuantity = ( cartId: number, quantity: number ) => void
export type HandleRemoveCartBook = ( cartId: number, remove: boolean ) => void

export const useCart = () => {
  const { cart } = usePageProps<CartPageProps>()
  const { data, setData, post, put } = useForm<CartFormData>({
    updates: []
  })

  const handleChangeCartQuantity: HandleChangeCartQuantity = ( cartId, quantity ) => {
    const updateIndex = data.updates.findIndex(update => update.cartId===cartId)
    
    if ( updateIndex!==-1 ) {
      const newUpdates = [ ...data.updates ]
      newUpdates[updateIndex] = { cartId, quantity }
      setData("updates", newUpdates)
    } else {
      setData("updates", data.updates.concat({ cartId, quantity }))
    }
  }

  const handleRemoveCartBook: HandleRemoveCartBook = ( cartId, remove ) => {
    const updateIndex = data.updates.findIndex(update => update.cartId===cartId)
 
    if ( updateIndex===-1 ) return

    if ( remove ) {
      const newUpdates = [ ...data.updates ]
      newUpdates[updateIndex].delete = true
      setData("updates", newUpdates)
    } else {
      const newUpdates = [ ...data.updates ]
      newUpdates[updateIndex].delete = false
      setData("updates", newUpdates)
    }
  }

  const handleSubmitCartUpdates = ( event: FormEvent ) =>{
    event.preventDefault()
    put("/cart")
  }

  useEffect(() => {
    if ( cart.length ) {
      const newUpdates = cart.reduce(( accu, curr ) => accu.concat([{
        cartId: curr.cartId,
        quantity: curr.quantity
      }]), [] as Update[])
      setData("updates", newUpdates)
    }
  }, [ cart ])

  return {
    data,
    handleChangeCartQuantity,
    handleRemoveCartBook,
    handleSubmitCartUpdates
  }
}