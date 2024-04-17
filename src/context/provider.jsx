'use client'
 
import { createContext, useState , useContext} from 'react'

const AppContext = createContext(null); 

export function AppWrapper({children}) {
    const [list, setList] = useState(['1','2']);
    return (
        <AppContext.Provider value={{list, setList}}> 
        {children}
        </AppContext.Provider>
    ) 
}

export const useAppContext = () => {
    return useContext(AppContext);
}