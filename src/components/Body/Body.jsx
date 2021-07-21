import React from 'react';
import Objective from './Objective';
import HardSkills from './HardSkills';
import Projects from './Projects';
import WorkingExperience from './WorkingExperience';
import Education from './Education'
import Other from './Other';

export default function Body (){
  return (
    <section >
      <div >
        <Objective />
        <HardSkills />
        <Projects />
        <WorkingExperience />
        <Education />
        <Other />
      </div>
    </section>
  )
}