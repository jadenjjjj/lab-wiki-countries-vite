import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import countries from './countries.json'
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import { Route, Routes } from 'react-router-dom'

function App() {
  //const [count, setCount] = useState(0)
  const [countryData, setCountryData] = useState(countries); 

  useEffect(() => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
      .then(response => response.json())
      .then(data => setCountryData(data))
      .catch(error => console.log(error));
  }, []);

  return (

    <div className='App'>
      <Navbar />
      <CountriesList countries={countryData} />
    </div>

  )
}

export default App
