/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC, FormEvent } from 'react';

const NewTodo: FC = () => {
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input id="text" type="text" />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
