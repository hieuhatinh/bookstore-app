import { createSlice } from "@reduxjs/toolkit"

interface IValueItem {
  id: string
  quantity: number
}

interface IValueState {
  items: Record<string, IValueItem>
}

const initialValue: IValueState = {
  items: {}
}

const bookSlice = createSlice({
    name: 'book',
    initialState: initialValue,
    reducers: {
      addProduct: (state, action) => {
        const {id} = action.payload
        if(state.items[id]) {
          state.items[id].quantity++
        } else {
          state.items[id] = {id, quantity: 1}
        }
      }, 
      removeProduct: (state, action) => {
        const {id} = action.payload
        if(state.items[id]) {
          state.items[id].quantity--
        }
        if (state.items[id].quantity === 0) {}
      }
    },
})

const {reducer, actions} = bookSlice

export const {addProduct, removeProduct} = actions

export default reducer