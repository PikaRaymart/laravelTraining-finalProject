import { useForm } from "@inertiajs/react"
import { FormEvent } from "react"


type FilterFormProps = {
  category: string[] | string,
  minPrice: number,
  maxPrice: number
}

type PartialFilterFormProps = Partial<Omit<FilterFormProps, "category">> & {
  category?: string,
  [ key: string ]: any
}

type UseFilterProps = string

export const useFilter = (url: UseFilterProps) =>{
  const { data, setData, reset } = useForm<FilterFormProps>({
    category: [],
    minPrice: 0,
    maxPrice: 0
  })
  const { data: filterData, get } = useForm<PartialFilterFormProps>()

  const handleFormSubmit = ( e: FormEvent ) => {
    e.preventDefault()

    for ( const[key, val] of Object.entries(data) ) {
      if ( Array.isArray(val) && val.length ) {
        filterData.category = Array.isArray(data.category) && data.category.length? data.category.join(",") : ""
      }
   
      else if ( typeof val === "number" && val ) {
        filterData[key] = val
      }
    }

    get(url, { preserveState: true })
  }

  const handleCategoryChange = ( category: string ) =>{
    if ( !Array.isArray(data.category) ) return

    const categoryIndex = data.category.indexOf(category)
    
    setData("category", categoryIndex!==-1? data.category.slice(0, categoryIndex).concat(data.category.slice(categoryIndex+1)) : data.category.concat(category))
  }

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, dataField: "minPrice" | "maxPrice") =>{
    if ( !e.target.value ) {
      e.preventDefault()
      return
    }

    e.target.value = `${ parseInt(e.target.value) }`
    setData(dataField, parseInt(e.target.value))
  }

  const handleResetForm = () =>{
    reset()

    for ( const key of Object.keys(filterData)) {
      filterData[key] = undefined
    }
  }

  return {
    handleFormSubmit,
    handlePriceChange,
    handleCategoryChange,
    data,
    setData,
    reset: handleResetForm
  }
}