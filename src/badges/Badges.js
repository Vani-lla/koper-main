import React from 'react'
import logo from '../static/logo_new.png'
import silver from '../static/sr22.png'
import rekrut from '../static/rekrut.png'
import dziennik from '../static/logo_dziennik.png'
import erasmus from '../static/logo_erasmus.png'
import './Badges.css'

export default function Badges() {
    return (
        <div className='badges tile'>
            <img id="main-logo" src={logo} alt='main logo' />
            <a href='https://licea.perspektywy.pl/2022/rankings'>
                <img src={silver} alt='silver badge' />
            </a>
            <a className='round-badge' href='/rekrutacja'>
                <img src={rekrut} />
            </a>
            <a className='round-badge' href=''>
                <img src={dziennik} />
            </a>
            <a className='round-badge' href=''>
                <img src={erasmus} />
            </a>
        </div>
    )
}
