import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './NewsCards.css';

function NewsCard({ card, isSaved, onSave, onDelete }) {
  const currentUser = useContext(CurrentUserContext);
  const logedIn = currentUser._id ? true : false;
  const location = useLocation();

  const cardButton =
    location.pathname === '/saved-news' ? (
      <button
        className="news-card__trash-button"
        type="button"
        aria-label="удалить"
        onClick={(evt) => {
          onDelete(card._id);
          evt.stopPropagation();
        }}
      ></button>
    ) : (
      <button
        className={`news-card__save-button ${
          isSaved ? 'news-card__save-button_marked' : ''
        }`}
        onClick={(evt) => {
          !isSaved
            ? onSave({
                link: card.link,
                keyword: card.keyword,
                title: card.title,
                text: card.description,
                date: card.publishedAt,
                source: card.source,
                image: card.imageLink,
              })
            : onDelete(card._id);
          evt.stopPropagation();
        }}
        disabled={!logedIn}
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
    location.pathname === '/saved-news' && card.keyword ? (
      <div className="news-card__tag">{card.keyword}</div>
    ) : null;

  return (
    <div
      className="news-card"
      onClick={() => {
        window.location.assign(card.link);
      }}
    >
      <div className="news-card__content-container">
        <div className="news-card__image-container">
          <img
            className="news-card__image"
            src={card.imageLink}
            alt={card.cardAlt}
          />
          {cardButton}
          {tagElement}
        </div>
        <time className="news-card__date" dateTime={card.date}>
          {card.dateString}
        </time>
        <h3 className="news-card__title">{card.title}</h3>
        <p className="news-card__description">{card.description}</p>
      </div>
      <p className="news-card__source">{card.source}</p>
    </div>
  );
}

export default NewsCard;
