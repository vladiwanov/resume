import React from 'react';
import s from './WorkingExperience.module.scss';

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
        <p className={s.item}>
          Project management, creating of engineering solutions in system
          integration : data transfering and saving, cloudly solutions, security
          and fire alarm systems, access controll, video survilance, face
          recognition, IT security platform providing.
        </p>
      </div>
    </div>
  );
}
