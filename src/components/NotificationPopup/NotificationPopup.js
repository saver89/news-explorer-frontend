import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './NotificationPopup.css';

function NotificationPopup({
  title,
  isVisible,
  onClose,
  onSubmit,
  showSubmit,
}) {
  return (
    <PopupWithForm
      title={title}
      popupType="notification"
      isVisible={isVisible}
      onClose={onClose}
      onSubmit={onSubmit}
    >
      {showSubmit ? (
        <button type="submit" className="popup-with-form__notification-submit">
          Войти
        </button>
      ) : null}
    </PopupWithForm>
  );
}

export default NotificationPopup;
