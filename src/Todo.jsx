import React from 'react'
import "./Todo.css";
import AddTask from './AddTask';
import ListTasks from './ListTasks';
const Todo = () => {
  
   return (
      <>
   <div className="todo-container">
   <div className="Header">TODO APP</div>
   <div className="add-tasks">
      <AddTask/>
   </div>
   <div className="tasks">
      <ListTasks/>
   </div>
   </div>
   </>
   );
};

export default Todo;