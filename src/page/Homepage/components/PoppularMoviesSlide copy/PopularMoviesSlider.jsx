import React from 'react'
import './PopularMoviesSlider.css'
import 'react-multi-carousel/lib/styles.css';

import Alert from '@mui/material/Alert';
import Carousel from 'react-multi-carousel';
import MovieCard from "../../../../common/MovieCard/MovieCard"

import { usePopularMoviesQuery } from "../../../../hook/usePopularMovies"


const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


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
        <div id='popularslide'>
            <h2>Popular Movies</h2>

            <Carousel
                responsive={responsive}
                infinite={true}
                centerMode={true}
                itemClass='movie-slider p-1'
                containerClass='carousel-container'
            >

                {data.results.map((movie, index) =>
                    <div id='pMovies'>
                        <h1 className='rank'>{index + 1}</h1>
                        <MovieCard movie={movie} index={index} key={index} />
                    </div>
                )}
            </Carousel>
        </div>
    )
}

export default PopularMoviesSlider
