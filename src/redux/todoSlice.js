import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        id: crypto.randomUUID(),
        text: "Learn React.js",
        completed: true
    },
    {
        id: crypto.randomUUID(),
        text: "Learn React.js Hooks",
        completed: true
    },
    {
        id: crypto.randomUUID(),
        text: "Learn Redux",
        completed: false
    }
]

const todoReducer = createSlice({
    // unique name for each slice
    name: 'todo',
    initialState: initialState,
    reducers: {
        // createSlice reducers provide Immer library where you can mutate the object like state.value = 123 without the needed to spread operator
        addTodo: (state, action) => {
            state.push({
                id: crypto.randomUUID(),
                text: action.payload,
                completed: false
            })
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => { 
                if(todo.id !== action.payload) 
                    return todo
            })
        },
        toggleTodo: (state, action) => {
            state.map(todo => {
                if(todo.id === action.payload) todo.completed = !todo.completed
                return todo
            })
        }
    }
})

// export all reducers action so any component have access to it
export const { addTodo, deleteTodo, toggleTodo } = todoReducer.actions

// export all reducers so store can use it
export default todoReducer.reducer