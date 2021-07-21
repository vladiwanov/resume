import React from 'react';
import s from './Education.module.scss';

export default function Education() {
  return (
    <section  className={s.education}>
      <div className={s.content}>
        <h2 className={s.title}>Education:</h2>
        <p className={s.item}>
          National Technical University of Ukraine “Igor Sikorsky Kyiv
          Polytechnic Institute” Radioengineering Faculty, radioengineer.
        </p>
      </div>
      <div className={s.content}>
        <h2 className={s.title}>Additional Education:</h2>
        <p className={s.item}>
          2020 – 2021 GoIT: online course, training of Full Stack developers.
        </p>
      </div>
    </section>
  );
}
