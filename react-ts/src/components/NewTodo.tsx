import React, { useRef } from "react";

const NewTodo:React.FC<{onAddTodo: (text: string)=>void}> = (props) =>{
    const todoTextRef =useRef<HTMLInputElement>(null);


    const submitHandler =(event: React.FormEvent)=>{
       event.preventDefault();
       const enterdText =todoTextRef.current!.value;
       if(enterdText.trim().length===0){
           return;
       }
       props.onAddTodo(enterdText)  
    }

   
   return (
      <form onSubmit={submitHandler}>
         <label>AddTodo</label>
         <input type='text'  id='text' ref={todoTextRef}/>
         <button>submit</button>
      </form> 
   )
}
export default NewTodo;