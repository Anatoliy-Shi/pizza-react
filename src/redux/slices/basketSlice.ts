import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

export type BasketItem = {
    id: string,
    name: string,
    price: number,
    imageUrl: string,
    count: number,
}

interface IBasketSlice {
    totalPrice: number,
    items: BasketItem[],
}

const initialState:IBasketSlice = {
    totalPrice: 0,
    items: [],
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<BasketItem>) {
            const findItem = state.items.find(item => item.id === action.payload.id)
            if (findItem) {
                findItem.count++
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                })
            }
        },
        totalPrice(state) {
            state.totalPrice = state.items.reduce((sum, item) =>  item.price * item.count + sum, 0)
        },
        decItem(state, action: PayloadAction<BasketItem>) {
            const findItem = state.items.find(item => item.id === action.payload.id)
            if (findItem) {
                findItem.count--
            }
        },
        removeItem(state, action: PayloadAction<string>) {
            state.items = state.items.filter(obj => obj.id !== action.payload)
        },
        clearItems(state) {
            state.items = []
            state.totalPrice = 0
        },

    }
})
export const SelectBasketItem = (state:RootState) => state.basket
export const SelectBasketFind = (id:string) => (state:RootState) =>  state.basket.items.find(item => item.id === id)

export const {addItem, removeItem, clearItems, decItem, totalPrice} = basketSlice.actions

export default basketSlice.reducer