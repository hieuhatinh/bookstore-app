import { db } from '@/config/firebase'
import { createSlice } from '@reduxjs/toolkit'
import { collection, doc, getDocs, setDoc } from 'firebase/firestore'

export interface IValueItem {
    category: string | string[] | undefined
    id: string | string[] | undefined
    quantity: number | undefined
}

interface IValueState {
    items: Record<string, IValueItem>[]
}

const initialValue: IValueState = {
    items: [],
}

const bookSlice  = createSlice({
    name: 'book',
    initialState: initialValue,
    reducers: {
        addProduct: (state, action) => {
            const { category, id, number, userId } = action.payload
            const result = state.items.find((item) => item.id === id)
            if (result) {
                if (number <= 0) {
                    state.items.filter((item) => item.id !== id)
                }

                result.quantity = number
            } else {
                state.items.push({
                    category: category,
                    id: id,
                    quantity: number,
                })
            }

            // const addToDatabase = async () => {
            //     const query = collection(db, 'carts')
            //     const querySnapshot = await getDocs(query)

            //     console.log(query)
            //     if (querySnapshot.size <= 0) {
            //         const newCollection = collection(db, 'carts')

            //     }
            //     const cartsDocRef = doc(db, 'carts', userId)

            //     await setDoc(cartsDocRef, {
            //         cart: state.items
            //     })
            // }

            // addToDatabase()
        },
        removeProduct: (state, action) => {
            const { id, confirm, userId } = action.payload
            const result = state.items.find((item) => item.id === id)

            if (result && confirm) {
                state.items.filter((item) => item.id !== id)
            }

            (async () => {
                const cartsDocRef = doc(db, 'carts', userId)

                await setDoc(cartsDocRef, {
                    cart: state.items
                })
            })
        },
    },
})

const { reducer, actions } = bookSlice

export const { addProduct, removeProduct } = actions

export default reducer
