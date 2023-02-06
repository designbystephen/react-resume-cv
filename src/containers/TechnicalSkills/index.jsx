import React from 'react';
import { Section, Skills, SectionHeader } from '../../components';
import data from '../../fixtures/data';

const TechnicalSkills = () => { 
  const { technicalSkills } = data;

  return  (
    <Section>
      <SectionHeader title="Technical Skills" id="technical-skills" />
      <Skills list={technicalSkills} />
    </Section>
  );
}

export default TechnicalSkills;
