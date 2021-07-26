import React from 'react';
import PropTypes from 'prop-types';

export default function CountryCard({ country }) {
  return (
    <div className="country__card noselect">
      <div className="country__flag">
        <img src={country.flag} alt="" />
      </div>
      <div className="country__name">
        <h3>{country.name}</h3>
      </div>
    </div>
  );
}

CountryCard.propTypes = {
  country: PropTypes.objectOf(PropTypes.array).isRequired,
};
