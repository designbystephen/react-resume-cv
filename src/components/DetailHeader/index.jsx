import React from 'react';
import './style.scss';

const DetailHeader = ({
  title,
  id = ''
}) => (
  <h3 className="detail-header" id={id}>
    {id ? (
      <a href={`#${id}`}>
        { title }
      </a>
    ) : (
      { title }
    )}
  </h3>
);

export default DetailHeader;
