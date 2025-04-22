import React from 'react'
import './MovieSlider.css'

import Alert from '@mui/material/Alert';

import { useUpcomingMoviesQuery } from "../../../../hook/useUpcomingMovies"
import Slider from '../../../../common/Slider/Slider';
import StatusMessage from '../../../../common/StatusMessage';


const UpcomingSlider = () => {
    const { data, isLoading, isError, error } = useUpcomingMoviesQuery();

    return (
        <div id='slide'>
            <StatusMessage
                isLoading={isLoading}
                isError={isError}
                error={error}
                data={data}
            />
            {!isLoading && !isError && data?.results?.length > 0 && (
                <Slider title='Upcoming' movies={data.results} />
            )}
        </div>
    )
}

export default UpcomingSlider
