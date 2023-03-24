import React from 'react';
import { Tidbit, AssetIcon, Reflex, AvatarImage } from '..';
import './style.scss';

const Header = () => (
  <header className="header">
    <div className="header__left">
      <div className="header__title">
        <h1>Stephen Roth</h1>
        <em>Solving problems and improving user experience through software engineering</em>
      </div>
      <address className="header__contact-me">
        <Reflex classModifiers="reflex--phone header__chip-row">
          <Tidbit
            Icon={() => <AssetIcon name="link.svg" />}
            title="designbystephen.com"
            href="http://designbystephen.com"
          />
          <Tidbit
            Icon={() => <AssetIcon name="at.svg" />}
            title="designbystephen@gmail.com"
            href="mailto:designbystephen@gmail.com"
          />
        </Reflex>
        <Reflex classModifiers="reflex--phone header__chip-row">
          <Tidbit
            Icon={() => <AssetIcon name="code.svg" />}
            title="github.com/designbystephen"
            href="https://github.com/designbystephen"
          />
          <Tidbit
            Icon={() => <AssetIcon name="map-pin.svg" />}
            title="St. Louis, MO"
          />
        </Reflex>
      </address>
    </div>
    <div className="header__right">
      <div className="header__avatar">
        <AvatarImage />
      </div>
    </div>
  </header>
);

export default Header;
