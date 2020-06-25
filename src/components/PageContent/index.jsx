import React from 'react';
import './style.scss';

const PageContent = ({
  children
}) => (
  <div className="page-content">
    { children }
  </div>
);

export default PageContent;
