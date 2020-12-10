import React, { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './SavedNewsHeader.css';

function SavedNewsHeader({ savedCards }) {
  const currentUser = useContext(CurrentUserContext);

  let savedNewsString = '';
  if (savedCards.length === 0) {
    savedNewsString = `${currentUser.name}, у вас нет сохранённых статей`;
  } else if (savedCards.length % 10 === 1 && savedCards.length % 100 !== 11) {
    savedNewsString = `${currentUser.name}, у вас ${savedCards.length} сохранённая статья`;
  } else if (
    savedCards.length % 10 === 2 ||
    savedCards.length % 10 === 3 ||
    savedCards.length % 10 === 4
  ) {
    savedNewsString = `${currentUser.name}, у вас ${savedCards.length} сохранённых статьи`;
  } else {
    savedNewsString = `${currentUser.name}, у вас ${savedCards.length} сохранённых статей`;
  }

  const savedTagsCount = savedCards.reduce((prevVal, curVal) => {
    prevVal[curVal.keyword] = prevVal[curVal.keyword]
      ? prevVal[curVal.keyword] + 1
      : 1;
    return prevVal;
  }, {});

  const sortedTags = [];
  for (const savedTag in savedTagsCount) {
    sortedTags.push({ name: savedTag, count: savedTagsCount[savedTag] });
  }
  sortedTags.sort((prevVal, curVal) => curVal.count - prevVal.count);

  let tags = null;
  if (sortedTags.length <= 3) {
    tags = (
      <span className="saved-news-header__tags">
        {sortedTags.map((tag) => tag.name).join(', ')}
      </span>
    );
  } else {
    tags = (
      <>
        <span className="saved-news-header__tags">
          {sortedTags
            .map((tag) => tag.name)
            .slice(0, 2)
            .join(', ')}
        </span>{' '}
        и{' '}
        <span className="saved-news-header__tags">{`${
          sortedTags.length - 2
        }-м другим`}</span>
      </>
    );
  }

  return (
    <section className="saved-news-header">
      <h1 className="saved-news-header__title">Сохранённые статьи</h1>
      <p className="saved-news-header__subtitle">{savedNewsString}</p>
      <p className="saved-news-header__keywords">По ключевым словам: {tags}</p>
    </section>
  );
}

export default SavedNewsHeader;
