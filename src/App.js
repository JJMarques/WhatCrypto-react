import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Graph from './components/Graph'

function App() {

  const [fetchUrl, setFetchUrl] = useState('')
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCoins = async () => {
      const result = await axios(fetchUrl)
      setData(result.data)
      setIsLoading(false)
    }
    fetchCoins()

  }, [fetchUrl])

  const changeUrl = (fd, ld) => {
    setFetchUrl(`https://api.exchangerate.host/timeseries?start_date=${fd}&end_date=${ld}`)
    console.log(`Url changed to ${fetchUrl}`)
  }

  return (
    <>
      <Header />
      <SearchBar changeUrl={changeUrl} />
      <Graph />
    </>
  );
}

export default App;
