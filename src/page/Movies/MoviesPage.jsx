import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Box, Grid } from "@mui/material";

import Filter from "./component/Filter";
import SearchMovies from "./component/SearchMovies";
import FilteringMovies from "./component/FilteringMovies";
import StatusMessage from "../../common/StatusMessage";

import { useSearchMovieQuery } from "../../hook/useSearchMovies";

const sortKeyMap = {
  popular: "popularity.desc",
  latest: "release_date.desc",
  release_date: "primary_release_date.desc",
  vote_average: "vote_average.desc",
};

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("q") || "";
  const pageFromUrl = parseInt(searchParams.get("page")) || 1;
  const genreFromUrl = searchParams.get("genre") || "all";
  const sortFromUrl = searchParams.get("sort") || "popular";

  const [page, setPage] = useState(pageFromUrl);
  const [selectedGenre, setSelectedGenre] = useState(genreFromUrl);
  const [selectedSort, setSelectedSort] = useState(sortFromUrl);

  useEffect(() => {
    setPage(pageFromUrl);
    setSelectedGenre(genreFromUrl);
    setSelectedSort(sortFromUrl);
    console.log("p",pageFromUrl,genreFromUrl,sortFromUrl)
  }, [pageFromUrl, genreFromUrl, sortFromUrl]);

  useEffect(() => {
    const params = {};
    if (keyword) params.q = keyword;
    params.page = page.toString();
    if (selectedGenre !== "all") params.genre = selectedGenre;
    if (selectedSort !== "popular") params.sort = selectedSort;

    setSearchParams(params);
  }, [keyword, page, selectedGenre, selectedSort, setSearchParams]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
    genreId: selectedGenre === "all" ? null : selectedGenre,
    popularValue: sortKeyMap[selectedSort],
  });
  console.log("data",data)

  return (
    <Box sx={{ width: "96vw", padding: "2vw" }}>
      <StatusMessage isLoading={isLoading} isError={isError} error={error} data={data} />

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 3 }}>
          <Filter
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
            selectedSort={selectedSort}
            setSelectedSort={setSelectedSort}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 9 }}>
          {keyword ? (
            <SearchMovies
              keyword={keyword}
              page={page}
              genreId={selectedGenre === "all" ? null : selectedGenre}
              popularValue={sortKeyMap[selectedSort]}
              onPageChange={handlePageChange}
              data={data}
            />
          ) : (
            <FilteringMovies
              page={page}
              genreId={selectedGenre === "all" ? null : selectedGenre}
              popularValue={sortKeyMap[selectedSort]}
              onPageChange={handlePageChange}
              data={data}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default MoviesPage;
