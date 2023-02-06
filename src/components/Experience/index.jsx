import React from 'react';
import { AssetIcon, Tidbit, DetailHeader, Chip, EmphasisHeader } from '..';
import dasherize from '../../utils/dasherize';
import './style.scss';

const Experience = ({
  title,
  companyName,
  dates,
  details = [],
  technologies = [],
  redacted = true,
}) => (
  <section className="experience">
    <DetailHeader title={title} id={dasherize(companyName, title)} />
    <div className="experience__detail">
      <Tidbit
        Icon={() => <AssetIcon name="briefcase-solid.svg" />}
        title={ companyName }
        redacted={redacted}
      />
    </div>
    <div className="experience__detail">
      <Tidbit
        Icon={() => <AssetIcon name="calendar-alt-regular.svg" />}
        title={ dates }
        redacted={false}
      />
    </div>
    <ul className="experience__bullets">
      {details && !!details.length && details.map((bullet, index) => <li key={index}>{bullet}</li>)}
    </ul>
    <div className="experience__technology">
      <EmphasisHeader title="Technologies Used" />
      <ul>
        {technologies && !!technologies.length && technologies.map((tech, index) => (
          <li key={index}>
            <Chip text={tech} addtlClassNames='chip--small' />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Experience;
