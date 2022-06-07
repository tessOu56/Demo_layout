import React , { createContext , useContext , useState } from "react";
import { default as data , resultList } from './data';

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export default function ProductProvider ({ children }) {
    const [ products , setProducts ] = useState(data);
    const [ results , setResults ] = useState(resultList);
    
    // add , update , remove
    return (
        <ProductContext.Provider value={{ products , results }}>
            { children }
        </ProductContext.Provider>
    )
}

