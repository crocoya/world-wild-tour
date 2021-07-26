import React from 'react';
import axios from 'axios';
import CountryCard from '../country-card/CountryCard';
import './style/CountryList.css';

export default function CountryList() {
  const initialUrl = 'https://restcountries.eu/rest/v2';
  const [countryData, setCountryData] = React.useState([]);
  React.useEffect(async () => {
    await axios.get(initialUrl).then((response) => {
      setCountryData(response.data);
    });
  }, []);

  return (
    <>
      <div className="country__items nav">
        {countryData.map((country) => {
          return <CountryCard country={country} />;
        })}
      </div>
    </>
  );
}
