import React, { useState } from 'react';
import '../MoviesPage.css';

import { Box, InputLabel, MenuItem, FormControl, Select, ButtonGroup, Button, Grid } from '@mui/material';

import { useMovieGenreQuery } from "../../../hook/useMovieGenre";

const Filter = () => {
    const { data } = useMovieGenreQuery();
    const [selectedGenre, setSelectedGenre] = useState(null); // 선택된 장르 id 상태

    const genreClk = (value) => {
        setSelectedGenre(value);
    };

    return (
        <Box>
            <Box className='box'>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" sx={{ color: 'white' }}>sort</InputLabel>
                    <Select
                        id="sortselect"
                        label="sort"
                    // onChange={}
                    >
                        <MenuItem value="popular">Popular</MenuItem>
                        <MenuItem value="latest">Latest</MenuItem>
                        <MenuItem value="release_date">Release Date</MenuItem>
                        <MenuItem value="vote_average">Rating</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Grid container rowSpacing={2} className='box'>
                <Grid size={12} display='flex'>
                    <h2>filter</h2>
                    <Button
                        color='error'
                        variant={selectedGenre === null ? 'contained' : 'outlined'}
                        onClick={() => setSelectedGenre(null)}
                    >All</Button>
                </Grid>
                <Grid size={12}>
                    {data?.map((genre) => (
                        <Button
                            key={genre.id}
                            value={genre.id}
                            color='error'
                            variant={selectedGenre === genre.id ? 'contained' : 'outlined'}
                            onClick={() => genreClk(genre.id)}
                            sx={{ minWidth: 'fit-content' }}
                        >
                            {genre.name}
                        </Button>
                    ))}
                </Grid>
            </Grid>
        </Box>
    );
};

export default Filter;
