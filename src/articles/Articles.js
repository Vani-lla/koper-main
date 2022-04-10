import React, { Component, Fragment } from 'react'
import './Articles.css'

const url = 'https://koper.edu.pl/Api/artykul2.php';
const http = new XMLHttpRequest();

export default class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: [],
            category: null,
            articleLimit: 20,
            articleFilter: 0
        }
    }

    componentDidMount() {
        http.open("GET", url);
        http.send();

        http.onreadystatechange = () => {
            let data = http.responseText;
            if (http.readyState === 4) {
                for (let i = 0; i < JSON.parse(data).length; i++) {
                    const element = JSON.parse(data)[i];
                    this.state.data.push(element);
                }
                console.log(this.state.data[0])

                this.setState({ loading: false })
            }
        }
    }

    render() {
        if (this.state.loading) {
            return (
                <Fragment>
                    <div className='school-image tile'>

                    </div>
                    <div className='article-filter'>
                        {this.state.articleFilter === 0 ? <div onClick={() => { this.setState({ articleFilter: 0 }) }} className='filter-button tile filter-active'>Wszystkie</div> : <div onClick={() => { this.setState({ articleFilter: 0 }); console.log(this.state.articleFilter) }} className='filter-button tile'>Wszystkie</div>}
                        {this.state.articleFilter === 1 ? <div onClick={() => { this.setState({ articleFilter: 1 }) }} className='filter-button tile filter-active'>Sport</div> : <div onClick={() => { this.setState({ articleFilter: 1 }); console.log(this.state.articleFilter) }} className='filter-button tile'>Sport</div>}
                        {this.state.articleFilter === 2 ? <div onClick={() => { this.setState({ articleFilter: 2 }) }} className='filter-button tile filter-active'>Biblioteka</div> : <div onClick={() => { this.setState({ articleFilter: 2 }); console.log(this.state.articleFilter) }} className='filter-button tile'>Biblioteka</div>}
                    </div>
                    <img src="https://i.pinimg.com/originals/13/1d/19/131d198170c4c42f03145d30602f06f9.png" className='loader' />
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <div className='school-image tile'>
                        <img src='#' alt='zdjęcie kopera czy coś'></img>
                    </div>
                    <div className='article-filter'>
                        {this.state.articleFilter === 0 ? <div className='filter-button filter-active tile'>Wszystkie</div> : <div onClick={() => { this.setState({ articleFilter: 0 }); console.log(this.state.articleFilter) }} className='filter-button tile'>Wszystkie</div>}
                        {this.state.articleFilter === 1 ? <div className='filter-button filter-active tile'>Sport</div> : <div onClick={() => { this.setState({ articleFilter: 1 }); console.log(this.state.articleFilter) }} className='filter-button tile'>Sport</div>}
                        {this.state.articleFilter === 2 ? <div className='filter-button filter-active tile'>Biblioteka</div> : <div onClick={() => { this.setState({ articleFilter: 2 }); console.log(this.state.articleFilter) }} className='filter-button tile'>Biblioteka</div>}
                    </div>
                    <div className='articles'>
                        {this.state.data.map((article, ind) => {
                            if (this.state.articleLimit >= ind) {
                                if (this.state.articleFilter === 1 && article.kategoria === "sport") {
                                    return (
                                        <a key={ind} className='tile' href={`article/${article.id}`}>
                                            <div className='article'>
                                                <div className='glow-container'>
                                                    <img className='article-glow' src={`https://koper.edu.pl/podstrony/page${article.id}/glow.jpg`} alt='Article image' />
                                                </div>
                                                <div className='article-title'>
                                                    <h1>
                                                        {article.tytul}
                                                    </h1>
                                                </div>
                                            </div>
                                        </a>
                                    );
                                } else if (this.state.articleFilter === 2 && article.kategoria === "biblio") {
                                    return (
                                        <a key={ind} className='tile' href={`article/${article.id}`}>
                                            <div className='article'>
                                                <div className='glow-container'>
                                                    <img className='article-glow' src={`https://koper.edu.pl/podstrony/page${article.id}/glow.jpg`} alt='Article image' />
                                                </div>
                                                <div className='article-title'>
                                                    <h1>
                                                        {article.tytul}
                                                    </h1>
                                                </div>
                                            </div>
                                        </a>
                                    );
                                } else if (this.state.articleFilter === 0) {
                                    return (
                                        <a key={ind} className='tile' href={`article/${article.id}`}>
                                            <div className='article'>
                                                <div className='glow-container' id={"glow"+article.id.toString()}>
                                                    <img className='article-glow' src={`https://koper.edu.pl/podstrony/page${article.id}/glow.jpg`} alt='Article image' onError={() => {document.getElementById("glow"+article.id.toString()).style = "display: none;"}}/>
                                                </div>
                                                <div className='article-title'>
                                                    <h1>
                                                        {article.tytul}
                                                    </h1>
                                                </div>
                                            </div>
                                        </a>
                                    );
                                }
                            }
                        })}
                    </div>
                </Fragment>
            )
        }
    }
}
