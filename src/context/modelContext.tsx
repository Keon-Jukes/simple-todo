import { createContext } from "react";
import { author } from "./model";

export type ModelContextProviderProps = {
    children: React.ReactNode
}

export const ModelContext = createContext(author)

export const ModelContextProvider = ({children}: ModelContextProviderProps) => {
    return <ModelContext.Provider value={author}>{children}</ModelContext.Provider>
}