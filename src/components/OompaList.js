import React, { useContext } from 'react'
import Oompa from './Oompa'
import SearchContext from "../context/OompasContext"

export default function ListOfOompas({ oompas }) {
    const { search } = useContext(SearchContext)
    const filteredList = (search !== "")
        ? oompas.filter((ompa) =>
            ompa.first_name.toUpperCase().includes(search.toUpperCase()) ||
            ompa.last_name.toUpperCase().includes(search.toUpperCase()) ||
            ompa.profession.toUpperCase().includes(search.toUpperCase())
        )
        : oompas
    console.log("hhhhhhhh", filteredList.length)
    return (
        <div className='ListOfOompas'>
            {filteredList.map((oompa) => (
                <Oompa key={oompa.id}
                    first_name={oompa.first_name}
                    last_name={oompa.last_name}
                    image={oompa.image}
                    profession={oompa.profession}
                    gender={oompa.gender}
                    id={oompa.id}
                />
            ))
            }
        </div>)
}