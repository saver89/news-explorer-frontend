import React, { useState } from 'react';
import './Main.css';
import NewsCard from '../NewsCard/NewsCard';
import Preloader from '../Preloader/Preloader';
import NewsCardList from '../NewsCardList/NewsCardList';
import NotFound from '../NotFound/NotFound';
import { DateTime } from 'luxon';

function Main({
  showLoader,
  showIcon,
  loaderText,
  showCards,
  newsCards,
  savedCards,
  cardSaveHandler,
  cardDeleteHandler,
  keyword,
}) {
  const [cardsEndIndex, setCardsEndIndex] = useState(3);

  let cardList = null;
  if (showCards) {
    cardList = newsCards.length ? (
      <>
        <h2 className="main__title">Результаты поиска</h2>
        <NewsCardList>
          {newsCards.slice(0, cardsEndIndex).map((card) => {
            const savedCard = savedCards.find(
              (savedCard) => savedCard.link === card.url
            );

            return (
              <NewsCard
                card={{
                  imageLink: card.urlToImage,
                  cardAlt: card.title,
                  dateString: DateTime.fromISO(card.publishedAt)
                    .setLocale('ru')
                    .toFormat('d MMMM, yyyy'),
                  date: DateTime.fromISO(card.publishedAt).toFormat(
                    'dd-MM-yyyy'
                  ),
                  publishedAt: card.publishedAt,
                  title: card.title,
                  description: card.description,
                  source: card.source.name,
                  link: card.url,
                  keyword: keyword,
                  _id: savedCard ? savedCard._id : null,
                }}
                isSaved={!!savedCard}
                onSave={cardSaveHandler}
                onDelete={cardDeleteHandler}
                key={card.url}
              />
            );
          })}
        </NewsCardList>
        {cardsEndIndex < newsCards.length ? (
          <button
            className="main__more-button"
            onClick={() => setCardsEndIndex(cardsEndIndex + 3)}
          >
            Показать еще
          </button>
        ) : null}
      </>
    ) : (
      <NotFound
        showImage={true}
        title="Ничего не найдено"
        text="К сожалению по вашему запросу ничего не найдено."
      />
    );
  }

  const mainBlock =
    showLoader || cardList ? (
      <main className="main">
        {showLoader ? (
          <Preloader showIcon={showIcon} text={loaderText} />
        ) : null}
        {cardList}
      </main>
    ) : null;

  return <>{mainBlock}</>;
}

export default Main;
