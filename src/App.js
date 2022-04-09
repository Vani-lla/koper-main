import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Badges from './badges/Badges';
import Nav from './nav/Nav';
import Graphs from './graphs/Graphs';
import Menubar from './menubar/Menubar';
import Articles from './articles/Articles';
import ArticleView from './article-view/ArticleView';

function App() {
    return (
        <BrowserRouter basename=''>
            <Routes>
                <Route path='' element={
                    <Fragment>
                        <Nav />
                        <Badges />
                        <Graphs />
                        <Menubar />
                        <Articles />
                    </Fragment>
                }>
                </Route>
                <Route path='/article/*' element={
                    <Fragment>
                        <Nav />
                        <Badges />
                        <Graphs />
                        <Menubar />
                        <ArticleView />
                    </Fragment>
                }>
                </Route>
                <Route path='/rekrutacja' element={
                    <Fragment>
                        <Nav />
                        <Badges />
                        <Graphs />
                        <Menubar />
                    </Fragment>
                }>
                </Route>
                <Route path='/erasmus' element={
                    <Fragment>
                        <Nav />
                        <Badges />
                        <Graphs />
                        <Menubar />
                    </Fragment>
                }>
                </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default App;