import React from 'react'
import { useGetOompaDetail } from '../hooks/useGetOompaDetail';
import OompaDetail from '../components/OompaDetail'

const Detail = ({ params }) => {
    console.log(params)
    const { oompaDetail, isLoading, error } = useGetOompaDetail(params.id)
    return (
        <>
            {isLoading && < div className="Loading"> ... Loading, please wait ... </div >}
            {!isLoading && error && < div className="Error"> ... Ooops, something went wrong: {error} ... </div >}
            {!isLoading && !error && oompaDetail &&
                <div className="PageWrapper">
                    <div className="PageContainer">
                        <OompaDetail oompaDetail={oompaDetail} />
                    </div>
                </div>
            }
        </>
    )
}

export default Detail