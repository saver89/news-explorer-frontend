import { DateTime } from 'luxon';
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import NewsCardList from '../NewsCardList/NewsCardList';
import './SavedNews.css';

function SavedNews({ savedCards, cardSaveHandler, cardDeleteHandler }) {
  return (
    <section className="saved-news">
      <NewsCardList>
        {savedCards.map((card) => {
          return (
            <NewsCard
              card={{
                imageLink: card.image,
                cardAlt: card.title,
                dateString: DateTime.fromISO(card.date)
                  .setLocale('ru')
                  .toFormat('d MMMM, yyyy'),
                date: DateTime.fromISO(card.date).toFormat('dd-MM-yyyy'),
                publishedAt: card.date,
                title: card.title,
                description: card.text,
                source: card.source,
                link: card.link,
                keyword: card.keyword,
                _id: card._id,
              }}
              isSaved={true}
              onSave={cardSaveHandler}
              onDelete={cardDeleteHandler}
              key={card.link}
            />
          );
        })}
      </NewsCardList>
    </section>
  );
}

export default SavedNews;
