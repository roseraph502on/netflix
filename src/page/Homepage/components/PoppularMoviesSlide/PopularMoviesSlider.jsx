import React from 'react'
import './PopularMoviesSlider.css'
import Alert from '@mui/material/Alert';

import { usePopularMoviesQuery } from "../../../../hook/usePopularMovies"


const PopularMoviesSlider = () => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery();

     console.log("ddd",data)
        if(isLoading){
            <h2>loading.....</h2>;
        }if(isError){
            <Alert severity="error">This is an error Alert.</Alert>;
        }

    return (
        <div>

        </div>
    )
}

export default PopularMoviesSlider
