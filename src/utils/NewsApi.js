import * as Constants from './Constants';
import { DateTime } from 'luxon';

function getNews(query) {
  const dateFrom = DateTime.local().minus({ days: 7 }).toFormat('yyyy-MM-dd');

  return fetch(
    `${Constants.NEWS_API_URL}?apiKey=${Constants.NEWS_API_KEY}&q=${query}&from=${dateFrom}&pageSize=100`,
    { method: 'GET' }
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
  });
}

export { getNews };
