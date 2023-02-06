import React from 'react';
import { Section, Experience, SectionHeader } from '../../components';
import data from '../../fixtures/data';

const WorkHistory = () => {
  const { workHistory } = data;
  const redacted = process.env.REACT_APP_REDACTED === 'true';

  return (
  <Section>
    <SectionHeader 
      title="Professional Experience"
      id="professional-experience"
    />
    {workHistory && !!workHistory.length && workHistory.map((experience, index) => (
      <Experience key={index} {...experience} redacted={redacted} />
    ))}
  </Section>
)};

export default WorkHistory;
