import React, { FC } from 'react';

import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';
import './App.css';

const App: FC = () => {
  const todos = [new Todo('Learn React'), new Todo('Learn Typescript')];

  const addTodoHandler = (todoText: string) => {};

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
};

export default App;
