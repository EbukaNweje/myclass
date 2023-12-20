import React from 'react'
import HeroPage from './HeroPage/HeroPage'
import Categories from './Categories/Categories'
import NewArrivals from './NewArrivals/NewArrivals'

const MainLandingPage = () => {
  return (
    <div>
      <HeroPage/>
      <Categories/>
      <NewArrivals/>
    </div>
  )
}

export default MainLandingPage