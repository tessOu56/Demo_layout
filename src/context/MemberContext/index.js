
import React , { createContext , useContext , useState } from "react";
import { default as superier , employList } from './data';

const MembersContext = createContext();

export const useMembers = () => useContext(MembersContext);

export default function MembersProvider ({ children }) {
    const [ members , setMembers ] = useState(superier);
    const [ employees , setEmployees ] = useState(employList);

    // add , update , remove
    return (
        <MembersContext.Provider value={{ members , employees }}>
            { children }
        </MembersContext.Provider>
    )
}

