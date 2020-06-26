import React from 'react';
import { AssetIcon, Tidbit, DetailHeader, Chip } from '..';
import dasherize from '../../utils/dasherize';
import './style.scss';

const Experience = ({
  title,
  companyName,
  dates,
  details = [],
  technologies = [],
}) => (
  <section className="experience">
    <DetailHeader title={title} id={dasherize(companyName, title)} />
    <div className="experience__company">
      <Tidbit
        Icon={() => <AssetIcon name="briefcase-solid.svg" />}
        title={ companyName }
      />
    </div>
    <div className="experience__range">
      <Tidbit
        Icon={() => <AssetIcon name="calendar-alt-regular.svg" />}
        title={ dates }
      />
    </div>
    <ul className="experience__bullets">
      {details && !!details.length && details.map((bullet, index) => <li key={index}>{bullet}</li>)}
    </ul>
    <div className="experience__technology">
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
