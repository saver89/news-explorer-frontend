import React from 'react';
import './SavedNewsHeader.css';

function SavedNewsHeader() {
  return (
    <section className="saved-news-header">
      <h1 className="saved-news-header__title">Сохранённые статьи</h1>
      <p className="saved-news-header__subtitle">
        Грета, у вас 5 сохранённых статей
      </p>
      <p className="saved-news-header__keywords">
        По ключевым словам:{' '}
        <span className="saved-news-header__tags">Природа, Тайга</span> и{' '}
        <span className="saved-news-header__tags">2-м другим</span>
      </p>
    </section>
  );
}

export default SavedNewsHeader;
