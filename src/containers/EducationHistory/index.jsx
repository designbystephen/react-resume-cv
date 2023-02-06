import React from 'react';
import { Section, SectionHeader, Training } from '../../components';
import data from '../../fixtures/data';

const Education = () => {
  const { education} = data;
  const redacted = process.env.REACT_APP_REDACTED === 'true';

  return (
    <Section>
      <SectionHeader title="Education" id="education" />
      {education && !!education.length && education.map((cert, index) => (
        <Training key={index} {...cert} redacted={redacted}/>
      ))}
    </Section>
  );
}

export default Education;
