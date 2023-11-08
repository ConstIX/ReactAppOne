import React from 'react'
import { Route, Routes } from 'react-router'

import Footer from './pages/Footer'
import Header from './pages/Header'
import Home from './pages/Home'

import './scss/style.scss'

function App() {

   return (
      <div className="wrapper">

         <Header />

         <Routes>
            <Route path='/' element={<Home />} />
         </Routes>

         <Footer />

      </div>
   )
}

export default App
