import React from 'react';
import './style.scss';

const Reflex = ({
  children,
  classModifiers = '',
}) => (
  <div className={`reflex ${classModifiers}`}>
    { children }
  </div>
);

export default Reflex;
