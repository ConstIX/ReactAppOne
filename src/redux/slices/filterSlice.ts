import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface InterfaceFilter {
   category: string,
   page: number,
   search: string
}

const initialState: InterfaceFilter = {
   category: 'all',
   page: 1,
   search: ''
}

export const filterSlice = createSlice({
   name: 'filter',
   initialState,
   reducers: {
      setCategory(state, action: PayloadAction<string>) {
         state.category = action.payload
      },
      setPage(state, action: PayloadAction<number>) {
         state.page = action.payload
      },
      setSearch(state, action: PayloadAction<string>) {
         state.search = action.payload
      }
   },
})

export const { setCategory, setPage, setSearch } = filterSlice.actions

export default filterSlice.reducer