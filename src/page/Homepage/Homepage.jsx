import React from 'react'
import './Homepage.css'
import Banner from './components/banner/Banner'
import PopularMoviesSlider from './components/PoppularMoviesSlide/PopularMoviesSlider'
import TopRatedSlider from './components/TopRatedSlide/TopRatedSlider'
import UpcomingSlider from './components/UpcomingSlide/UpcomingSlider'


const Homepage = () => {
  return (
    <div>
      <Banner/>
      <PopularMoviesSlider/>
      <TopRatedSlider/>
      <UpcomingSlider/>
    </div>
  )
}

export default Homepage
