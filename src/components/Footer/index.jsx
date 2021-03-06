import React from 'react';
import './style.scss';

const Footer = () => (
  <footer className="footer" role="contentinfo">
    <p className="footer__item">
      Icons used on this page were created by <a href="https://fontawesome.com">Font Awesome</a> and are
      licensed under <a href="https://creativecommons.org/licenses/by/4.0">CC BY 4.0</a>.
    </p>
    <p className="footer__item">
      Content by Stephen Roth of {' '}
      <a href="http://designbystephen.com">designbystephen.com</a>
    </p>
  </footer>
);

export default Footer;
