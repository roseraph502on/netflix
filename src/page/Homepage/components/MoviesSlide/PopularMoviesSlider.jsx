import React from 'react'
import './MovieSlider.css'

import 'swiper/css/bundle';
import Slider from '../../../../common/Slider/Slider';
import StatusMessage from '../../../../common/StatusMessage';


import Alert from '@mui/material/Alert';

import { usePopularMoviesQuery } from "../../../../hook/usePopularMovies"




const PopularMoviesSlider = () => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery();

    return (
        <div id='slide'>
            <StatusMessage
                isLoading={isLoading}
                isError={isError}
                error={error}
                data={data}
            />
            {!isLoading && !isError && data?.results?.length > 0 && (
                <Slider title='Popular' movies={data.results} />
            )}
        </div>
    )
}

export default PopularMoviesSlider
