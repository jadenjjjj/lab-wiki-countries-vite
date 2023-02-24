import React from 'react';
import { useParams } from 'react-router-dom';

function CountryDetails({ countries }) {
  const { id } = useParams();
  const country = countries.find((country) => country.alpha3Code === id);

  if (!country) {
    return <div>Country not found</div>;
  }

  const {
    name,
    capital,
    population,
    currencies,
    languages,
    flag,
  } = country;

  return (
    <div>
      <h1>{name}</h1>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <p>
        Currency: {Object.values(currencies)[0].name} (
        {Object.values(currencies)[0].symbol})
      </p>
      <p>Languages: {Object.values(languages).join(', ')}</p>
      <img src={flag} alt={`${name} flag`} />
    </div>
  );
}

export default CountryDetails;
