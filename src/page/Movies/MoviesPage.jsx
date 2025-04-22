import React, { useState, useEffect } from 'react';
import './MoviesPage.css'
import { useSearchMovieQuery } from "../../hook/useSearchMovies"

import { Box, Grid, Pagination, Skeleton } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import MovieCard from '../../common/MovieCard/MovieCard';
import StatusMessage from '../../common/StatusMessage';

const MoviesPage = () => {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get("q") || '';
  const initialPage = parseInt(query.get("page")) || 1;
  const [page, setPage] = useState(initialPage);

  const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword, page });

  useEffect(() => {
    setPage(1);
    setQuery({ q: keyword, page: '1' });
    console.log("data",data);
  }, [keyword]);

  const handleChange = (event, value) => {
    setPage(value);
    setQuery({ q: keyword, page: value.toString() });
  };


  return (
    <Box sx={{ width: '100%', padding: 2 }}>
      <StatusMessage
        isLoading={isLoading}
        isError={isError}
        error={error}
        data={data}
      />
      {!isLoading && !isError && data?.results?.length > 0 && (
      <Grid 
      container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={3}>
          필터~
        </Grid>

        <Grid size={9}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {data.results.map((movie) => (
              <Grid key={movie.id}>
                <MovieCard movie={movie} />
              </Grid>
            ))}
          </Grid>
          {/* Pagination */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Pagination
              count={data.total_pages}
              page={page}
              onChange={handleChange}
              color="error"
              shape="rounded"
              size="large"
              showFirstButton
              showLastButton
              siblingCount={0}
            />
          </Box>
        </Grid>
      </Grid>
       )}
    </Box>
  );
};

export default MoviesPage;
