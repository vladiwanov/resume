import React from 'react';
import s from './Header.module.scss';
import myPhoto from '../../images/vladiwanov.png';

export default function Header() {
  return (
    <header className={`${s.header}`}>
      <div>
        <h1 className={`${s.title} ${s.headerTitle}`}>Volodymyr Ivanov</h1>
      </div>
      <div className={` ${s.personality} `}>
        <section className={`${s.content}`}>
          <div className={s.contacts}>
            <a className={s.link} href="mailto: vl.i@icloud.com">
              vl.i@icloud.com
            </a>
          </div>
          <div className={s.contacts}>
            <a
              className={`${s.in} ${s.link}`}
              href="https://www.linkedin.com/in/volodymyr-ivanov-94a4638a/"
            >
              https://www.linkedin.com/in/ volodymyr-ivanov
            </a>
          </div>
          <div className={s.contacts}>
            <a className={s.link} href="https://github.com/vladiwanov">
              https://github.com/vladiwanov
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
