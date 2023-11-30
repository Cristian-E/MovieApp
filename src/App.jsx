import React from 'react'
import Category from './components/Category';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PeliculaId from './components/PeliculaId';
import 'ldrs/ring'
const App = () => {


  return (
    <div className="container-main 


"    >

      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            < Category />

          } />
          < Route path="/peliculas/:id" element={
            < PeliculaId />
          } />



        </Routes >
      </BrowserRouter >

    </div >
  )
}

export default App;







