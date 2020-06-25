import React from 'react';
import { Tidbit, AssetIcon } from '..';
import './style.scss';

const Header = () => (
  <header className="header">
    <div className="header__left">
      <div className="header__title">
        <h1>Stephen Roth</h1>
        <em>Using technology to solve problems and improve user experience for 12 years.</em>
      </div>
      <address className="header__contact-me">
        <div className="header__chip-row">
          <Tidbit
            Icon={() => <AssetIcon name="link-solid.svg" />}
            title="designbystephen.com"
            href="http://designbystephen.com"
          />
          <Tidbit
            Icon={() => <AssetIcon name="at-solid.svg" />}
            title="designbystephen@gmail.com"
            href="mailto:designbystephen@gmail.com"
          />
        </div>
        <div className="header__chip-row">
          <Tidbit
            Icon={() => <AssetIcon name="code-solid.svg" />}
            title="github.com/designbystephen"
            href="https://github.com/designbystephen"
          />
          <Tidbit
            Icon={() => <AssetIcon name="map-marker-alt-solid.svg" />}
            title="St. Louis, MO"
          />
        </div>
      </address>
    </div>
    <div className="header__right">
      <div className="header__avatar">
        <img
          alt="Stephen Roth"
          src="https://designbystephen-assets.s3-us-west-2.amazonaws.com/avatar-2017-03-13-circle-optimized.png" 
          width="150"
        />
      </div>
    </div>
  </header>
);

export default Header;
