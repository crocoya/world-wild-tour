import React from 'react';
import { Link } from 'react-router-dom';
import './style/Header.css';

export default function Header() {
  return (
    <div className="header__container">
      <Link to="/">
        <span className="header__title">World Wild Tour</span>
      </Link>
    </div>
  );
}
