/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC, FormEvent, useRef } from 'react';

const NewTodo: FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input id="text" type="text" ref={todoTextInputRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
