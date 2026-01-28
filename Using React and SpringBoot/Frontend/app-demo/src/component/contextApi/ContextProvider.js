
import { createContext } from 'react'
import { mycontext } from './mycontext';

const ContextProvider=({children,data})=> {
    const Context = mycontext
    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    );
}

export default ContextProvider