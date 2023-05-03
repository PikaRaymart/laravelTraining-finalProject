import { useState } from "react"


export const useExpansion = (): [ boolean, () => void ] => {
  const [ isExpanded, setIsExpanded ] = useState(false)

  const handleExpansion = () => setIsExpanded(prev => !prev)

  return [ isExpanded, handleExpansion ]
}