import { useForm } from "@inertiajs/react"
import { FormEvent } from "react"


type SearchbarFormProps = { searchItem: string }
type PartialSearchbarFormProps = Partial<SearchbarFormProps>
type UseSearchbarProps = string

export const useSearchbar = (url: UseSearchbarProps) => {
  const { data, setData } = useForm<SearchbarFormProps>("Searchbar", {
    searchItem: ""
  })
  const { data: searchbarData, get } = useForm<PartialSearchbarFormProps>()
  
  const handleFormSubmit = (e: FormEvent) =>{
    e.preventDefault()
    searchbarData.searchItem = data.searchItem

    get(url, { preserveState: true })
  }
  
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setData("searchItem", e.target.value)
  }

  const handleResetSearchbar = () =>{
    setData("searchItem", "")
    searchbarData.searchItem = undefined
    get(url)
  }

  return {
    data,
    handleFormSubmit,
    handleSearchInput,
    handleResetSearchbar
  }
}