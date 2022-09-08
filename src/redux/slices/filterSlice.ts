import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

type SortType = {
    name: string,
    sortProperty: 'rating' | '-rating' | '-price' | 'price' | 'name' | '-name'
}

interface FilterSliceState {
    categoryId: number,
    search: string,
    sort: SortType
}

const initialState:FilterSliceState = {
    categoryId: 0,
    search: '',
    sort: {
        name: 'популярности',
        sortProperty: 'rating'
    }
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload
        },
        setSearch(state, action: PayloadAction<string>) {
            state.search = action.payload
        },
        setSort(state, action: PayloadAction<SortType>) {
            state.sort = action.payload
        }
    }
})
export const SelectFilterCategoryId = (state:RootState) => state.filter.categoryId
export const SelectFilterSortProp = (state:RootState) => state.filter.sort.sortProperty
export const SelectFilterSearch = (state:RootState) => state.filter.search
export const SelectFilter = (state:RootState) => state.filter


export const {setCategoryId, setSort, setSearch} = filterSlice.actions
export default filterSlice.reducer