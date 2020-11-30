import React from 'react';
import './Footer.css';
import fb from '../../images/fb.svg';
import github from '../../images/github.svg';

function Footer() {
  return (
    <footer className="footer">
      <small className="footer__copyright">
        &copy; 2020 Supersite, Powered by News API
      </small>
      <div className="footer__container">
        <ul className="footer__list">
          <li className="footer__list-item">
            <a href="/" className="footer__link">
              Главная
            </a>
          </li>
          <li className="footer__list-item">
            <a href="https://praktikum.yandex.ru/" className="footer__link">
              Яндекс.Практикум
            </a>
          </li>
        </ul>
        <ul className="footer__social-list">
          <li className="footer__social-item">
            <a href="https://github.com/saver89" className="footer__social-link">
              <img src={github} alt="github" className="footer__social-link-image"></img>
            </a>
          </li>
          <li className="footer__social-item">
            <a href="https://www.facebook.com/profile.php?id=100001448944230" className="footer__social-link">
              <img src={fb} alt="facebook" className="footer__social-link-image"></img>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
