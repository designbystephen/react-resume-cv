import React from 'react';
import { Section, Skills, SectionHeader } from '../../components';
import personalSkills from './modules/personalSkills';

const PersonalSkills = () => (
  <Section>
    <SectionHeader title="Personal Skills" id="Personal Skills" />
    <Skills list={personalSkills} />
  </Section>
);

export default PersonalSkills;
