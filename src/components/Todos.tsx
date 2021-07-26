import React from 'react';

import Todo from '../models/todo';
import TodoItem from './Todo';

const Todos: React.FC<{ items: Todo[] }> = ({ items }) => (
  <ul>
    {items.map((item) => (
      <TodoItem key={item.id} text={item.text} />
    ))}
  </ul>
);

export default Todos;
