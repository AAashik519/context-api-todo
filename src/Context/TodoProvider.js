import React, { createContext, useReducer } from 'react'
import { GET_TODOS,  CREATE_TODO, UPDATE_TODO ,DELETE_TODO} from './Constants'
export const TodoContext = createContext();


//  todo reducer
const todoReducer = (state, action) => {
    switch (action.type) {
       case CREATE_TODO :
           return{
                ...state,
                todos : [action.payload , ...state.todos]
           }
        default:
            return state
    }
}

const TodoProvider = props => {
    const initialState = {
        todos: [{
            "userId": 1,
            "id": 1,
            "title": " asHFS facere repellat ",
            completed : false,
        },
        {
            "userId": 1,
            "id": 2,
            "title": "aut facere   ",
            completed : false,
        }
        ,
        {
            "userId": 1,
            "id": 3,
            "title":  "cere repellat ",
            completed : false,
        },
        {
            "userId": 1,
            "id": 4,
            "title": "sunt aut facere   ",
            completed : false,
        }
    
    ],
        currentTodo: null,
    };

    const [state, dispatch] = useReducer(todoReducer, initialState)

    // ***************actionss*********

    const createTodo =todo =>{
        dispatch( {
            type :CREATE_TODO ,
            payload:todo,
        
        })
    }
    return (
        <TodoContext.Provider value={{
            todos: state.todos,
            currentTodo: state.currentTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    )

}


export default TodoProvider;