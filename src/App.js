import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Badges from './badges/Badges';
import Nav from './nav/Nav';
import RightDesktop from './rightDesktop/rightDesktop';
import Articles from './articles/Articles';
import ArticleView from './article-view/ArticleView';
import Recrutation from './recrutation/Recrutation';
import History from './subpages/History';
import Dyrekcja from './subpages/Dyrekcja';
import Pedagog from './subpages/Pedagog';
import RadaR from './subpages/RadaR';
import SamoR from './subpages/SamoR';
import Kontakty from './subpages/Kontakty';
import Kalendarz from './subpages/Kalendarz';

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
                <Route path='/article/:id' element={
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
                <Route path='/grono' element={
                    <Fragment>
                        <Badges />
                        <RightDesktop />
                        <Dyrekcja />
                        <Nav />
                    </Fragment>
                }>
                </Route>
                <Route path='/pedagog' element={
                    <Fragment>
                        <Badges />
                        <RightDesktop />
                        <Pedagog />
                        <Nav />
                    </Fragment>
                }>
                </Route>
                <Route path='/radarodzicuf' element={
                    <Fragment>
                        <Badges />
                        <RightDesktop />
                        <RadaR />
                        <Nav />
                    </Fragment>
                }>
                </Route>
                <Route path='/samorzad' element={
                    <Fragment>
                        <Badges />
                        <RightDesktop />
                        <SamoR />
                        <Nav />
                    </Fragment>
                }>
                </Route>
                <Route path='/biblioteka' element={
                    <Fragment>
                        <Badges />
                        <RightDesktop />
                        <SamoR />
                        <Nav />
                    </Fragment>
                }>
                </Route>
                <Route path='/kontakty' element={
                    <Fragment>
                        <Badges />
                        <RightDesktop />
                        <Kontakty />
                        <Nav />
                    </Fragment>
                }>
                </Route>


                <Route path='/kalendarz' element={
                    <Fragment>
                        <Badges />
                        <RightDesktop />
                        <Kalendarz />
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