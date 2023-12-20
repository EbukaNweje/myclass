import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import MainLandingPage from './components/Landingpage/MainLandingPage'
import InfoPage from './components/InfoPage/InfoPage'
import Header from './components/Header/Header'
import CategoriesPage from './components/Landingpage/Categories/CategoriesPage'
import Shop from './components/Landingpage/Shop/Shop'
// import Work1 from './components/DataWork/Work1'
import Getcart from './components/DataWork/Getcart'
import Register from './components/Auth/Register'

const App = () => {
  return (
    <HashRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<MainLandingPage/>} />
            <Route path='/register' element={<Register  />} />
            <Route path='/shop' element={<Shop  />} />
            <Route path='/cart' element={<Getcart />} />
            <Route path='info/:id' element={<InfoPage/>} />
            <Route path='categories/:id/:categoriesname' element={<CategoriesPage/>} />
        </Routes>
        
    </HashRouter>
  )
}

export default App