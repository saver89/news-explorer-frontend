import React, { useEffect, useRef } from 'react';
import './PopupWithForm.css';

function PopupWithForm(props) {
  const childRef = useRef(null);
  function onOutsideClick(evt) {
    if (childRef.current && !childRef.current.contains(evt.target)) {
      props.onClose();
    }
  }

  useEffect(() => {
    function handler(evt) {
      if (evt.key === 'Escape') {
        props.onClose();
      }
    }

    document.addEventListener('keydown', handler);
    return () => {
      document.removeEventListener('keydown', handler);
    };
  }, [props]);

  return (
    <div
      className={`overlay ${props.isVisible ? 'overlay_opened' : ''}`}
      onClick={onOutsideClick}
    >
      <div className={`popup-with-form`} ref={childRef}>
        <button
          type="button"
          className="popup-with-form__close-button"
          aria-label="Закрыть"
          onClick={props.onClose}
        ></button>
        <form
          className={`popup-with-form__form  ${
            props.popupType
              ? 'popup-with-form__form_type_' + props.popupType
              : ''
          }`}
          name={props.name}
          onSubmit={props.onSubmit}
          action="/"
          method="GET"
          noValidate
        >
          <h2
            className={`popup-with-form__title ${
              props.popupType
                ? 'popup-with-form__title_type_' + props.popupType
                : ''
            }`}
          >
            {props.title}
          </h2>
          {props.children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
