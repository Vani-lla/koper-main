import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './ArticleView.css'

const http = new XMLHttpRequest();

export default function ArticleView() {
    const [data, setData] = useState(0);
    const [fotos, setFotos] = useState(0);
    const [loading, setLoading] = useState(0);

    // setLoading(true);

    const id = useParams().id;

    useEffect(() => {
        const url = `https://koper.edu.pl/Api/article.php?nr=${id}`;

        http.open("GET", url);
        http.send();
        http.onreadystatechange = () => {
            let d = http.responseText;
            if (http.readyState === 4) {
                console.log(JSON.parse(d)[0]);
                console.log(JSON.parse(d)[0].foto.split('_'));
                setData(JSON.parse(d)[0]);
                let f = JSON.parse(d)[0].foto.split('_');
                f.splice(-1);
                setFotos(f);
                setLoading(true);
            }
        }
    }, []);

    if (loading) {
        return (
            <div className='single-article-view tile'>
                <h1>
                    Dlaczego życie nie ma sensu?
                </h1>
                <div className='article-images'>
                    {fotos.map((ind, url) => {
                        return (
                            <div key={url}>
                                <img src={`https://koper.edu.pl/podstrony/page${id}/${ind}`} />
                            </div>
                        )
                    })}
                </div>
    
                <p dangerouslySetInnerHTML={{__html: data.tresc}}>
                </p>
            </div>
        )
    } else {
        <div className='loader'/>
    }
}
