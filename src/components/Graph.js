import React, { useEffect, useState } from 'react'
import { Line, defaults } from 'react-chartjs-2';

function Graph({ fetchedData }) {

    defaults.global.defaultFontColor = '#080B22'
    defaults.global.defaultFontStyle = '800'
    defaults.global.defaultFontSize = 15
    defaults.global.defaultFontFamily = 'Nunito'

    const [labels, setLabels] = useState([])
    const [graphData, setGraphData] = useState([])
    const [coinList, setCoinList] = useState([])
    const [currentCoin, setCurrentCoin] = useState("AED")

    //Whenever the data is fetched / dates are fetched
    useEffect(() => {
        if (fetchedData.rates) {
            const manageFetchedData = () => {

                let labelsArray = []
                let graphDataArray = []
                let coinSelect = []

                Object.keys(fetchedData.rates).forEach(value => {
                    //Get the labels of the dates to display on the graph
                    labelsArray.push(value)
                    graphDataArray.push(fetchedData.rates[value])
                  });
                setLabels(labelsArray)

                //Get selectable coins for the coin selector input
                Object.keys(graphDataArray[0]).forEach(value => {
                    coinSelect.push(value)
                })
                setCoinList(coinSelect)
            
                let data = []
                graphDataArray.forEach((value) => {
                    data.push(value[currentCoin])
                })
                setGraphData(data)
            }
            manageFetchedData()
        }
        
    }, [fetchedData, currentCoin])

    //Map trough the coin values and display it on the input select
    const inputSelectCoin = coinList.map((value) => {
        return(<option value={value} key={value}>{value}</option>)
    })

    //OnChange function for the coin select
    const changeCoin = (e) => {
        setCurrentCoin(e.target.value)
    }

    //Graphic display options
    const graphOptions = {
        labels: labels,
        datasets: [
            {
                label: '',
                fill: true,
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
                data: graphData
            }
        ],
        options: {
            //  responsive: true,
             maintainAspectRatio : false
        }
    };

    return (
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', background: '#F1F1F1', padding: '4em', minHeight: '600px'}}>
            {fetchedData.rates ?
                <select style={{padding: '0.5em 1.5em', borderRadius: '10px', marginBottom: '2em'}} onChange={changeCoin}>
                    {inputSelectCoin}
                </select> :
                <></>
            }
            <div style={{ position: 'relative', width: '1200px' }}>
                {fetchedData.rates ? <Line data={graphOptions} style={{height: '100%'}} /> : <></>}
            </div>
        </div>
    )
}

export default Graph
