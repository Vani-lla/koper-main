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
                    <div className='drop-topic-container'>
                        <div className='drop-topic'>Plany Lekcji</div>
                        <div className='dropdown'>
                            <a href='#'>Plan lekcji</a>
                            <a href='#'>Zastępstwa</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
