import { createContext,useContext } from "react";

export const Mycontext = createContext(

);

export const useMycontext=()=>{
    return useContext(Mycontext);
}