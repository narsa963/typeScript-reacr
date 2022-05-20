import React, { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './modules/todo';

function App() {
  
  const [todos, setTodos]=useState<Todo[]>([])
  const addtodoHandler=(todoText: string)=>{
    
    const newTodo = new Todo(todoText );
    setTodos((prevValue) =>{
      return prevValue.concat(newTodo );
    });
    
  };
  return (
    <div>
      <NewTodo onAddTodo={addtodoHandler}/>
     <Todos items={todos} item = "test" />
    </div>
  );
}

export default App;
