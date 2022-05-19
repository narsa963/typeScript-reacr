class Todo {
   id: string ;
   text: string; 

   constructor(todoText: string,id:string){
       console.log('test1');
       this.text = todoText;
       this.id = id;
   }
}
export default Todo;