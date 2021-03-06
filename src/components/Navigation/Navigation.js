import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Navigation.css';

function Navigation({ onLogin, isLoggedIn, onLogout }) {
  const location = useLocation();
  const theme = location.pathname === '/saved-news' ? 'black' : '';
  const [humburgerOpened, setHumburgerOpened] = useState(false);
  const currentUser = useContext(CurrentUserContext);

  return (
    <nav className="header__nav">
      <div
        className={`header__nav-container  ${
          humburgerOpened ? 'header__nav-container_opened' : ''
        }`}
      >
        <div className="header__nav-header">
          <Link to="/" className="header__nav-logo">
            NewsExplorer
          </Link>
          <button
            className="header__nav-close"
            onClick={() => {
              setHumburgerOpened(false);
            }}
          ></button>
        </div>
        <ul className="header__nav-list">
          <li
            className={`header__nav-list-item ${
              location.pathname === '/' ? 'header__nav-list-item_is-active' : ''
            }`}
          >
            <Link
              className={`header__nav-link ${
                theme === 'black' ? 'header__nav-link_black' : ''
              }`}
              to="/"
            >
              Главная
            </Link>
          </li>
          {isLoggedIn ? (
            <li
              className={`header__nav-list-item ${
                location.pathname === '/saved-news'
                  ? 'header__nav-list-item_is-active'
                  : ''
              }
          ${theme === 'black' ? 'header__nav-list-item_is-active_black' : ''}
          `}
            >
              <Link
                className={`header__nav-link ${
                  theme === 'black' ? 'header__nav-link_black' : ''
                }`}
                to="/saved-news"
              >
                Сохраненные статьи
              </Link>
            </li>
          ) : null}
          <li className="header__nav-list-item">
            <button
              className={`header__nav-button ${
                theme === 'black' ? 'header__nav-button_black' : ''
              }`}
              onClick={() => {
                setHumburgerOpened(false);
                if (isLoggedIn) {
                  onLogout();
                } else {
                  onLogin();
                }
              }}
            >
              {isLoggedIn ? currentUser.name : 'Авторизироваться'}
              {isLoggedIn ? (
                <i
                  className={`header__nav-logout-icon ${
                    theme === 'black' ? 'header__nav-logout-icon_black' : ''
                  }`}
                ></i>
              ) : null}
            </button>
          </li>
        </ul>
      </div>
      <button
        className={`header__nav-hamburger ${
          theme === 'black' ? 'header__nav-hamburger_black' : ''
        }`}
        onClick={() => {
          setHumburgerOpened(true);
        }}
      ></button>
    </nav>
  );
}

export default Navigation;
