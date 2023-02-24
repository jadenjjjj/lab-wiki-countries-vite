import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  return (
    <ul>
      {countries.map((country) => (
        <li key={country.alpha3Code}>
          <Link to={`/countries/${country.alpha3Code}`}>
            {country.name.common} <img src={`https://www.countryflags.io/${country.alpha2Code}/shiny/32.png`} alt={`${country.name.common} flag`} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CountriesList;

