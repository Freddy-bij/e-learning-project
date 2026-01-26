import { createContext } from "react";

export type ModelContextType = {
    isOpen:boolean,
    openModel: () => void,
    closeModel: () => void
}

export const ModelContext = createContext<ModelContextType | null >(null)