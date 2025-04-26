import React from 'react'
import { Button, Grid, Skeleton } from '@mui/material';

const NotFoundPage = () => {

  return (
    <Grid container 
    sx={{ 
       height: "100vh", 
      width: "100vw",
      display: "flex",
      flexDirection: "column",     
      justifyContent: "center",    
      alignItems: "center"
    }}
    >
      <h2>😿 Not found </h2>
      <Button href='/'>Go HOME</Button>
    </Grid>
  )
}

export default NotFoundPage
