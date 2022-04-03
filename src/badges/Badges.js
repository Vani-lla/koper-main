import React from 'react'
import logo from '../static/logo_new.png'
import silver from '../static/sr22.png'
import './Badges.css'

export default function Badges() {
    return (
        <div className='badges'>
            <img src={logo} alt='Main logo'/>
            <a href='https://licea.perspektywy.pl/2022/rankings'>
                <img src={silver} />
            </a>
        </div>
    )
}
