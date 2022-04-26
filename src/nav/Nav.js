import React, { Fragment, useState } from 'react'
import './Nav.css'

export default function Nav() {
    const [phoneActive, setphoneActive] = useState(0)

    return (
        <Fragment>
            <nav className='tile'>
                <button className='phone-nav tile' >
                    X
                </button>
                <div className='navigation'>
                    <div className='nav-topic' id='first-nav'>
                        <div className='drop-topic-container'>
                            <div className='drop-topic'>
                                O szkole
                            </div>
                            <div className='dropdown'>
                                <a href='/historia'>Historia</a>
                                <a href='/dyrekcja'>Dyrekcja Szkoły</a>
                                <a href='#'>Grono Pedagogiczne</a>
                                <a href='#'>Pedagog Szkolny</a>
                                <a href='#'>Rada Rodziców</a>
                                <a href='#'>Samorząd</a>
                                <a href='#'>Biblioteka</a>
                                <a href='#'>Kontakty</a>
                            </div>
                        </div>
                    </div>
                    <div className='nav-topic'>
                        <div className='drop-topic-container'>
                            <div className='drop-topic'>Dokumenty</div>
                            <div className='dropdown'>
                                <a href='#'>Kalendarz roku</a>
                                <a href='#'>Wykaz podręczników</a>
                                <a href='#'>Statut</a>
                                <a href='#'>Regulaminy</a>
                                <a href='#'>Deklaracja dostępności</a>
                                <a href='#'>Wycieczki</a>
                                <a href='#'>Dla nauczyciela</a>
                                <a href='#'>Dla ucznia</a>
                            </div>
                        </div>
                    </div>
                    <div className='nav-topic'>
                        <div className='drop-topic-container'>
                            <div className='drop-topic'>Życie szkoły</div>
                            <div className='dropdown'>
                                <a href='#'>Wszystkie artykuły</a>
                                <a href='#'>Olimpiady i konkursy</a>
                                <a href='#'>Wyjazdy i wycieczki</a>
                                <a href='#'>Inne wydarzenia</a>
                                <a href='#'>Portal</a>
                            </div>
                        </div>
                    </div>
                    <div className='nav-topic'>
                        <a href='#' className='drop-topic'>Plany lekcji</a>
                    </div>
                    <div className='nav-topic'>
                        <a href='#' className='drop-topic'>Zastępstwa</a>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}