import React from "react";
import { Box, Grid, Pagination } from "@mui/material";
import MovieCard from "../../../common/MovieCard/MovieCard";

const FilteringMovies = ({ data, page, onPageChange }) => {
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Grid container spacing={2}>
        {data.results.map((movie) => (
            <MovieCard  key={movie.id} movie={movie} />
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

export default FilteringMovies;
