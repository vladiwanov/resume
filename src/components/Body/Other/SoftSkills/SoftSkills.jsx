import React from 'react';
import s from './SoftSkills.module.scss';
import Content from 'components/Body/Content';
import softskills from 'db/softskills.json';

export default function SoftSkills() {
  return (
    <div className={`${s.content} ${s.softSkills}`}>
      <h2 className={s.title}>Soft Skills:</h2>
      <Content content={softskills} />
    </div>
  );
}
