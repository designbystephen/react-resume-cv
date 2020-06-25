import React from 'react';
import { Chip } from '..';
import './style.scss';

const Skills = ({
  list = [],
}) => (
  <div className="skills">
    <ul>
      {list && !!list.length && list.map((item, index) => (
        <li key={index}>
          <Chip text={item} addtlClassNames="chip--thin" />
        </li>
      ))}
    </ul>
  </div>
);

export default Skills;
