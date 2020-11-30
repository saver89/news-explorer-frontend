import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function SigninPopup({ isVisible, onClose, onBottomClick, onSubmit }) {
  return (
    <PopupWithForm
      title="Вход"
      isVisible={isVisible}
      onClose={onClose}
      onSubmit={onSubmit}
    >
      <fieldset className="popup-with-form__fieldset">
        <label className="popup-with-form__label" htmlFor="login-email-input">
          Email
        </label>
        <input
          className="popup-with-form__input"
          name="email"
          placeholder="Введите почту"
          type="email"
          id="login-email-input"
          required
        />
        <span className="popup-with-form__validation-error"></span>
      </fieldset>
      <fieldset className="popup-with-form__fieldset">
        <label
          className="popup-with-form__label"
          htmlFor="login-password-input"
        >
          Пароль
        </label>
        <input
          className="popup-with-form__input"
          name="password"
          placeholder="Введите пароль"
          type="password"
          id="login-password-input"
          required
        />
        <span className="popup-with-form__validation-error">
          Это обязательное поле
        </span>
      </fieldset>
      <button type="submit" className="popup-with-form__submit-button">
        Войти
      </button>
      <span className="popup-with-form__bottom-text">
        или{' '}
        <button
          className="popup-with-form__bottom-button"
          onClick={onBottomClick}
        >
          Зарегистрироваться
        </button>
      </span>
    </PopupWithForm>
  );
}

export default SigninPopup;
