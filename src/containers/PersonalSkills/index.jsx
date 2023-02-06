import React from 'react';
import { Section, Skills, SectionHeader } from '../../components';
import data from '../../fixtures/data';

const PersonalSkills = () => {
  const { personalSkills } = data;

  return (
    <Section>
      <SectionHeader title="Personal Skills" id="Personal Skills" />
      <Skills list={personalSkills} />
    </Section>
  );
}

export default PersonalSkills;
