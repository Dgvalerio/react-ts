import React from 'react';

const Todo: React.FC<{ text: string }> = ({ text }) => <li>{text}</li>;

export default Todo;
