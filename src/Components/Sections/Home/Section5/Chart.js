import "../HomeSection.css"
import React from 'react';
import Chart from 'chart.js/auto';
import {Doughnut} from 'react-chartjs-2'
export default function BananasChart(){
    return(
    <Doughnut
    width={"50%"}
    height={"50%"}
    options={{ maintainAspectRatio: false }}
    data={{    
    labels: ['Banana', 'Watermellon', 'Apples', 'Oranges'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [155.74,103.97,86.14,75.54],
            backgroundColor:[
              "yellow",
              "#FF476F",
              "#ff0800",
              "orange"
            ]
          }
        ]
    }}
    />)}