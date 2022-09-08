import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {RootState} from "../store";
interface Pizza {
    id: number;
    imageUrl: string;
    name: string;
    types: number[];
    sizes: number[];
    price: number;
    category: number;
    rating: number;
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

interface PizzaTypeSlice {
    items: Pizza[],
    status: Status
}

export const fetchPizzas = createAsyncThunk<Pizza[], Record<string, string>>('pizza/fetchByIdStatus', async (params) => {
    const {order, sortBy, category, search} = params
    const {data} = await axios.get<Pizza[]>(`https://630cd7e953a833c534369aa4.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}`)
    return data
})

const initialState: PizzaTypeSlice = {
    items: [],
    status: Status.LOADING,
}

const PizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems(state, action:PayloadAction<Pizza[]>) {
            state.items = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.status = Status.LOADING
            state.items = []
        })
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.status = Status.SUCCESS
            state.items = action.payload
        })
        builder.addCase(fetchPizzas.rejected, (state) => {
            state.status = Status.ERROR
            state.items = []
        })
    }

})
export const SelectPizzaStatusItem = (state:RootState) => state.pizza

export const {setItems} = PizzaSlice.actions

export default PizzaSlice.reducer