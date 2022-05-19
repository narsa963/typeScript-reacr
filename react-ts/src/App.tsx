import React from 'react';
import Todos from './components/Todos';
import Todo from './modules/todo';

function App() {
  const todo1 = new Todo('learn React', '1' );
  const todo2 = new Todo('learn TypeScript', '2');
  const todos=[todo1, todo2]
  return (
    <div>
     <Todos items={todos} item = "test" />
    </div>
  );
}

export default App;
