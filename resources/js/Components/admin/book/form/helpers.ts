import { Book } from "@/Pages/Books/Book"


export const checkErrors = ( e: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement, name: string, error?: string ) => {
  if ( error ) {
    e.setAttribute("aria-invalid", "true")
    e.setAttribute("aria-describedBy", `${ name }-error`)
  } else {
    e.removeAttribute("aria-invalid")
    e.removeAttribute("aria-describedBy")
  }
}

export const formValidity = (data: Omit<Book, "id">) =>{
  for (const value of Object.values(data)) {
    if (!value) return false
  }

  return true
}

export const formDraftValidity = (data: Omit<Book, "id">) => {
  
  return !data.title? false : true
}