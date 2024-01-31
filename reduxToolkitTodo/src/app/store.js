import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

// 1. configure store and set reducers
export const store = configureStore({
    reducer: todoReducer
})