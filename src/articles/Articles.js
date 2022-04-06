import React, { Component } from 'react'
import './Articles.css'

const url = 'https://koper.edu.pl/Api/artykul2.php';
const http = new XMLHttpRequest();


export default class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: [],
            category: null
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
    }

    render() {
        if (this.state.loading) {
            return <h1>loading</h1>
        } else {
            return (
                <div className='articles'>
                    {this.state.data.map((article, ind) => {
                        return (
                            <div key={ind} className='article'>
                                <img className='article-glow' src={`https://koper.edu.pl/podstrony/page${article.id}/glow.jpg`} alt='Article image'/>
                                <h1 className='article-title'>{article.tytul}</h1>
                                <p className='article-content' dangerouslySetInnerHTML={{ __html: article.tresc}}></p>
                            </div>
                        );
                    })}
                </div>
            )
        }
    }
}
