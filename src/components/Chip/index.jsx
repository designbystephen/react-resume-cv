import React from 'react';
import './style.scss';

const Chip = ({
  text,
  addtlClassNames
}) => (
  <span className={`chip ${addtlClassNames}`}>
    {text}
  </span>
);

export default Chip;
