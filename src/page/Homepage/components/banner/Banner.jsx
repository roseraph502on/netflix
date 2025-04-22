import React from 'react'
import './Banner.css'

import { usePopularMoviesQuery } from '../../../../hook/usePopularMovies'

import { Alert ,Skeleton,Box } from '@mui/material';

const Banner = () => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery();    
    if (isLoading) {
        return <Skeleton id='Alert' className='loading'
        variant="rectangular" width="98%" height="50vh"
        sx={{ backgroundColor: 'gray' }}
        />;
    } if (isError) {
        return <Alert severity="error">Error occurred: {error?.message}</Alert>;
    }
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
