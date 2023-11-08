import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface InterfaceFilter {
   category: number,
   search: string
}

const initialState: InterfaceFilter = {
   category: 0,
   search: ''
}

export const filterSlice = createSlice({
   name: 'filter',
   initialState,
   reducers: {
      setCategory(state, action: PayloadAction<number>) {
         state.category = action.payload
      },
      setSearch(state, action: PayloadAction<string>) {
         state.search = action.payload
      }
   },
})

export const { setCategory, setSearch } = filterSlice.actions

export default filterSlice.reducer