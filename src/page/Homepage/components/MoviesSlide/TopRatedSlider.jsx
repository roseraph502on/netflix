import React from 'react'
import './MovieSlider.css'

import Slider from '../../../../common/Slider/Slider';

import { useTopRatedMoviesQuery } from "../../../../hook/useTopRatedMovies"

const TopRatedSlider = () => {
    const { data, isLoading, isError, error } = useTopRatedMoviesQuery();

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
           <Slider title='Top Rated'  movies={data.results}/>
        </div>
    )
}

export default TopRatedSlider
