import React, { FC } from 'react';

import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import './App.css';
import TodosContextProvider from './store/todo-context';

const App: FC = () => (
  <TodosContextProvider>
    <NewTodo />
    <Todos />
  </TodosContextProvider>
);

export default App;
