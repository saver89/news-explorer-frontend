import React from 'react';
import { useLocation } from 'react-router-dom';
import './NewsCards.css';

function NewsCard({
  imageLink,
  cardAlt,
  date,
  dateString,
  title,
  description,
  source,
  isSaved,
  tag,
}) {
  const logedIn = false;
  const location = useLocation();
  const cardButton =
    location.pathname === '/saved-news' ? (
      <button
        className="news-card__trash-button"
        type="button"
        aria-label="удалить"
      ></button>
    ) : (
      <button
        className={`news-card__save-button ${
          isSaved ? 'news-card__save-button_marked' : ''
        }`}
        type="button"
        aria-label="сохранить"
      >
        {logedIn ? null : (
          <span className="news-card__button-tooltip">
            Войдите, чтобы сохранять статьи
          </span>
        )}
      </button>
    );
  const tagElement =
    location.pathname === '/saved-news' && tag ? (
      <div className="news-card__tag">{tag}</div>
    ) : null;

  return (
    <div className="news-card">
      <div className="news-card__content-container">
        <div className="news-card__image-container">
          <img className="news-card__image" src={imageLink} alt={cardAlt} />
          {cardButton}
          {tagElement}
        </div>
        <time className="news-card__date" datetime={date}>{dateString}</time>
        <h3 className="news-card__title">{title}</h3>
        <p className="news-card__description">{description}</p>
      </div>
      <p className="news-card__source">{source}</p>
    </div>
  );
}

export default NewsCard;
