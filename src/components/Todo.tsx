import React from 'react';

import classes from './TodoItem.module.css';

const Todo: React.FC<{ text: string }> = ({ text }) => (
  <li className={classes.item}>{text}</li>
);

export default Todo;
