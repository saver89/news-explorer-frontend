import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './NotificationPopup.css';

function NotificationPopup({ title, isVisible, onClose, onSubmit }) {
  return (
    <PopupWithForm
      title={title}
      popupType='notification'
      isVisible={isVisible}
      onClose={onClose}
      onSubmit={onSubmit}
    >
      <button type="submit" className="popup-with-form__notification-submit">
        Войти
      </button>
    </PopupWithForm>
  );
}

export default NotificationPopup;
