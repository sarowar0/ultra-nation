import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Country from './component/Country';
import Population from './component/population/Population';

function App() {
  const [country, setCountry] = useState([]);
  const [addCountry,setAddCountry] = useState([])
  const first10 = country.slice(0,8);
  useEffect(()=> {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountry(data))
    .catch(error =>console.log(error))
  },[])

 const countryHandler = (country)=> {
   const newAddCountry = [...addCountry, country];
   setAddCountry(newAddCountry);
 }
  return (
    <div className="App">
      <h3 className='text-center'>Total country {country.length}</h3>
      <h5 className="text-center my-4">Total added country: {addCountry.length}</h5>
      {
        <Population addCountry={addCountry}></Population>
      }
      {
        country.map(country => <Country country={country} countryHandler={countryHandler} key={country.alpha3Code}></Country>)
      }
    </div>
  );
}

export default App;
