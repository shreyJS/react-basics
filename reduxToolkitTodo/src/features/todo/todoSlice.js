import { createSlice, nanoid } from "@reduxjs/toolkit"

// 1. create initial state
const initialState = {
    todos: [{id: 1, text: "Hello react"}]
}

/* 2. create slice using createSlice() 
* createSlice() takes an object
* object consists of name, initialState, reducers properties
* name is name of slice, a mandatory field and is used to generate action types
* initialState is the initial state that will be used
* reducers is an object containing multiple reducer functions
*/
export const todoSlice = createSlice({
    name: 'todo', // mandatory field
    initialState, // state to be passed
    reducers: {
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
        updateTodo: (state, action)=>{
            state.todos = state.todos.map(
                (prev)=>prev.id === action.payload.id ? action.payload.todo : prev
                )
            }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions
export default todoSlice.reducer