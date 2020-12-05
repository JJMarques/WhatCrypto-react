import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Graph from './components/Graph'

function App() {

  const [fetchUrl, setFetchUrl] = useState('')
  const [data, setData] = useState({})

  useEffect(() => {
    if (fetchUrl.length > 0) {
      const fetchCoins = async () => {
        const result = await axios(fetchUrl)
        setData(result.data)
      }
      fetchCoins()
    }

  }, [fetchUrl])

  const changeUrl = (fd, ld) => {
    setFetchUrl(`https://api.exchangerate.host/timeseries?start_date=${fd}&end_date=${ld}`)
  }

return (
  <>
    <Header />
    <SearchBar changeUrl={changeUrl} />
    <Graph fetchedData={data} />
  </>
);

}

export default App;
