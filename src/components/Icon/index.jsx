import React from 'react';
import './style.scss';

const Icon = ({ 
  alt = 'icon',
  addtlClassNames = '',
  src,
  ...rest
}) => (
  <img
    alt={alt}
    src={src} 
    className={`icon ${addtlClassNames}`}
    {...rest}
  />
);

export default Icon;
