import React, { createContext, useState } from 'react';

export const myCounterContext = createContext();

export const AppCounterContext = ({children}) => {
    const [count, setCount] = useState(16);
    
    const incrementFunc = () => {
        setCount(count + 1);
    }
    const decrementFunc = () => {
        setCount(count - 1);
    }

    const activeColor = { 
        color:'#fff',
        background:'blue'
    }

    return(
        <myCounterContext.Provider value={{ count, setCount,incrementFunc,decrementFunc,activeColor }}>
            {children}
        </myCounterContext.Provider>
    )
}