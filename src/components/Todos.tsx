import React, { FC, useContext } from 'react';

import { TodosContext } from '../store/todo-context';
import TodoItem from './Todo';
import classes from './Todos.module.css';

const Todos: FC = () => {
  const { items, removeTodo } = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          /* eslint-disable-next-line react/jsx-no-bind */
          onRemoveTodo={removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
