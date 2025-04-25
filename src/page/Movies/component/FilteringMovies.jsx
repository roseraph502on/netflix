import React from 'react';
import { Box, Grid, Pagination } from '@mui/material';
import MovieCard from '../../../common/MovieCard/MovieCard';
import { useSearchMovieQuery } from '../../../hook/useSearchMovies';

const FilteringMovies = ({ page, genreId, popularValue, onPageChange }) => {
  // keyword 없이 discover API 호출
  const { data, isLoading, isError } = useSearchMovieQuery({
    keyword: null,
    page,
    genreId,
    popularValue,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occurred</div>;

  return (
    <>
      <Grid container spacing={2}>
        {data.results.map((movie) => (
          <Grid item key={movie.id} xs={6} sm={4} md={3}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Pagination
          count={Math.min(data.total_pages, 500)}
          page={page}
          onChange={onPageChange}
          color="error"
          siblingCount={0}
        />
      </Box>
    </>
  );
};

export default FilteringMovies;
