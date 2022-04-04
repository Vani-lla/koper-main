import React from 'react'
import './Nav.css'

export default function Nav() {
    return (
        <nav>
            <h1 className='main-name'>
                II Liceum Ogólno Kształcące im. Mikołaja Kopernika
            </h1>
            <div className='navigation'>
                <a className='flash-text' href='#'>
                    <i className='fab fa-facebook-square'></i>
                </a>
                <a className='flash-text' href='#'>
                    <i className='fab fa-instagram'></i>
                </a>
                <a className='flash-text' href='#'>
                    <i className='fab fa-youtube'></i>
                </a>
                <a className='flash-text' href='#'>
                    <i className='fab fa-phone-square'></i>
                </a>
                <a className='flash-text' href='#'>
                    <i className='fab fa-chrome'></i>
                </a>
            </div>
        </nav>
    )
}
