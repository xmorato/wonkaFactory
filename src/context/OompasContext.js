import React, { useState } from 'react'

const Context = React.createContext({})

export function OompasContextProvider({ children }) {
    const [oompas, setOompas] = useState([])
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(0)
    return <Context.Provider value={{ oompas, setOompas, search, setSearch,page,setPage }}>
        {children}
    </Context.Provider>
}

export default Context