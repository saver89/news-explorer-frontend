import React from 'react';
import './NewsCardList.css';

function NewsCardList(props) {
  return (
    <div className="news-card-list">
      {props.children}
    </div>
  );
}

export default NewsCardList;
