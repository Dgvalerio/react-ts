import React from 'react';

import classes from './TodoItem.module.css';

const Todo: React.FC<{ text: string; onClick: () => void }> = ({
  text,
  onClick,
}) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
  <li className={classes.item} onClick={onClick}>
    {text}
  </li>
);

export default Todo;
