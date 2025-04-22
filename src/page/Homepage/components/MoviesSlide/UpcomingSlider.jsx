import React from 'react'
import './MovieSlider.css'

import Alert from '@mui/material/Alert';

import { useUpcomingMoviesQuery } from "../../../../hook/useUpcomingMovies"
import Slider from '../../../../common/Slider/Slider';


const UpcomingSlider = () => {
    const { data, isLoading, isError, error } = useUpcomingMoviesQuery();

    if (isLoading) {
        return <h2>loading.....</h2>;
    } if (isError) {
        return  <Alert severity="error">Error occurred: {error?.message}</Alert>;
    }

    return (
        <div id='slide'>
           <Slider title='Upcoming'  movies={data.results}/>
        </div>
    )
}

export default UpcomingSlider
