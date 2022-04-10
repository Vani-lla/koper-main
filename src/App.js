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
                        <Nav />
                        <Badges />
                        <RightDesktop />
                        <ArticleView />
                    </Fragment>
                }>
                </Route>
                <Route path='/rekrutacja' element={
                    <Fragment>
                        <Nav />
                        <Badges />
                        <RightDesktop />
                        <Recrutation />
                    </Fragment>
                }>
                </Route>
                <Route path='/erasmus' element={
                    <Fragment>
                        <Nav />
                        <Badges />
                        <RightDesktop />
                    </Fragment>
                }>
                </Route>
                <Route path='/historia' element={
                    <Fragment>
                        <Nav />
                        <Badges />
                        <RightDesktop />
                        <History />
                    </Fragment>
                }>
                </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default App;