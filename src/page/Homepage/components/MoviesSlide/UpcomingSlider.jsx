import React from 'react'
import './MovieSlider.css'

import Alert from '@mui/material/Alert';

import { useUpcomingMoviesQuery } from "../../../../hook/useUpcomingMovies"
import Slider from '../../../../common/Slider/Slider';


const UpcomingSlider = () => {
    const { data, isLoading, isError, error } = useUpcomingMoviesQuery();

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
           <Slider title='Upcoming'  movies={data.results}/>
        </div>
    )
}

export default UpcomingSlider
