import React from 'react';
import './style/CountryDetail.css';

export default function CountryDetail() {
  return (
    <div className="country-detail__container">
      <div className="country-detail__flag">
        <img src="https://restcountries.eu/data/afg.svg" alt="flag" />
      </div>
      <div className="country-detail__content">
        <div className="country-detail__primary">
          <h3>Country name</h3>
          <h6>
            Native name : <span>name</span>
          </h6>
          <h6>
            Population : <span>population</span>
          </h6>
          <h6>
            Region : <span>region</span>
          </h6>
          <h6>
            Sub region : <span>sub region</span>
          </h6>
          <h6>
            Capital : <span>Capital name</span>
          </h6>
        </div>
        <div className="country-detail__secondary">
          <h6>
            Languages : <span>Languages</span>
          </h6>
          <h6>
            Currencies : <span>Currencies</span>
          </h6>
        </div>
      </div>
    </div>
  );
}
