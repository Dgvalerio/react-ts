import React from 'react';

import Todo from '../models/todo';
import TodoItem from './Todo';
import classes from './Todos.module.css';

const Todos: React.FC<{ items: Todo[] }> = ({ items }) => (
  <ul className={classes.todos}>
    {items.map((item) => (
      <TodoItem key={item.id} text={item.text} />
    ))}
  </ul>
);

export default Todos;
