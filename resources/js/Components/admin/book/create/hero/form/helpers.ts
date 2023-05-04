import { Book } from "@/store"


export const checkErrors = ( e: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement, name: string, error?: string ) => {
  if ( error ) {
    e.setAttribute("aria-invalid", "true")
    e.setAttribute("aria-describedBy", `${ name }-error`)
  } else {
    e.removeAttribute("aria-invalid")
    e.removeAttribute("aria-describedBy")
  }
}

export const formValidity = (data: Book) =>{
  for (const value of Object.values(data)) {
    if (!value) return false
  }

  return true
}

export const formDraftValidity = (data: Book) => {
  
  return !data.title? false : true
}