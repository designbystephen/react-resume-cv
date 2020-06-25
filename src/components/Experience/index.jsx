import React from 'react';
import { AssetIcon, Chip, DetailHeader } from '..';
import dasherize from '../../utils/dasherize';
import './style.scss';

const Experience = ({
  title,
  companyName,
  dates,
  details = [],
}) => (
  <section className="experience">
    <DetailHeader title={title} id={dasherize(companyName, title)} />
    <div className="experience__company">
      <Chip
        Icon={() => <AssetIcon name="building-regular.svg" />}
        title={ companyName }
      />
    </div>
    <div className="experience__range">
      <Chip
        Icon={() => <AssetIcon name="calendar-alt-regular.svg" />}
        title={ dates }
      />
    </div>
    <ul className="experience__bullets">
      {details && !!details.length && details.map((bullet, index) => <li key={index}>{bullet}</li>)}
    </ul>
  </section>
);

export default Experience;
