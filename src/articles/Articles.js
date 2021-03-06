import React, { Component, Fragment } from 'react'
import './Articles.css'

const url = 'https://koper.edu.pl/Api/articles.php';
const http = new XMLHttpRequest();

export default class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: [],
            category: null,
            articleLimit: 19,
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
            return <div className='loader' />
        } else {
            return (
                <Fragment>
                    <div className='articles'>
                        {this.state.data.map((article, ind) => {
                            if (this.state.articleLimit >= ind) {
                                if (this.state.articleFilter === 1 && article.kategoria === "sport") {
                                    return (
                                        <a key={ind} className='tile' href={`article/${article.id}`}>
                                            <div className='article'>
                                                <div className='glow-container'>
                                                    <img className='article-glow' src={`https://koper.edu.pl/podstrony/page${article.id}/glow.jpg`} alt='Article' />
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
                                                    <img className='article-glow' src={`https://koper.edu.pl/podstrony/page${article.id}/glow.jpg`} alt='Article' />
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
                                                <div className='glow-container' id={"glow" + article.id.toString()}>
                                                    <img className='article-glow' src={`https://koper.edu.pl/podstrony/page${article.id}/glow.jpg`} alt='Article' onError={() => { document.getElementById("glow" + article.id.toString()).style = "display: none;" }} />
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
                            return 
                        })}

                        <a href='/articles' className='see-more tile'>
                            {/* <div> */}
                            <h1>Zobacz wszystkie artyku??y</h1>
                            {/* </div> */}
                        </a>
                    </div>
                </Fragment>
            )
        }
    }
}
