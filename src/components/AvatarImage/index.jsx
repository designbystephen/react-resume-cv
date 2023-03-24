import React from "react";
import { AssetImage } from '../AssetImage';

const { REACT_APP_AVATAR_URI } = process.env;

/**
 * Avatar image specialization
 */
export const AvatarImage = React.memo(({...rest }) => (
  <AssetImage
    name={REACT_APP_AVATAR_URI}
    {...rest}
  />
));
