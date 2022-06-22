import axios from 'axios';
import React, { createContext, useCallback, useState } from 'react';

export const myCounterContext = createContext();

export const AppCounterContext = ({children}) => {
    const [count, setCount] = useState(16);
    const [posts, setPosts] = useState([]);

    const fetchPosts = useCallback(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response.data);
            setPosts(response.data);
        })
    },[])
    
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
        <myCounterContext.Provider value={{ count, setCount,incrementFunc,decrementFunc,activeColor,posts,fetchPosts }}>
            {children}
        </myCounterContext.Provider>
    )
}