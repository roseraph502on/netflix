import React from "react";
import { Box, FormControl, InputLabel, Select, MenuItem, ButtonGroup, Button } from "@mui/material";
import { useMovieGenreQuery } from "../../../hook/useMovieGenre";

const Filter = ({ selectedGenre, setSelectedGenre, selectedSort, setSelectedSort }) => {
  const { data, isLoading, isError } = useMovieGenreQuery();

  if (isLoading) return <div>Loading genres...</div>;
  if (isError) return <div>Failed to load genres</div>;

  const genres = data?.genres || [];

  const sortOptions = [
    { label: "Popular", value: "popular" },
    { label: "Latest", value: "latest" },
    { label: "Rating", value: "vote_average" },
  ];

  return (
    <Box>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="sort-select-label">Sort</InputLabel>
        <Select
          labelId="sort-select-label"
          value={selectedSort}
          label="Sort"
          onChange={(e) => setSelectedSort(e.target.value)}
        >
          {sortOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box variant="outlined"  aria-label="genre filter" sx={{ flexWrap: "wrap" }}>
        <Button
        color="error"
          variant={selectedGenre === "all" ? "contained" : "outlined"}
          onClick={() => setSelectedGenre("all")}
          sx={{ margin: 0.5 }}
        > All </Button>
        {data.map((genre) => (
          <Button
          color="error"
            key={genre.id}
            variant={selectedGenre === genre.id.toString() ? "contained" : "outlined"}
            onClick={() => setSelectedGenre(genre.id.toString())}
            sx={{ margin: 0.5 }}
          >
            {genre.name}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Filter;
