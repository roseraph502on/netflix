import React from 'react'
import './MovieSlider.css'

import 'swiper/css/bundle';
import Slider from '../../../../common/Slider/Slider';


import Alert from '@mui/material/Alert';

import { usePopularMoviesQuery } from "../../../../hook/usePopularMovies"



const PopularMoviesSlider = () => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery();

    if (isLoading) {
        <h2>loading.....</h2>;
    } if (isError) {
        <Alert severity="error">Error occurred: {error?.message}</Alert>;
    }
    if (!data || !data.results || data.results.length === 0) {
        return <h2>No data available</h2>;
    }

    return (
        <div id='slide'>
           <Slider title='Popular'  movies={data.results}/>
        </div>
    )
}

export default PopularMoviesSlider
