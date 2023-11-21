import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

type TypeExercises = {
   bodyPart: string,
   equipment: string,
   gifUrl: string,
   id: string,
   name: string,
   target: string,
   instructions: string[],
}
interface InterfaceExercises {
   exercises: TypeExercises[],
   status: string
}

export const fetchExercises = createAsyncThunk('exercises/fetchExercises', async (params: Record<string, string>) => {

   const { exercisesCategory, exercisesSearch } = params

   try {
      const { data } = await axios.get(`https://exercisedb.p.rapidapi.com/exercises${exercisesCategory}`, { params: { limit: 200 }, headers: { 'X-RapidAPI-Key': '96620745camsh850180238d7a654p1491ffjsnce13520e5d5b', 'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com' } })

      if (exercisesSearch) {
         return data.filter((obj: TypeExercises) =>
            obj.name.toLowerCase().includes(exercisesSearch.toLowerCase()) ||
            obj.equipment.toLowerCase().includes(exercisesSearch.toLowerCase()) ||
            obj.target.toLowerCase().includes(exercisesSearch.toLowerCase())
         )
      }

      return data
   } catch (error) {
      console.log(error)
   }
})

const initialState: InterfaceExercises = {
   exercises: [],
   status: 'loading'
}

export const exercisesSlice = createSlice({
   name: 'exercises',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchExercises.pending, (state) => {
            state.status = 'loading'
            state.exercises = []
         })
         .addCase(fetchExercises.fulfilled, (state, action) => {
            state.exercises = action.payload
            state.status = 'success'
         })
         .addCase(fetchExercises.rejected, (state) => {
            state.status = 'erorr'
            state.exercises = []
         })
   },
})

export default exercisesSlice.reducer