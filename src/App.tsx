import React, { FC, useState } from 'react';

import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';
import './App.css';

const App: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) =>
    setTodos((prev) => prev.concat(new Todo(todoText)));

  const removeTodoHandler = (todoId: string) =>
    setTodos((prev) => prev.filter((p) => p.id !== todoId));

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
};

export default App;
