import React, { useEffect, useState } from 'react'



const OompaDetail = (props) => {
    const { last_name, first_name, gender, profession, description, image } = props.oompaDetail
    const [descriptionHTML, setDescriptionHTML] = useState("");
    useEffect(() => {
        !!description && setDescriptionHTML(description)
    }
        , [description])

    return (
        <>
            <div className="OompaDetailContainer">
                <div className="OompaDetailImage">
                    <img loading="lazy" alt={`${last_name}, ${first_name}`}
                        src={image} />
                </div>
                <div className="OompaDetailRest">
                    <div className="OompaDetailName">
                        {last_name} {first_name}
                    </div>
                    <div className="OompaDetailGender">
                        {gender === "M" ? "Male" : "Female"}
                    </div>
                    <div className="OompaDetailProfession">
                        {profession}
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: descriptionHTML }} className="OompaDetailDescription">

                    </div>
                </div>
            </div>
        </>
    )
}

export default OompaDetail