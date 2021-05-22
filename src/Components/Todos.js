import React ,{createContext ,useContext,useReducer}from 'react'
import { TodoContext } from '../Context/TodoProvider'
import Todo from './Todo';
import TodoInput from './TodoInput';

const Todos = () => {
     const todoContext = useContext(TodoContext)
     console.log( todoContext);
     const {todos} = todoContext;
    return (
      
         <div className="todo">
             <TodoInput />

        <ul className="todo-body">
            {
            todos.map(todo =>( <Todo todo ={todo} key={todo.id} /> ))
            }
        </ul>
           
         </div>
    )
}

export default Todos
