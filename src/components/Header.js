import React from 'react'
import { Link } from 'wouter'

const Header = () => {

    return (
        <header className='Header'>
            <div className="HeaderWrapper">
                <div className="HeaderContent">
                    <Link to='/'>
                        <img className="ImageLogo" alt="Oompa Loompa Crew" src='./logo-umpa-loompa.png' />
                    </Link>
                    <p className="HeaderText">Ooompa Loompa's Crew</p>
                </div>
            </div>
        </header>
    )
}
export default Header