import React from 'react';
import { Section, Experience, SectionHeader } from '../../components';
import workHistory from './modules/workHistory'

const WorkHistory = () => (
  <Section>
    <SectionHeader 
      title="Professional Experience"
      id="professional-experience"
    />
    {workHistory && !!workHistory.length && workHistory.map((experience, index) => (
      <Experience key={index} {...experience} />
    ))}
  </Section>
);

export default WorkHistory;
