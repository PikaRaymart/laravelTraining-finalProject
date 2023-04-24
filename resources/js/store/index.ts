import { Dispatch } from "react"
import { createContainer } from "react-tracked"
import { useImmerReducer } from "use-immer"

  
type Draft = {
  reactTracked: boolean
}
type Action = |
  { type: "START_TRACKING" }

const reducer = ( draft: Draft, action: Action ) => {
  
  switch(action.type) {
    case "START_TRACKING":
      
      return
    default:
      return draft
  } 
}

const initialState: Draft = {
  reactTracked: true
}

const useValue = (): [ Draft, Dispatch<Action> ] => {
  const [ state, dispatch ] = useImmerReducer(reducer, initialState)

  return [ state, dispatch ]
}

export const {
  Provider,
  useTrackedState,
  useUpdate: useDispatch
} = createContainer(useValue)