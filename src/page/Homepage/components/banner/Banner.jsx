import React from 'react'
import './Banner.css'

import { usePopularMoviesQuery } from '../../../../hook/usePopularMovies'

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';

const Banner = () => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery();
    console.log("ddd", data)
    
    if (isLoading) {
        <h2>loading.....</h2>;
    } if (isError) {
        <Alert severity="error">Error occurred: {error?.message}</Alert>;
    }
    if (!data || !data.results || data.results.length === 0) {
        return <h2>No data available</h2>;
    }console.log("bp", data.results[0].backdrop_path)
    return (
        <Box className='banner'
            sx={{
                backgroundImage: {
                    xs: `url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2${data.results[0].backdrop_path})`,
                    md: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${data.results[0].poster_path})`,
                  },
            }}
        >
            <div className='bannerText'>
                <h1>{data?.results[0].title}</h1>
                <p>{data?.results[0].overview}</p>
            </div>
        </Box>
    )
}

export default Banner
