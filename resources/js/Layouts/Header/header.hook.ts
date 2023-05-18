import { useExpansion } from "@/Hooks/useExpansion"
import { 
  useEffect, 
  useRef, 
  useState} from "react"


export const useHeader = () => {
  const [ isExpanded, handleExpansion ] = useExpansion()
  const isMounted = useRef(false)
  
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true
    } else {
      isExpanded? handleExpansion() : null
    }

  }, [window.location.href])

  return {
    isExpanded, handleExpansion
  }
}

export const useHeaderAnimation = () => {
  const [ showHeaderSticky, setShowHeaderSticky ] = useState(false);
  const [ hideHeaderSticky, setHideHeaderSticky ] = useState(false);
  const [ windowHeight, setWindowHeight ] = useState(0);

  useEffect(() =>{
    if ( hideHeaderSticky ) {
      const stickyTimeout = setTimeout(() => {
        setHideHeaderSticky(false);
        setShowHeaderSticky(false);
      }, 500);

      return () => clearTimeout(stickyTimeout);
    }
  }, [ hideHeaderSticky ]);

  useEffect(() =>{
    if ( !hideHeaderSticky && windowHeight > 650 ) {
      setShowHeaderSticky(true);
    }

    else if ( showHeaderSticky && windowHeight <= 650 ) {
      setHideHeaderSticky(true);
    }
  }, [ windowHeight ]);

  useEffect(() =>{
    const handleHeightResize = () =>{
      setWindowHeight(window.scrollY);
    }

    window.addEventListener("scroll", handleHeightResize);
  }, [])

  return {
    showHeaderSticky,
    hideHeaderSticky
  }
}