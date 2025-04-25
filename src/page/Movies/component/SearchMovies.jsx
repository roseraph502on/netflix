import React from "react";
import { Box, Grid, Pagination } from "@mui/material";
import MovieCard from "../../../common/MovieCard/MovieCard";

const SearchMovies = ({ data, page, onPageChange }) => {
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Grid container spacing={2}>
        {data.results.map((movie) => (
          <Grid key={movie.id} size={{ xs: 6, sm: 4, md: 3 }}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
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

export default SearchMovies;
