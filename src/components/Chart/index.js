import React, { Component } from 'react';
import { Line } from "react-chartjs-2"
import './styles.css';

class Chart extends Component {
    render() {
        return (
            <Line data={this.props.data} options={this.props.options}/>
        );
    }
}

export default Chart;