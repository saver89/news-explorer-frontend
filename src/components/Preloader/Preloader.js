import React from 'react';
import './Preloader.css';

function Preloader({ text }) {
  return (
    <div className="preloader">
      <i className="preloader__icon"></i>
      <p className="preloader__text">{text}</p>
    </div>
  );
}

export default Preloader;
