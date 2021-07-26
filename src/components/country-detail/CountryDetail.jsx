import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import './style/CountryDetail.css';

export default function CountryDetail() {
  const [country, setCountry] = React.useState([]);
  const { name } = useParams();
  const initialUrl = `https://restcountries.eu/rest/v2/name/${name}`;

  React.useEffect(async () => {
    await axios.get(initialUrl).then((res) => {
      setCountry(res.data);
    });
  }, []);

  return (
    <>
      {country.map((data) => {
        const {
          numericCode,
          flag,
          nativeName,
          population,
          region,
          subregion,
          capital,
          currencies,
          languages,
        } = data;
        return (
          <div className="country-detail__container" key={numericCode}>
            <div className="country-detail__flag">
              <img src={flag} alt={name} />
            </div>
            <div className="country-detail__content">
              <div className="country-detail__primary">
                <h3>{name}</h3>
                <h6>
                  Native Name: <span>{nativeName}</span>{' '}
                </h6>
                <h6>
                  Population: <span>{population.toLocaleString()}</span>{' '}
                </h6>
                <h6>
                  Region: <span>{region}</span>{' '}
                </h6>
                <h6>
                  Sub region: <span>{subregion}</span>{' '}
                </h6>
                <h6>
                  Capital: <span>{capital}</span>{' '}
                </h6>
              </div>
              <div className="country-detail__secondary">
                <h6>
                  Currencies:{' '}
                  <span>{`${currencies[0].name} ${currencies[0].symbol}`}</span>
                </h6>
                <h6>
                  Languages: <span>{languages[0].name}</span>{' '}
                </h6>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
