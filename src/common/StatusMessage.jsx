import React from 'react'
import './StatusMessage.css'

import { Alert ,Skeleton } from '@mui/material';
const StatusMessage = ({ isLoading, isError, error, data }) => {
    if (isLoading) {
        return <Skeleton id='Alert' className='loading'
        variant="rounded" width="98%" height={200}
        sx={{ backgroundColor: 'gray' }}
        />;
    }
    if (isError) {
        return <Alert severity="error">Error occurred: {error?.message}</Alert>;
    }
    if (!data?.results || data.results.length === 0) {
        return <h2 id='Alert' className='notfound'>😿 Not found 😓</h2>;
    }
    return null; 
};      
export default StatusMessage
