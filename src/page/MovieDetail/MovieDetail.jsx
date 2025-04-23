import React from 'react'
import "./MovieDetail.css"
import { useParams } from "react-router-dom"
import { useMovieDetailQuery } from "../../hook/useMovieDetail"

import {  Grid ,Skeleton,Box } from '@mui/material';
import { Gauge } from '@mui/x-charts/Gauge';


const MovieDetail = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useMovieDetailQuery(id);
  console.log("dta", data);

  if (isLoading) {
    return <Skeleton id='Alert' className='loading'
      variant="rectangular" width="98%" height="50vh"
      sx={{ backgroundColor: 'gray' }}
    />;
  } if (isError) {
    return <Alert severity="error">Error occurred: {error?.message}</Alert>;
  }
  return (
    <Grid id="detail" container spacing={2}>
      <Grid className="m-d-img" size={4}>
      <Box  sx={{
        backgroundImage: `url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2${data.poster_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        width:'23vw',
        height:'70vh',
        borderRadius:'10px',
      }}
      ></Box>
      </Grid>
      <Grid size={8} container spacing={1}>
        <Grid size={12}><h1>{data.title}</h1></Grid>
        <Grid size={12}>
          {data.release_date}  🔴  {data.genres?.map((genre) => genre.name).join(', ')}  🔴  {data.runtime} 분
        </Grid>
        <Grid size={12} sx={{display: 'flex',alignItems:'center',}}>
        <Gauge width={100} height={100} value={Math.round(data.vote_average * 10)} /> 📃 {data.vote_count}
        </Grid>
        <Grid size={12}>{data.tagline}</Grid>
        <Grid size={12}><h2>overview</h2>{data.overview}</Grid>
        <Grid size={12}><a href={data.homepage}>🏠</a></Grid>

      </Grid>
    </Grid>
  )
}

export default MovieDetail
