import { 
  useEffect, 
  useState } from "react"


export const useBookImage = (imageFile: File | null) => {
  const [ imageUrl, setImageUrl ] = useState("")

  useEffect(() =>{
    if ( imageFile ) {
      const reader = new FileReader();

      reader.onloadend = ( readerEvent ) =>{
        const img = document.createElement("img");
  
        img.onload = ( imgEvent ) => {
          const canvas = document.createElement("canvas");
          canvas.height = 416;
          canvas.width = 416;
          const ctx = canvas.getContext("2d");
          ctx?.drawImage(img, 0, 0, 416, 416);
          const url = canvas.toDataURL(imageFile?.type);
          setImageUrl(url)
        }
  
        img.src = readerEvent.target?.result as string;
      }
  
      if ( imageFile ) {
        reader.readAsDataURL(imageFile);
      }
    }
  }, [ imageFile ])

  return imageUrl
}