import React from 'react';
import './style.scss';

const SectionHeader = ({
  title,
  id
}) => (
  <h2 className="section-header" id={id}>
    <a href={`#${id}`}>
      { title }
    </a>
  </h2>
);

export default SectionHeader;
