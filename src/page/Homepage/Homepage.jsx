import React from 'react'
import './Homepage.css'
import Banner from './components/banner/Banner'
import PopularMoviesSlider from './components/MoviesSlide/PopularMoviesSlider'
import TopRatedSlider from './components/MoviesSlide/TopRatedSlider'
import UpcomingSlider from './components/MoviesSlide/UpcomingSlider'
import { colors, Skeleton } from '@mui/material';


const Homepage = () => {
  return (
    <div>
      <Banner />
      <PopularMoviesSlider />
      <TopRatedSlider />
      <UpcomingSlider />
    </div>
  )
}

export default Homepage
