import React from 'react';
import s from './WorkingExperience.module.scss';
import workex from '../../../db/workex.json';

export default function WorkingExperience() {
  return (
    <div className={s.workex}>
      <h2 className={s.title}>Work experience:</h2>
      <div className={s.content}>
        <div>
          <h3 className={s.subtitle}>{workex.jobName}</h3>
          <p className={s.subtitle}>{workex.wokData}</p>
          {/*<p className={s.subtitle}>{workex.jobTitle}</p>*/}
        </div>
        <ul className={s.list}>
            <h3 className={`s.title ${s.fullTitle}`}>{workex.jobFullTitle}</h3>
          {workex.jobResp.map((text, i) => (
            <li key={i} className={s.item}>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
