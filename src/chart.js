import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';



const data = {
    labels: ['HTML', 'CSS', 'JavaScript', 'BootStrap 3', 'JQuery', 'SASS', 'ReactJS'],
    datasets: [
        {
            label: 'Competency',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

export default class BarChart extends Component {
    render() {
        return (
            <div>
                <Bar ref="chart" data={data} className="bar-chart"/>
            </div>
        );
    }

    componentDidMount() {
        const { datasets } = this.refs.chart.chartInstance.data
        console.log(datasets[0].data);
    }
}