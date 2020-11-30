import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function SignupPopup({ isVisible, onClose, onBottomClick, onSubmit }) {
  return (
    <PopupWithForm
      title="Регистрация"
      onClose={onClose}
      isVisible={isVisible}
      onSubmit={onSubmit}
    >
      <fieldset className="popup-with-form__fieldset">
        <label
          className="popup-with-form__label"
          htmlFor="register-email-input"
        >
          Email
        </label>
        <input
          className="popup-with-form__input"
          name="email"
          placeholder="Введите почту"
          type="email"
          id="register-email-input"
          required
        />
        <span className="popup-with-form__validation-error"></span>
      </fieldset>
      <fieldset className="popup-with-form__fieldset">
        <label
          className="popup-with-form__label"
          htmlFor="register-password-input"
        >
          Пароль
        </label>
        <input
          className="popup-with-form__input"
          name="password"
          placeholder="Введите пароль"
          type="password"
          id="register-password-input"
          required
        />
        <span className="popup-with-form__validation-error">
          Это обязательное поле
        </span>
      </fieldset>
      <fieldset className="popup-with-form__fieldset">
        <label className="popup-with-form__label" htmlFor="register-name-input">
          Имя
        </label>
        <input
          className="popup-with-form__input"
          name="password"
          placeholder="Введите свое имя"
          id="register-name-input"
          required
        />
        <span className="popup-with-form__validation-error">
          Это обязательное поле
        </span>
      </fieldset>
      <button type="submit" className="popup-with-form__submit-button">
        Зарегистрироваться
      </button>
      <span className="popup-with-form__bottom-text">
        или{' '}
        <button
          className="popup-with-form__bottom-button"
          onClick={onBottomClick}
          type="button"
        >
          Войти
        </button>
      </span>
    </PopupWithForm>
  );
}

export default SignupPopup;
