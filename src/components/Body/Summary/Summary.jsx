import React from 'react';
import s from './Summary.module.scss';
import summary from '../../../db/summary.json'
export default function Objective() {
  return (
    <div className={`${s.content} ${s.objective}`}>
      <h2 className={`${s.title} ${s.objectiveTitle}`}>Objective:</h2>
      <p className={`${s.item} ${s.objectiveItem}`}>
        {summary}
      </p>
    </div>
  );
}
