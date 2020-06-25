import React from 'react';
import { Icon } from '..';

export default ({
  name,
  ...rest
}) => (
  <Icon
    src={`https://designbystephen-assets.s3-us-west-2.amazonaws.com/${name}`}
    {...rest}
  />
);
