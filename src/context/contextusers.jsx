import { createContext, useEffect, useState } from "react";


export const ContextUsers = createContext()

export const ContextUsersProvider = ({children}) => {
    const [users, setUsers] = useState([])
 return(
    <ContextUsers.Provider value= {{users, setUsers}}>
    {children} 
    </ContextUsers.Provider>
 )
}