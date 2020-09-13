import React from 'react'
import { Link } from 'wouter'

const Oompa = ({ first_name, last_name, image, profession, gender, id }) => {
    return (
        <div className="Oompa">
            <Link to={`/${id}`} className="OompaLink">
                <img loading="lazy" alt={`${last_name}, ${first_name}`}
                    src={image} />
                <div className="OompaName">
                    {last_name}, {first_name}
                </div>
            </Link>

            <div className="OompaGender">
                {gender === "M" ? "Male" : "Female"}
            </div>
            <div className="OompaProfession">
                {profession}
            </div>
        </div>

    )
}
export default Oompa