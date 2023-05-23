import { useExpansion } from "@/Hooks/useExpansion"
import { 
  useEffect, 
  useRef } from "react"


export const useHeader = () => {
  const [ isExpanded, handleExpansion ] = useExpansion()
  const isMounted = useRef(false)
  
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true
    } else {
      isExpanded? handleExpansion() : null
    }
  }, [])

  return {
    isExpanded, 
    handleExpansion
  }
}