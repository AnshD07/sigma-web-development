import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
//! default export can be name anything okay

export const store = configureStore({
    reducer: {
        counterKey: counterReducer, 
    }, 
})