import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Header from './components/Header'
import SearchBar from './components/SearchBar'

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

  return (
    <>
      <Header />
      <SearchBar />
    </>
  );
}

export default App;
