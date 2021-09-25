import React from 'react';
import s from './WorkingExperience.module.scss';
import workex from '../../../db/workex.json'

export default function WorkingExperience() {
  return (
    <div className={s.workex}>
      <h2 className={s.title}>Work experience:</h2>
      <div className={s.content}>
        <div>
          <h3 className={s.subtitle}>MoGroup</h3>
          <p className={s.subtitle}>2017 - 2020</p>
          <p className={s.subtitle}>Project manager</p>
        </div>
        <ul className={s.list}>
          {workex.map(text => (
            <li key={text} className={s.item}>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
