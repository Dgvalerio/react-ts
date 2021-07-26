import React from 'react';

import Todo from '../models/todo';
import TodoItem from './Todo';
import classes from './Todos.module.css';

const Todos: React.FC<{
  items: Todo[];
  onRemoveTodo: (todoId: string) => void;
}> = ({ items, onRemoveTodo }) => (
  <ul className={classes.todos}>
    {items.map((item) => (
      <TodoItem
        key={item.id}
        text={item.text}
        onClick={() => onRemoveTodo(item.id)}
      />
    ))}
  </ul>
);

export default Todos;
