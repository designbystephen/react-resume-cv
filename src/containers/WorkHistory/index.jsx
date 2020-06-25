import React from 'react';
import { Experience, SectionHeader } from '../../components';
import workHistory from './modules/workHistory'

const WorkHistory = () => (
  <div>
    <SectionHeader 
      title="Professional Experience"
      id="professional-experience"
    />
    {workHistory && !!workHistory.length && workHistory.map((experience, index) => (
      <Experience key={index} {...experience} />
    ))}
  </div>
);

export default WorkHistory;
