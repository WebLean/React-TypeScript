import React, { useState } from 'react';
// import { Route } from 'react-router-dom';

// About Redux with TypeScript
// https://redux-toolkit.js.org/usage/usage-with-typescript

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './models/todo';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
