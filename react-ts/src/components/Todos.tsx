import React from 'react';
import Todo from '../modules/todo'
import TodoItems from './TodoItems';

const Todos:React.FC< {items: Todo[], item:string, onRemoveTodo: (id: number)=>void} > = (props)=>{
    return (
        <ul>
           {props.items.map((item)=>(
               <TodoItems 
                onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
               key={item.id} 
               text={item.text} />
           ))}
        </ul>
    )

}
export default Todos;