import { useExpansion } from "@/Hooks/useExpansion"
import { useForm } from "@inertiajs/react"
import { 
  FormEvent, 
  useEffect, 
  useState } from "react"


export type FilterBooksProps = {
  category: string[] | string,
  minPrice: number,
  maxPrice: number
}

export const useFilter = () =>{
  const [ isExpanded, handleExpansion ] = useExpansion()
  const { data, setData, reset, get } = useForm<FilterBooksProps>({
    category: [],
    minPrice: 0,
    maxPrice: 1000
  })
  const [ shouldSubmit, setShouldSubmit ] = useState(false)

  const handleFormSubmit = ( e: FormEvent ) => {
    e.preventDefault()

    setData("category", Array.isArray(data.category) && data.category.length? data.category.join(",") : "")
    setShouldSubmit(true)
  }

  const handleCategoryChange = ( category: string ) =>{
    if ( !Array.isArray(data.category) ) return

    const categoryIndex = data.category.indexOf(category)
    
    setData("category", categoryIndex!==-1? data.category.slice(0, categoryIndex).concat(data.category.slice(categoryIndex+1)) : data.category.concat(category))
  }

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, dataField: "minPrice" | "maxPrice") =>{
    setData(dataField, parseInt(e.target.value))
  }

  useEffect(() =>{
    if ( shouldSubmit ) {
      get("/admin")
      setShouldSubmit(false)
    } 
  }, [ shouldSubmit ])

  return {
    isExpanded,
    handleExpansion,
    handleFormSubmit,
    handlePriceChange,
    handleCategoryChange,
    data,
    setData,
    reset
  }
}