import React from 'react';
import './style.scss';

const DetailHeader = ({
  title,
  id
}) => (
  <h3 className="detail-header" id={id}>
    <a href={`#${id}`}>
      { title }
    </a>
  </h3>
);

export default DetailHeader;
