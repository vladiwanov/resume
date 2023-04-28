import React from 'react';
import s from './Education.module.scss';
import education from '../../../db/education.json';

export default function Education() {
  return (
    <section className={s.education}>
      <div className={s.content}>
        <h2 className={s.title}>Education:</h2>
        <p className={s.item}>{education[0]}</p>
      </div>
      <div className={s.content}>
        <h2 className={s.title}>Additional Education:</h2>
        <p className={s.item}>{education[1]}</p>
      </div>
    </section>
  );
}
