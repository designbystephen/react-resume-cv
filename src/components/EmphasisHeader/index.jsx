import React from 'react';
import './style.scss';

const EmphasisHeader = ({
  title,
  id
}) => (
  <h4 className="emphasis-header" id={id}>
    { title }
  </h4>
);

export default EmphasisHeader;
