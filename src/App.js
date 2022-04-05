import { Fragment } from 'react';
import './App.css';
import Badges from './badges/Badges';
import Nav from './nav/Nav';
import Graphs from './graphs/Graphs';

function App() {
    return (
        <Fragment>
            <Nav />
            <Badges />
            <Graphs />
        </Fragment>
    )
}

export default App;