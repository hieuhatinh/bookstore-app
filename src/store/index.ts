import {
    combineReducers,
    Action,
    configureStore,
    ThunkAction,
} from '@reduxjs/toolkit'

import bookReducer from './bookSlice'
// import userReducer from './userSlice'

const rootReducer = combineReducers({ bookReducer })
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>

const store = configureStore({
    reducer: rootReducer,
})

export default store
