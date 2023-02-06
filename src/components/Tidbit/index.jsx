import React from 'react';
import './style.scss';

const Tidbit = ({
    Icon,
    title,
    href,
    redacted = false,
}) => (
  <div className={`tidbit ${redacted ? 'tidbit--redacted' : ''}`}>
    <div className="tidbit__icon">
      <Icon /> 
    </div>
    {href && !redacted ? (
      <div className="tidbit__text">
        <a href={href}>{ title }</a>
      </div>
    ) : (
      <div className="tidbit__text">
      { title }
    </div>
    )}
  </div>
);

export default Tidbit;
