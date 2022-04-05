import { Fragment } from 'react';
import './App.css';
import Badges from './badges/Badges';
import Nav from './nav/Nav';
import Graphs from './graphs/Graphs';
import Menubar from './menubar/Menubar';

function App() {
    return (
        <Fragment>
            <Nav />
            <Badges />
            <Graphs />
            <Menubar />
        </Fragment>
    )
}

export default App;