import React from 'react';
import { AssetIcon, Tidbit } from '..';
import './style.scss';

const Training = ({
  institutionName,
  dates,
  details = [],
  redacted = true,
}) => (
  <section className="training">
    <div className="training__title">
      <Tidbit
        Icon={() => <AssetIcon name="graduation-cap.svg" />}
        title={ institutionName }
        redacted={redacted}
      />
    </div>
    <div className="training__dates">
      <Tidbit
        Icon={() => <AssetIcon name="calendar.svg" />}
        title={ dates }
      />
    </div>
    <div className="training__bullets">
      <ul>
        {details && !!details.length && details.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </div>
  </section>
);

export default Training;
