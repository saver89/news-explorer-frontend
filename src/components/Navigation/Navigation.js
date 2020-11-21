import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-list-item">
          <Link className="header__nav-link" to="/">
            Главная
          </Link>
        </li>
        <li className="header__nav-list-item">
          <Link className="header__nav-link" to="/saved-news">
            Сохраненные статьи
          </Link>
        </li>
        <li className="header__nav-list-item">
          <button className="header__nav-button">Авторизоваться</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
