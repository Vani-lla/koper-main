import React from 'react'
import './Nav.css'

export default function Nav() {
    return (
        <nav className='tile'>
            <h1 className='main-name'>
                II Liceum Ogólnokształcące im. Mikołaja Kopernika
            </h1>
            <div className='navigation'>
                <div className='nav-topic' id='first-nav'>
                    O szkole
                </div>
                <div className='nav-topic'>
                    Dokumenty
                </div>
                <div className='nav-topic'>
                    Życie szkoły
                </div>
                <div className='nav-topic'>
                    Plan lekcji
                </div>
            </div>
        </nav>
    )
}
