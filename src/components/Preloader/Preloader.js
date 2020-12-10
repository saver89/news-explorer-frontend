import React from 'react';
import './Preloader.css';

function Preloader({ showIcon, text }) {
  return (
    <div className="preloader">
      {showIcon ? <i className="preloader__icon"></i> : null}
      <p className="preloader__text">{text}</p>
    </div>
  );
}

export default Preloader;
