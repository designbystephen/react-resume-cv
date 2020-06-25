import React from 'react';
import { Section, Skills, SectionHeader } from '../../components';
import technicalSkills from './modules/technicalSkills';

const TechnicalSkills = () => (
  <Section>
    <SectionHeader title="Technical Skills" id="technical-skills" />
    <Skills list={technicalSkills} />
  </Section>
);

export default TechnicalSkills;
