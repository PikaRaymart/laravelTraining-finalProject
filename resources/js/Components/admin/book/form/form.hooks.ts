import { Book } from "@/Pages/Books/books"
import { useForm } from "@inertiajs/react"
import { 
  FormEvent, 
  useState } from "react"


type UseFormData = Omit<Book, "id"> & {
  id?: number,
  oldImage?: string
}
export type HandleFormSubmit = ( event: FormEvent, book: Omit<Book, "id"> & { id?: number } ) => void
export type HandleDataChange = ( value: string | File, field: keyof Book ) => void
export type HandleImageChange = ( event: React.ChangeEvent<HTMLInputElement> ) => void
export type HandlePostForm = ( url: string ) => void
export type HandleUpdateform = ( url: string ) => void
export type HandleSetBookDefaults = ( book: Partial<Book> ) => void

export const useBookForm = () => {
  const { data, errors, setData, post, put } = useForm<UseFormData>({
    title: "",
    author: "",
    description: "",
    category: "",
    image: null,
    price: 1,
    stocks: 1,
    status: ""
  })
  const [ justRender, setJustRender ] = useState(false)
  
  const handleDataChange: HandleDataChange = ( value, field ) => {
    if ( field==="id" )return

    if ( typeof data[field] === "number" && typeof value === "string" ) {
      setData(field, parseInt(value))
    } else if (value instanceof File) {
      setData(field, value)
    } else {
      setData(field, value)
    }
  }

  const handleImageChange: HandleImageChange = ( event ) => {
    setData("image", event.target.files? event.target.files[0] : null)
  }

  const handlePostForm: HandlePostForm = ( url ) =>{
    post(url, {
      forceFormData: true
    })
  }

  const handleUpdateForm: HandleUpdateform = ( url ) => {
    post(url, {
      forceFormData: true
    })
  }

  const handleSetBookDefaults: HandleSetBookDefaults = ( book ) =>{
    for ( const [key, val] of Object.entries(book) ) {
      if ( val ) {
        // @ts-ignore
        data[key as keyof Book] = val
        if ( key==="image" && typeof val ==="string" ) {
          data.oldImage = val
        }
      }
    }

    setJustRender(prev => !prev)
  }

  return {
    data,
    errors,
    handleDataChange,
    handleImageChange,
    handlePostForm,
    handleUpdateForm,
    handleSetBookDefaults
  }
}

export const useBookFormImage = (imageFile: File | null) => {
  const [ imageUrl, setImageUrl ] = useState("")

  const handleChangeImageUrl: HandleImageChange = ( event ) =>{ 
    if ( event.target.files && event.target.files[0] ) {
      const imageFile = event.target.files[0]
      const reader = new FileReader();

      reader.onloadend = ( readerEvent ) =>{
        const img = document.createElement("img");
  
        img.onload = ( imgEvent ) => {
          const canvas = document.createElement("canvas");
          canvas.height = 396;
          canvas.width = 396;
          const ctx = canvas.getContext("2d");
          ctx?.drawImage(img, 0, 0, 396, 396);
          const url = canvas.toDataURL(imageFile?.type);
          setImageUrl(url)
        }
  
        img.src = readerEvent.target?.result as string;
      }
  
      if ( imageFile ) {
        reader.readAsDataURL(imageFile);
      }
    }
  }

  return {
    imageUrl,
    handleChangeImageUrl
  }
}