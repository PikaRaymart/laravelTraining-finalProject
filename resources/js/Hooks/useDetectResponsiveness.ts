import { 
  useEffect, 
  useState } from "react"


export const useDetectResponsiveness = () =>{
  const [ isMobile, setIsMobile ] = useState(true)


  useEffect(() =>{
    if ( typeof window === "undefined" ) return;

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)  
    }

    window.addEventListener("resize", handleResize)

    handleResize()
  }, [])

  return isMobile
}