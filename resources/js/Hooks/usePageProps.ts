import { PageProps } from "@/types"
import { usePage } from "@inertiajs/react"


export const usePageProps = () =>{
  const props = usePage<PageProps>().props

  return props
}