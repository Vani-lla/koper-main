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
            articleLimit: 10
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

                this.setState({ loading: false })
            }
        }

        window.addEventListener('scroll', () => {
            this.setState({ articleLimit: this.state.articleLimit + 0.2 })
            console.log(this.state.articleLimit);
        })
    }

    render() {
        if (this.state.loading) {
            return <div></div>
        } else {
            return (
                <Fragment>
                    <div className='article-filter'>

                    </div>
                    <div className='articles'>
                        {this.state.data.map((article, ind) => {
                            if (this.state.articleLimit >= ind) {
                                return (
                                    <a key={ind} className='tile' href={`article/${article.id}`}>
                                        <div className='article'>
                                            <div className='glow-container'>
                                                <img className='article-glow' src={`https://koper.edu.pl/podstrony/page${article.id}/glow.jpg`} alt='Article image' />
                                            </div>
                                            <div className='article-title'>
                                                <h1>{article.tytul}
                                                </h1>
                                            </div>
                                        </div>
                                    </a>
                                );
                            }
                        })}
                    </div>
                </Fragment>
            )
        }
    }
}
