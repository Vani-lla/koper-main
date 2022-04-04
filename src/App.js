import { Fragment } from 'react';
import './App.css';
import Badges from './badges/Badges';
import Nav from './nav/Nav';

function App() {
    return (
        <Fragment>
            <Nav />
            <Badges />
        </Fragment>
    )
}

export default App;