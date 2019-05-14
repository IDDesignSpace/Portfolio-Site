import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';



const data = {
    labels: ['HTML', 'CSS', 'JavaScript', 'BootStrap 3', 'JQuery', 'SASS', 'ReactJS'],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 5, 3, 5],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }],
     options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
};

export default class BarChart extends Component {
    render() {
       
        return (
            <div>
                <Bar ref="chart"  data={data} height={500} width={800} id="chart" className="bar-chart"/>
            </div>
        );
    }

    componentDidMount() {
        const { datasets } = this.refs.chart.chartInstance.data
        console.log(datasets[0].data);
    }
}