import React from 'react';
import notFound from '../../images/not-found.svg';
import './NotFound.css';

function NotFound({ showImage, title, text }) {
  return (
    <div className="not-found">
      {showImage ? (
        <img className="not-found__image" src={notFound} alt={title}></img>
      ) : null}
      <h2 className="not-found__title">{title}</h2>
      <p className="not-found__text">{text}</p>
    </div>
  );
}

export default NotFound;
