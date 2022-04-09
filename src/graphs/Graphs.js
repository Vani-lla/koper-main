import React, { Component } from 'react'
import './Graphs.css'

export default class Graphs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: null,
            g: 0
        };

        setInterval(() => {
            this.setState({ g: (this.state.g + 1) % this.state.data.length })
        }, 5000);
    };

    componentDidMount() {
        this.setState({ data: [{ "subject": "Matematyka", "koper": 69, "polska": 42 }, { "subject": "Polski", "koper": 50, "polska": 25 }] });
        this.setState({ loading: false });
    }

    graph(graph_data) {
        return (
            <div className='graph'>
                <div className='value-line' />
                <div className='base-line' />

                <div title='Wynik średni w Koperze' className='koper-value slupek' style={{ height: `${(2 * graph_data.koper).toString()}px` }} />
                <div className='slupek-description' style={{ transform: `translate(40px, -${(2 * graph_data.koper + 20).toString()}px)` }}>{graph_data.koper}%</div>
                <div title='Wynik średni w Polsce' className='poland-value slupek' style={{ height: `${(2 * graph_data.polska).toString()}px` }} />
                <div className='slupek-description' style={{ transform: `translate(120px, -${(2 * graph_data.polska + 20).toString()}px)` }}>{graph_data.polska}%</div>


                <div className='graph-legend'>
                    Wyniki średnie w <b className='koper-highlight'>Koperze</b> oraz <b className='poland-highlight'>Polsce</b>
                </div>
            </div>
        )
    }

    render() {
        if (!this.state.loading) {
            return (
                <div className='tile' id='graphs'>
                    {this.graph(this.state.data[this.state.g])}
                    {this.state.data.map((graph_data, index) => {
                        if (this.state.g === index) {
                            return <h1 key={index} className='graph-subject active'>{graph_data.subject}</h1>
                        } else {
                            return <h1 key={index} className='graph-subject inactive'>{graph_data.subject}</h1>
                        }
                    })}
                </div>
            )
        }
        else {
            return <h1>Loading</h1>
        }
    }
}
