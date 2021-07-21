import React from 'react';
import Content from '../Content';
import s from './HardSkills.module.scss';
import foundation from 'db/foundation.json';
import technologies from 'db/technologies.json';

export default function hardSkills() {
  return (
    <section className={s.hardSkills}>
      <h2 className={s.title}>Technical Skils:</h2>
      <div className={s.content}>
        <h3 className={s.subtitle}>foundation:</h3>
        <Content content={foundation} />
      </div>
      <div className={s.content}>
        <h3 className={s.subtitle}>technologies:</h3>
        <Content content={technologies} />
      </div>
    </section>
  );
}
