import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Badges from './badges/Badges';
import Nav from './nav/Nav';
import RightDesktop from './rightDesktop/rightDesktop';
import Articles from './articles/Articles';
import ArticleView from './article-view/ArticleView';
import Recrutation from './recrutation/Recrutation';
import History from './history/History';
import Dyrekcja from './history/Dyrekcja';

function App() {
    return (
        <BrowserRouter basename=''>
            <Routes>
                <Route path='' element={
                    <Fragment>
                        <Badges />
                        <RightDesktop />
                        <Articles />
                        <Nav />
                    </Fragment>
                }>
                </Route>
                <Route path='/article/*' element={
                    <Fragment>
                        <Badges />
                        <RightDesktop />
                        <ArticleView />
                        <Nav />
                    </Fragment>
                }>
                </Route>
                <Route path='/rekrutacja' element={
                    <Fragment>
                        <Badges />
                        <RightDesktop />
                        <Recrutation />
                        <Nav />
                    </Fragment>
                }>
                </Route>
                <Route path='/erasmus' element={
                    <Fragment>
                        <Badges />
                        <RightDesktop />
                        <Nav />
                    </Fragment>
                }>
                </Route>
                <Route path='/historia' element={
                    <Fragment>
                        <Badges />
                        <RightDesktop />
                        <History />
                        <Nav />
                    </Fragment>
                }>
                </Route>
                <Route path='/dyrekcja' element={
                    <Fragment>
                        <Badges />
                        <RightDesktop />
                        <Dyrekcja />
                        <Nav />
                    </Fragment>
                }>
                </Route>
                <Route path='*' element={
                    <Fragment>
                        <div className='e404 tile'>
                            <h1>
                                Kurka wodna, jasny patyk
                            </h1>
                            <h2>
                                Tu nic nie ma
                            </h2>
                        </div>
                    </Fragment>
                }>
                </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default App;