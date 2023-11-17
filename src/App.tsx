import React from 'react'
import { Route, Routes } from 'react-router'

import Footer from './components/Footer'
import Header from './components/Header'
import ExerciseDetails from './pages/ExerciseDetails'
import Exercises from './pages/Exercises'
import Home from './pages/Home'

import './scss/style.scss'

function App() {

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
