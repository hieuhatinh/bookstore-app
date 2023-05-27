import { configureStore } from "@reduxjs/toolkit";
import bookReducer from './countBookSlice'
import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({bookReducer})
export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
    reducer: rootReducer
})

export default store