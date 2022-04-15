import React from 'react'
import './Dyrekcja.css'

export default function Dyrekcja() {
    return (
        <div className='headquarters'>
            <div className='member tile' id='sensei'>
                <img src="https://koper.edu.pl/_images/rr.jpg" alt='Help me' />
                <div>
                    Dyrektor:  <b>mgr. Regina Rakowska</b>
                </div>
            </div>

            <div className='sub-teachers'>
                <div className='member tile'>
                    <img src="https://koper.edu.pl/_images/mm.jpg" alt='Help me' />
                    <div>
                        Wicedyrektor:  <div><b>mgr inż. Maria Mendrek</b></div>
                    </div>
                </div>
                <div className='member tile'>
                    <img src="https://koper.edu.pl/_images/tg2.jpg" alt='Help me' />
                    <div>
                        Wicedyrektor:  <div><b>mgr inż. Tadeusz Gajdzica</b></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
