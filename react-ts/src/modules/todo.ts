class Todo {
   id: number ;
   text: string; 

   constructor(todoText: string){
       console.log('test1');
       this.text = todoText;
       this.id = Math.random();
   }
}
export default Todo;