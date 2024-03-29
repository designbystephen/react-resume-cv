import React from 'react';
import { Icon } from '..';

const { REACT_APP_ASSET_BASE_URL } = process.env;

export const AssetIcon = ({
  name,
  ...rest
}) => (
  <Icon
    src={`${REACT_APP_ASSET_BASE_URL}${name}`}
    {...rest}
  />
);

export default AssetIcon;
