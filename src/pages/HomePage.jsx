import React from 'react';
import CountryList from '../components/country-list/CountryList';
import Header from '../components/header/Header';

export default function HomePage() {
  return (
    <div className="home-page__container">
      <Header />
      <CountryList />
    </div>
  );
}
