import React from 'react'
import './Menubar.css'

export default function Menubar() {
    return (
        <div className='menu-links'>
            <div id='first-grid-nav'>
                <a title='Facebook' className='flash-text-nav' href='https://www.facebook.com/kopercieszyn'>
                    <i className='fab fa-facebook-square'></i>
                </a>
            </div>
            <div>
                <a title='Instagram' className='flash-text-nav' href='https://www.instagram.com/lo_koper/'>
                    <i className='fab fa-instagram'></i>
                </a>
            </div>
            <div>
                <a title='Youtube' className='flash-text-nav' href='https://www.youtube.com/channel/UCs-FtjKbzLeNSTj8zK87sag'>
                    <i className='fab fa-youtube'></i>
                </a>
            </div>
            <div>
                <a title='Kontakt' className='flash-text-nav' href='https://koper.edu.pl/index.php?pokaz=menu_kontakt'>
                    <i className='fa fa-phone-square'></i>
                </a>
            </div>
            <div>
                <a title='Dziennik' className='flash-text-nav' href='https://uonetplus.vulcan.net.pl/powiatcieszynski'>
                    <i className='fa fa-desktop' aria-hidden="true"></i>
                </a>
            </div>
            <div>
                <a title='informatyka' className='flash-text-nav' href='https://koper.edu.pl/index.php?pokaz=menu_inne&baner=tak'>
                    <i className='fa fa-microchip' aria-hidden="true"></i>
                </a>
            </div>
        </div>
    )
}
