import React, { useState, useEffect } from 'react';
import './MoviesPage.css'
import { useSearchMovieQuery } from "../../hook/useSearchMovies"

import { Box, Grid, Pagination } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import Filter from './component/Filter';
import StatusMessage from '../../common/StatusMessage';
import SearchMovies from './component/SearchMovies';
import FilteringMovies from './component/FilteringMovies';

const MoviesPage = () => {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get("q") || '';
  const initialPage = parseInt(query.get("page")) || 1;
  const [page, setPage] = useState(initialPage);
  const [sortKey, setSortKey] = useState('popular'); // 기본 정렬값
  const [selectedGenre, setSelectedGenre] = useState('all'); // 기본 장르 필터

  const sortKeyMap = {
    popular: 'popularity.desc',
    latest: 'release_date.desc',
    release_date: 'primary_release_date.desc',
    vote_average: 'vote_average.desc'
  };  


  const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword, page });
  useEffect(() => {
    setPage(1);
    setQuery({ q: keyword, page: '1' });
    console.log("data", data);
  }, [keyword]);

  const handleChange = (event, value) => {
    setPage(value);
    setQuery({ q: keyword, page: value.toString() });
  };

  return (
    <Box sx={{ width: '96vw', padding: '2vw' }}>
      <StatusMessage
        isLoading={isLoading}
        isError={isError}
        error={error}
        data={data}
      />

      <Grid
        container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid id="filter" size={{ xs: 12, sm: 12, md: 3 }}>
          <Filter
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
            sortKey={sortKey}
            setSortKey={setSortKey}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 9 }}>

        </Grid>

        {keyword
          ? <SearchMovies keyword={keyword}/>
          : <FilteringMovies  />}
      </Grid>
    </Box>
  );
};

export default MoviesPage;
