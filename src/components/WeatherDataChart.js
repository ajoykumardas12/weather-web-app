import React from "react";
import { Line } from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";

function WeatherDataChart(props) {
    return (
        <Line data={props.chartData} options={{
            plugins: {
                legend: {
                    display: false
                },
            },
            scales: {
                x: {
                    grid: {
                        color: '#62747a'
                    }
                },
                y: {
                    ticks: {
                        display: false
                    },
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        display: false
                    }
                }
            },
            maintainAspectRatio: false,
            fill: true,
            borderColor: '#5C9CE5',
            backgroundColor: '#5C9CE5',
            pointStyle: false,
        }}/>
    );
}

export default WeatherDataChart;