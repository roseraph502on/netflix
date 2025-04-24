import React from 'react'
import "./MovieDetail.css"
import { useParams } from "react-router-dom"
import { useMovieDetailQuery } from "../../hook/useMovieDetail"

import { Grid, Skeleton, Box, Alert, Accordion, AccordionSummary, AccordionDetails, Avatar, Button, Modal } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Gauge } from '@mui/x-charts/Gauge';


const MovieDetail = () => {
  // modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '90vw', md: 600 },
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
    outline: 'none',
  };
  const { id } = useParams();
  const { data, isLoading, isError, error } = useMovieDetailQuery(id);
  if (isLoading) {
    return <Skeleton id='Alert' className='loading'
      variant="rectangular" width="98%" height="50vh"
      sx={{ backgroundColor: 'gray' }}
    />;
  } if (isError) {
    return <Alert severity="error">Error occurred: {error?.message}</Alert>;
  }
  const { movie, reviews, videos } = data;
  console.log("movie", movie);
  console.log("reviews", reviews);
  console.log("videos", videos);


  return (
    <Grid id="detail" container spacing={2}>
      <Grid className="m-d-img" size={{ xs: 12, md: 4, lg: 3 }}>
        <Box className='mvimg' sx={{
          backgroundImage: `url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2${data.movie.poster_path})`,
          width: { xs: '90vw', md: '280px', lg: '400px' },
          height: { xs: '140vw', md: '440px', lg: '600px' },
        }}
        ></Box>
      </Grid>
      {/* 설명란 */}
      <Grid size={{ xs: 12, md: 8, lg: 9 }} container spacing={1}>
        <Grid size={12}><h1>{data.movie.title}</h1></Grid>
        <Grid size={12}>
          {data.movie.release_date}  🔴  {data.movie.genres?.map((genre) => genre.name).join(', ')}  🔴  {data.movie.runtime} 분
        </Grid>
        <Grid size={12} sx={{ display: 'flex', alignItems: 'center', }}>
          <Gauge width={100} height={100} value={Math.round(data.movie.vote_average * 10)} /> 📃 {data.movie.vote_count}
        </Grid>
        <Grid size={12}>{data.movie.tagline}</Grid>
        <Grid size={12}><h2>overview</h2>{data.movie.overview}</Grid>
        <Grid size={12}><a href={data.movie.homepage}>🏠</a></Grid>
        {/* 트레일러  모달창 */}
        <Grid size={12}>
          <Button onClick={handleOpen} >🎞️ open Trailer</Button>
        </Grid>
      </Grid>
      {/* 리뷰 */}
      <Grid size={12} className='review'>
        <h2>review  ({data.reviews.total_results})</h2>
        {data.reviews.results.map((results, index) =>
        (
          <Accordion key={index}>
            <AccordionSummary className='review'
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            ><Avatar></Avatar> <h3>{results.author}</h3>
            </AccordionSummary>
            <AccordionDetails>{results.content}</AccordionDetails>
          </Accordion>
        ))}
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2 id="modal-modal-title">🎞️{data.movie.title} - Trailer</h2>
          {data.videos?.results?.length > 0 ? (
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${data.videos.results[0].key}`}
              title="Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <p id="modal-modal-description">트레일러 영상이 없습니다.</p>
          )}
          <Button onClick={handleClose} sx={{ mt: 2 }}>닫기</Button>
        </Box>
      </Modal>
    </Grid>
  )
}

export default MovieDetail
