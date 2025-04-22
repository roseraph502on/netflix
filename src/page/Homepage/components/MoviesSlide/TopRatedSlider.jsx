import React from 'react'
import './MovieSlider.css'

import Slider from '../../../../common/Slider/Slider';
import StatusMessage from '../../../../common/StatusMessage';

import { useTopRatedMoviesQuery } from "../../../../hook/useTopRatedMovies"

const TopRatedSlider = () => {
    const { data, isLoading, isError, error } = useTopRatedMoviesQuery();

    return (
        <div id='slide'>
            <StatusMessage
                isLoading={isLoading}
                isError={isError}
                error={error}
                data={data}
            />
            {!isLoading && !isError && data?.results?.length > 0 && (
                <Slider title='Top Rated' movies={data.results} />
            )}
        </div>
    )
}

export default TopRatedSlider
