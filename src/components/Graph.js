import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';

function Graph({ fetchedData }) {

    const [labels, setLabels] = useState([])
    const [graphData, setGraphData] = useState([])

    useEffect(() => {
        const manageFetchedData = () => {

            let labelsArray = []

            console.log(fetchedData.rates)

            Object.keys(fetchedData.rates).forEach(key => {
                labelsArray.push(key)
              });
            setLabels(labelsArray)
        }
        manageFetchedData()
    }, [fetchedData])

    const data = {
        labels: labels,
        datasets: [
            {
                label: '',
                fill: false,
                lineTension: 0.3,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: '#56F0A3',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#080B22',
                pointBackgroundColor: '#080B22',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 3,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    };

    return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '2em'}}>
            <div style={{ position: 'relative', width: '1200px' }}>
                {fetchedData.rates ? <Line data={data} /> : <></>}
            </div>
        </div>
    )
}

export default Graph
