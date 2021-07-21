import React from 'react';
import s from './TeamProjects.module.scss';
import teamProjects from 'db/projects-db/team-projects.json';
import Project from '../Project/Project';

export default function TeamProjects() {
  return (
    <div className={s.teamProjects}>
      <h2 className={s.title}>Team Projects:</h2>
      <Project content={teamProjects} />
    </div>
  );
}
