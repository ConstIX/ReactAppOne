import React from 'react'
import { Route, Routes } from 'react-router'

import Footer from './components/Footer'
import Header from './components/Header'
import ExerciseDetails from './pages/ExerciseDetails'
import Exercises from './pages/Exercises'
import Home from './pages/Home'
import { fetchExercises } from './redux/slices/exercisesSlice'
import { useAppDispatch, useAppSelector } from './redux/store'

import './scss/style.scss'

function App() {

   const dispatch = useAppDispatch()
   const { category, page, search } = useAppSelector(state => state.filterReducer)

   const getExercises = async () => {

      const exercisesCategory = (category !== 'all' ? `/bodyPart/${category}` : '').replace(/ /g, '')
      const exercisesSearch = search

      dispatch(fetchExercises({ exercisesCategory, exercisesSearch }))
      window.scrollTo({ top: 700 })
   }
   React.useEffect(() => {
      getExercises()
   }, [category, page, search])

   return (
      <div className="wrapper">

         <Header />

         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/exercises' element={<Exercises />} />
            <Route path='/exercise/:id' element={<ExerciseDetails />} />
         </Routes>

         <Footer />

      </div>
   )
}

export default App
