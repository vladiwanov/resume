import React from 'react';
import s from './Header.module.scss';
import myPhoto from '../../images/vladiwanov.png';
import contacts from '../../db/contacts.json'

export default function Header() {
  return (
    <header className={`${s.header}`}>
      <div>
        <h1 className={`${s.title} ${s.headerTitle}`}>{contacts.title}</h1>
      </div>
      <div className={` ${s.personality} `}>
        <section className={`${s.content}`}>
          <div className={s.contacts}>
            <a className={s.link} href={`mailto:${contacts.email}`}>
              {contacts.email}
            </a>
          </div>
          <div className={s.contacts}>
            <a
              className={`${s.in} ${s.link}`}
              target="_blank"
              rel="noreferrer"
              href={contacts.networks}
            >
             linkedIn: {contacts.title}
            </a>
          </div>
          <div className={s.contacts}>
            <a
              className={s.link}
              target="_blank"
              rel="noreferrer"
              href={contacts.github}
            >
              {contacts.github}
            </a>
          </div>
          <b className={`${s.subtitle} ${s.headerSunbtitle}`}>Ukraine, Kyiv</b>
        </section>
        <section className={s.position}>
          <h2 className={s.positionContent}>Full Stack Developer</h2>
        </section>
        <section className={s.photo}>
          <img className={s.myphoto} src={myPhoto} alt="Volodymyr Ivanov" />
        </section>
      </div>
    </header>
  );
}
