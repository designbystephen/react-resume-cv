import React from 'react';
import './style.scss';

const Sidebar = ({
  children
}) => (
  <div className="sidebar">
    { children }
  </div>
);

export default Sidebar;
