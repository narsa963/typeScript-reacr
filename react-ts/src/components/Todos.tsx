import React from 'react';
import Todo from '../modules/todo'
import TodoItems from './TodoItems';

const Todos:React.FC< {items: Todo[], item:string} > = (props)=>{
    return (
        <ul>
           {props.items.map((item)=>(
               <TodoItems key={item.id} text={item.text} />
           ))}
        </ul>
    )

}
export default Todos;