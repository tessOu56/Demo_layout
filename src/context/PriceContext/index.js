import React , { createContext , useContext , useState } from "react";
import data from './data';

const PricesContext = createContext();

export const usePrices = () => useContext(PricesContext);

export default function PricesProvider ({ children }) {
    const [ prices , setPrices ] = useState(data);

    // add , update , remove
    return (
        <PricesContext.Provider value={{ prices , setPrices }}>
            { children }
        </PricesContext.Provider>
    )
}

