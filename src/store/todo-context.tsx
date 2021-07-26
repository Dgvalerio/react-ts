import React, { createContext, FC, useState } from 'react';

import Todo from '../models/todo';

type TodosContextType = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = createContext<TodosContextType>({
  items: [],
  addTodo: (text: string) => null,
  removeTodo: (id: string) => null,
});

const TodosContextProvider: FC = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) =>
    setTodos((prev) => prev.concat(new Todo(todoText)));

  const removeTodoHandler = (todoId: string) =>
    setTodos((prev) => prev.filter((p) => p.id !== todoId));

  const contextValue: TodosContextType = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
