import React from 'react';
import { Section, SectionHeader, Training } from '../../components';
import education from './modules/education';

const Education = () => (
  <Section>
    <SectionHeader title="Education" id="education" />
    {education && !!education.length && education.map((cert, index) => (
      <Training key={index} {...cert} />
    ))}
  </Section>
);

export default Education;
