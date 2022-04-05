import React, { Component } from 'react'
import './Graphs.css'

export default class Graphs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: null
        };
    };

    componentDidMount() {
        this.setState({ data: [{ "subject": "Matematyka", "koper": 69, "polska": 42 }, { "subject": "polski", "koper": 42, "polska": 69 }] });
        this.setState({ loading: false });
    }

    graph(graph_data) {
        console.log(graph_data);
        return (
            <div className='graph'>
                <div className='value-line' />
                <div className='base-line' />

                <div className='koper-value slupek' style={{ height: `${(2 * graph_data.koper).toString()}px` }} />
                <div className='poland-value slupek' style={{ height: `${(2 * graph_data.polska).toString()}px` }} />
                <h1 className='graph-subject'>{graph_data.subject}</h1>

                <div className='graph-legend'>
                    <div className='legend'>
                        <div className='legend-color legend-koper'></div>
                        <div className='legend-color-description'></div>
                    </div>
                    <div className='legend'>
                        <div className='legend-color legend-poland'></div>
                        <div className='legend-color-description'></div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        if (!this.state.loading) {
            return (
                <div id='graphs'>
                    {this.graph(this.state.data[0])}
                </div>
            )
        }
        else {
            return <h1>Loading</h1>
        }
    }
}
