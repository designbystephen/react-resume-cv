import React from 'react';
import './style.scss';

const Chip = ({
    Icon,
    title,
    href,
}) => (
  <div className="chip">
    <div className="chip__icon">
      <Icon /> 
    </div>
    {href ? (
      <div className="chip__text">
        <a href={href}>{ title }</a>
      </div>
    ) : (
      <div className="chip__text">
      { title }
    </div>
    )}
    

</div>
);

export default Chip;
