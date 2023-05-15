import { useForm } from "@inertiajs/react"
import { FormEvent } from "react"


export type SearchbarProps = {
  searchItem: string
}

export const useSearchbar = () => {
  const { data, get, setData } = useForm<SearchbarProps>({
    searchItem: ""
  })

  const handleFormSubmit = (e: FormEvent) =>{
    e.preventDefault()
    console.log(data.searchItem)
  }

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setData("searchItem", e.target.value)
  }

  return {
    data,
    handleFormSubmit,
    handleSearchInput
  }
}