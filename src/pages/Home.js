import React, { useRef, useEffect, useState } from 'react'
import Search from '../components/Search'
import Title from '../components/Title'
import OompaList from '../components/OompaList'
import { useGetOompas } from '../hooks/useGetOompas'

const Home = () => {

    const { loadingNextPage, oompas, setPage } = useGetOompas();
    const externalRef = useRef();
    const fromRef = useRef();
    const [doNextPage, setDoNextPage] = useState(false);

    useEffect(() => {
        window.scrollTo(0, externalRef.current.offsetTop)
    }, [externalRef])

    // this useEffect is executed every render
    useEffect(() => {
        let observer
        const element = externalRef ? externalRef.current : fromRef.current;
        const onChange = (entries) => {
            const el = entries[0] // we have only one intersection oberved
            if (el.isIntersecting) {
                setDoNextPage(true)
            } else {
                setDoNextPage(false)
            }
        }
        Promise.resolve(
            typeof IntersectionObserver !== 'undefined'
                ? IntersectionObserver
                : import('intersection-observer')
        ).then(() => {

            // creating IntersectionObserver
            observer = new IntersectionObserver(onChange)
            if (element) observer.observe(element)
        })

        return () => observer && observer.disconnect()
    })

    // this useeffect is executed when doNextPage is changed (by the other useEffect)
    useEffect(function () {
        if (doNextPage) setPage(prevPage => prevPage + 1)
    }, [doNextPage, setPage])

    return (
        <div className="PageWrapper">
            <div className="PageContainer">
                <Search />
                <Title />
                <OompaList oompas={oompas} />
                <div style={{ height: "250px" }} />
                <div id="observer" ref={externalRef} />
                {/* this loading div must be here to avoid fetch twice */}
                {loadingNextPage && < div className="Loading"> ... Loading, please wait ... </div >}
            </div>
        </div>
    )
}

export default Home