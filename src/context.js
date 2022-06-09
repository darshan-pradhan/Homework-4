import {createContext} from "react";
const StateContext = createContext(
    { 
      state: {},
      dispatch: () => {}
    }
)

export default StateContext;
