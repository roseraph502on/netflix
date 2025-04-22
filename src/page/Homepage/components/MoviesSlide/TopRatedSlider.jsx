import React from 'react'
import './MovieSlider.css'

import Slider from '../../../../common/Slider/Slider';

import { useTopRatedMoviesQuery } from "../../../../hook/useTopRatedMovies"

const TopRatedSlider = () => {
    const { data, isLoading, isError, error } = useTopRatedMoviesQuery();

    if (isLoading) {
        return <h2>loading.....</h2>;
    } if (isError) {
        return <Alert severity="error">Error occurred: {error?.message}</Alert>;
    }
    return (
        <div id='slide'>
           <Slider title='Top Rated'  movies={data.results}/>
        </div>
    )
}

export default TopRatedSlider
