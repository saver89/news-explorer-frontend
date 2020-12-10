import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function SigninPopup({ isVisible, onClose, onBottomClick, onSubmit, validateObject }) {
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
          onChange={validateObject.handleChange}
        />
        <span className="popup-with-form__validation-error">{validateObject.errors["email"]}</span>
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
          onChange={validateObject.handleChange}
        />
        <span className="popup-with-form__validation-error">
          {validateObject.errors["password"]}
        </span>
      </fieldset>
      <button
        type="submit"
        className="popup-with-form__submit-button"
        disabled={!validateObject.isValid}
      >
        Войти
      </button>
      <span className="popup-with-form__bottom-text">
        или{' '}
        <button
          className="popup-with-form__bottom-button"
          onClick={onBottomClick}
          type="button"
        >
          Зарегистрироваться
        </button>
      </span>
    </PopupWithForm>
  );
}

export default SigninPopup;
