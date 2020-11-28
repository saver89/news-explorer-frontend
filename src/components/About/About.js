import React from 'react';
import './About.css';
import author from '../../images/author.png';

function About() {
  return (
    <section className="about">
      <div className="about__image-container">
        <img className="about__image" src={author} alt="Автор" />
      </div>
      <div className="about__text-container">
        <h2 className="about__author">Об авторе</h2>
        <p className="about__author-description">
          Это блок с описанием автора проекта. Здесь следует указать, как вас
          зовут, чем вы занимаетесь, какими технологиями разработки владеете.
        </p>
        <p className="about__author-description">
          Также можно рассказать о процессе обучения в Практикуме, чему вы тут
          научились, и чем можете помочь потенциальным заказчикам.
        </p>
      </div>
    </section>
  );
}

export default About;
