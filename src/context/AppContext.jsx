import { createContext } from "react";
import { doctors } from "../assets_frontend/assets";

export const AppContext = createContext();

export const AppContextProvider = ({children})=>{

  const value = {
    doctors
  }
  return (
    <AppContext.Provider value={ value}>
      {children}
    </AppContext.Provider>
  )
}