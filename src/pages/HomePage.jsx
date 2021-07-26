import React from 'react';
import CountryList from '../components/country-list/CountryList';

export default function HomePage() {
  return (
    <div className="home-page__container">
      <h1>Home Page</h1>
      <CountryList />
    </div>
  );
}
