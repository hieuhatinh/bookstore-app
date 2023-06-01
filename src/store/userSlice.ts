// import { userProfileLocalStorage } from '@/constants'
// import { createSlice } from '@reduxjs/toolkit'

// export interface IUserProfile {
//     name: string | null
//     email: string | null
//     uid: string | null
// }

// const initialValue: IUserProfile = {
//     name: null, 
//     email: null, 
//     uid: null
// }

// const userSlice  = createSlice({
//     name: 'user',
//     initialState: initialValue,
//     reducers: {
//         saveUserToLocalStorage: (state, action) => {
//             // const storedData = localStorage.getItem(userProfileLocalStorage)
//             // const userCurrent: IUserProfile = storedData ? JSON.parse(storedData) : null
//             state.email = userCurrent.email
//             state.name = userCurrent.name
//             state.uid = userCurrent.uid
//         }, 
//         removeUserToLocalStorage: (state, action) => {

//         }
//     },
// })

// const { reducer, actions } = userSlice

// export const { getUser } = actions

// export default reducer
