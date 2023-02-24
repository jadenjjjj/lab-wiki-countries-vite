import { useState } from 'react'
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

  return (

    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<CountriesList countries={countryData} />} />
        <Route path='/:id' element={<CountryDetails countries={countryData} />} />
      </Routes>
    </div>

  )
}

export default App
