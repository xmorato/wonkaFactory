import getDetailOompa from '../services/getDetailOompa'
import { useState, useEffect } from 'react'

const OUTDATE_HOURS = 24

/**
 * Custom hook to get details from oompa Id
 * This data will be retrieved from localStorage if it exists or fetched from api call
 */
export const useGetOompaDetail = (id) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [oompaDetail, setOompaDetail] = useState(null)

    useEffect(function () {
        setIsLoading(true)

        const timeDetailInStorage = localStorage.getItem(`t-id${id}`)
   
        // si tengo el tiempo en el storage, calculo la diferencia
        const difHours = timeDetailInStorage
          ? Math.abs((new Date().getTime() - timeDetailInStorage) / 36e5)
          : OUTDATE_HOURS + 1 // let's outdate if not exists
        
          const isTimedOut = difHours > OUTDATE_HOURS;
    
        // si está caducado seteo la constante detailInStorage a null, para forzar el fetch
        // sino, cargo el detail en el storage
        const detailInStorage = (isTimedOut)
          ? null
          : JSON.parse(localStorage.getItem(`id${id}`));

        if (detailInStorage) {
            setOompaDetail(detailInStorage)
            setError(null)
            setIsLoading(false)
        } else {
            getDetailOompa(id)
                .then(oompaDetail => {
                    !oompaDetail.error && setOompaDetail(oompaDetail) && setError(null)
                    !!oompaDetail.error && setError(oompaDetail.error) && setOompaDetail(null)
                    localStorage.setItem(`id${id}`, JSON.stringify(oompaDetail))
                    localStorage.setItem(`t-id${id}`, new Date().getTime());
                    setIsLoading(false)

                }).catch(err => {
                    setIsLoading(false)
                    setError(err.message)
                })
        }
    }, [id])

    return { oompaDetail, isLoading, error }
}