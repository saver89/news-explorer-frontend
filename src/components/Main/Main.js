import React from 'react';
import './Main.css';
import NewsCard from '../NewsCard/NewsCard';
import './Main.css';
import Preloader from '../Preloader/Preloader';
import NewsCardList from '../NewsCardList/NewsCardList';

function Main() {
  return (
    <main className="main">
      <Preloader text="Идет поиск новостей" />
      <h2 className="main__title">Результаты поиска</h2>
      <NewsCardList>
        <NewsCard
          imageLink="https://source.unsplash.com/kLfkVa_4aXM"
          cardAlt="Компьютер"
          dateString="2 августа, 2019"
          date="2019-08-02"
          title="Национальное достояние – парки"
          description="В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе."
          source="Лента.ру"
          isSaved={false}
        />
        <NewsCard
          imageLink="https://source.unsplash.com/vw38Y7VPpCg"
          cardAlt="Птица"
          dateString="2 августа, 2019"
          date="2019-08-02"
          title="Лесные огоньки: история одной фотографии"
          description="Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного
        из местных чудес природы."
          source="Медуза"
          isSaved={true}
          tag="Природа"
        />
        <NewsCard
          imageLink="https://source.unsplash.com/vw38Y7VPpCg"
          cardAlt="Птица"
          dateString="2 августа, 2019"
          date="2019-08-02"
          title="Лесные огоньки: история одной фотографии"
          description="Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного
        из местных чудес природы."
          source="Медуза"
          isSaved={true}
        />
        <NewsCard
          imageLink="https://source.unsplash.com/vw38Y7VPpCg"
          cardAlt="Птица"
          dateString="2 августа, 2019"
          date="2019-08-02"
          title="Лесные огоньки: история одной фотографии"
          description="Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного
        из местных чудес природы."
          source="Медуза"
          isSaved={true}
        />
      </NewsCardList>
      <button className="main__more-button">Показать еще</button>
    </main>
  );
}

export default Main;
