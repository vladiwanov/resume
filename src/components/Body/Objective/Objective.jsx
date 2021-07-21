import React from 'react';
import s from './Objective.module.scss';

export default function Objective() {
  return (
    <div className={`${s.content} ${s.objective}`}>
      <h2 className={`${s.title} ${s.objectiveTitle}`}>Objective:</h2>
      <p className={`${s.item} ${s.objectiveItem}`}>
        Collaboration with creative interesting colleagues, learning new
        technologies, sharing cool ideas
      </p>
    </div>
  );
}
