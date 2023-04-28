import React from 'react';
import Project from '../Project/Project';
import s from './PersonalProjects.module.scss';
import personalProjects from 'db/projects-db/personal-projects.js';

export default function PersonalProjects() {
  return (
    <section className={s.personalProjects}>
      <h2 className={s.title}>Personal Projects:</h2>
      <Project content={personalProjects} />
    </section>
  );
}
