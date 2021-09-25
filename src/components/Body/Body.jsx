import React from 'react';
import Summary from './Summary';
import HardSkills from './HardSkills';
import Projects from './Projects';
import WorkingExperience from './WorkingExperience';
import Education from './Education'
import Other from './Other';

export default function Body (){
  return (
    <section >
      <div >
        <Summary />
        <HardSkills />
        <Projects />
        <WorkingExperience />
        <Education />
        <Other />
      </div>
    </section>
  )
}