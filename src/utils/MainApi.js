import * as Constants from './Constants';

function signUp({ name, password, email }) {
  return fetch(`${Constants.mainApiUrl}/signup`, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({ name, password, email }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
  });
}

function signIn({ password, email }) {
  return fetch(`${Constants.mainApiUrl}/signin`, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({ password, email }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    if (res.ok) {
      return res;
    }

    return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
  });
}

function signOut() {
  return fetch(`${Constants.mainApiUrl}/signOut`, {
    method: 'POST',
    credentials: 'include',
  }).then((res) => {
    if (res.ok) {
      return res;
    }

    return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
  });
}

function checkToken() {
  return fetch(`${Constants.mainApiUrl}/users/me`, {
    method: 'GET',
    credentials: 'include',
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
  });
}

function saveArticle({ link, keyword, title, text, date, source, image }) {
  const card = { link, keyword, title, text, date, source, image };
  if (!image) {
    delete card.image;
  }

  return fetch(`${Constants.mainApiUrl}/articles`, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(card),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
  });
}

function getArticles() {
  return fetch(`${Constants.mainApiUrl}/articles`, {
    method: 'GET',
    credentials: 'include',
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
  });
}

function deleteArticle(id) {
  return fetch(`${Constants.mainApiUrl}/articles/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
  });
}

export {
  checkToken,
  signUp,
  signIn,
  signOut,
  saveArticle,
  deleteArticle,
  getArticles,
};
