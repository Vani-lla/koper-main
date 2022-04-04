import React from 'react'
import './Nav.css'

export default function Nav() {
    return (
        <nav>
            <h1>
                II Liceum Ogólno Kształcące im. Mikołaja Kopernika
            </h1>
            <div className='navigation'>
                <a href='#'>
                    <i className='fab fa-facebook-square'></i>
                </a>
                <a href='#'>
                    <i className='fab fa-instagram'></i>
                </a>
                <a href='#'>
                    <i className='fab fa-youtube'></i>
                </a>
                <a href='#'>
                    <i className='fab fa-phone-square'></i>
                </a>
                <a href='#'>
                    <i className='fab fa-chrome'></i>
                </a>
            </div>
        </nav>
    )
}
