import { useContext, useEffect, useState } from 'react'
import getOompas from '../services/getOompas'
import OompasContext from '../context/OompasContext'

const OUTDATE_HOURS = 24
const OOMPAS_PER_PAGE = 25
/**
 * Custom hook que retorna la lista de oompas que se ira actualizando a medida que 
 * el usuario haga scroll
 */
export function useGetOompas() {
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const { oompas, setOompas, page, setPage } = useContext(OompasContext)

  /**   
   *  El objetivo de este useeffect es que cada vez que cambie la page que esta en el estado
   *  del context (y actualizad de manera automatica por el intersectionobserver), 
   *  concatenar al array actual de ooompas la nueva lista de oompas para esa nueva pagina
   *  esta lista nueva puede estar en el localstorage o si no esta la obtendremos del fetch
   */

  useEffect(function () {
    if (oompas.length / OOMPAS_PER_PAGE === page) return //necesario para cuando volvemos del detalle
    setLoadingNextPage(true)

    const timePageInStorage = localStorage.getItem(`t-p${page}`)

    // si tengo el tiempo en el storage, calculo la diferencia
    const difHours = timePageInStorage
      ? Math.abs((new Date().getTime() - timePageInStorage) / 36e5)
      : OUTDATE_HOURS + 1 // let's outdate if not exists

    const isTimedOut = difHours > OUTDATE_HOURS;

    // si está caducado seteo los oompaInStorage a null, para forzar el fetch
    // sino, cargo la lista de la pagina en el storage
    const oompaInStorage = (isTimedOut)
      ? null
      : JSON.parse(localStorage.getItem(`p${page}`))

    if (!isTimedOut && oompaInStorage) {
      setOompas(prevOompas => prevOompas.concat(oompaInStorage))
      setLoadingNextPage(false)
    } else {
      getOompas({ page })
        .then(nextOompas => {
          setOompas(prevOompas => prevOompas.concat(nextOompas))
          localStorage.setItem(`p${page}`, JSON.stringify(nextOompas))
          localStorage.setItem(`t-p${page}`, new Date().getTime());
          setLoadingNextPage(false)

        })
    }

  }, [page, setOompas])
  return { loadingNextPage, oompas, setPage }
}