import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

import filterReducer from './slices/filterSlice'
import exercisesReducer from './slices/exercisesSlice'

export const store = configureStore({
   reducer: {
      filterReducer,
      exercisesReducer,
   },
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

