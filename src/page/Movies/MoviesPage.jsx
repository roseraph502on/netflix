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
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get('q') || '';
  const page = parseInt(searchParams.get('page')) || 1;
  const genre = searchParams.get('genre') || 'all';
  const sort = searchParams.get('sort') || 'popular';

  const [selectedGenre, setSelectedGenre] = useState(genre);
  const [selectedSort, setSelectedSort] = useState(sort);
  const [currentPage, setCurrentPage] = useState(page);

  // URL 쿼리가 바뀌면 상태도 동기화
  useEffect(() => {
    setSelectedGenre(genre);
    setSelectedSort(sort);
    setCurrentPage(page);
  }, [genre, sort, page]);

  // 상태 변경 시 URL 업데이트
  useEffect(() => {
    const params = {};
    if (keyword) params.q = keyword;
    if (currentPage) params.page = currentPage.toString();
    if (selectedGenre && selectedGenre !== 'all') params.genre = selectedGenre;
    if (selectedSort && selectedSort !== 'popular') params.sort = selectedSort;

    setSearchParams(params);
  }, [keyword, currentPage, selectedGenre, selectedSort, setSearchParams]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
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
