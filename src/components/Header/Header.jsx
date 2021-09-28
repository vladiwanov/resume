import React from 'react';
import s from './Header.module.scss';
import { MdPhone, MdMail } from 'react-icons/md';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import myPhoto from '../../images/vladiwanov.png';

export default function Header() {
  return (
    <header className={`${s.header}`}>
      <div>
        <h1 className={`${s.title} ${s.headerTitle}`}>Volodymyr Ivanov</h1>
      </div>
      <div className={` ${s.personality} `}>
        <section className={`${s.content}`}>
          {/* <div className={s.contacts}>
            <MdPhone className={s.icons} />
            <a className={s.link} href="tel:+380663832747">
              mob. +380 66 383 27 47
            </a>
          </div> */}
          <div className={s.contacts}>
            {/* <MdMail className={s.icons} /> */}
            <a className={s.link} href="mailto: vl.i@icloud.com">
              vl.i@icloud.com
            </a>
          </div>
          <div className={s.contacts}>
            {/* <AiFillLinkedin className={s.icons} fill="#0077b5" /> */}
            {/* <AiFillLinkedin className={s.icons} fill="#204098"/> */}
            <a
              className={`${s.in} ${s.link}`}
              href="https://www.linkedin.com/in/volodymyr-ivanov-94a4638a/"
            >
              https://www.linkedin.com/in/ volodymyr-ivanov
            </a>
          </div>
          <div className={s.contacts}>
            {/* <AiFillGithub className={s.icons} /> */}
            <a className={s.link} href="https://github.com/vladiwanov">
              https://github.com/vladiwanov
            </a>
          </div>
        <b className={`${s.subtitle} ${s.headerSunbtitle}`}>Ukraine, Kyiv</b>

        </section>
        <section className={s.position}>
          {/* <h3 className={`${s.subtitle} ${s.headerSunbtitle}`}>Position</h3> */}
          <h2 className={s.positionContent}>Full Stack Developer</h2>
        </section>
        <section className={s.photo}>
          <img className={s.myphoto} src={myPhoto} alt="Volodymyr Ivanov" />
        </section>
      </div>
    </header>
  );
}
