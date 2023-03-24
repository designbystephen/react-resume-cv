/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const { REACT_APP_ASSET_BASE_URL } = process.env;

/**
 * Image with prebaked asset url
 */
export const AssetImage = React.memo(({
  name,
  ...rest
}) => (
  <img
    src={`${REACT_APP_ASSET_BASE_URL}${name}`}
    { ...rest }
  />
));
