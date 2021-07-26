/* eslint-disable react/prop-types */
import React from 'react';

export default function CountryCard({ country }) {
  return (
    <div className="country__card noselect">
      <div className="country__flag">
        <img src={country.flag} alt="" />
      </div>
      <div className="country__info">
        <h3 className="country-name">{country.name}</h3>
        <h5 className="country-population">
          Population : <span>{country.population.toLocaleString()}</span>
        </h5>
        <h5 className="country-region">
          Region : <span>{country.region}</span>
        </h5>
        <h5 className="country-capital">
          Capital : <span>{country.capital}</span>
        </h5>
      </div>
    </div>
  );
}
