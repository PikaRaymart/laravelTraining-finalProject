import { PageProps } from "@/types"
import { usePage } from "@inertiajs/react"


export const usePageProps = <T extends PageProps>() =>{
  const props = usePage<T>().props

  return props
}