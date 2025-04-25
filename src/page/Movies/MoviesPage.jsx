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
  vote_average: "vote_average.desc",
};

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const keywordParam = searchParams.get("q") || "";
  const pageParam = parseInt(searchParams.get("page") || "1", 10);
  const genreParam = searchParams.get("genre") || "all";
  const sortParam = searchParams.get("sort") || "popular";

  const [keyword, setKeyword] = useState(keywordParam);
  const [page, setPage] = useState(pageParam);
  const [selectedGenre, setSelectedGenre] = useState(genreParam);
  const [selectedSort, setSelectedSort] = useState(sortParam);

  // URL 쿼리 변경 시 상태 동기화
  useEffect(() => {
    setKeyword(keywordParam);
    setPage(pageParam);
    setSelectedGenre(genreParam);
    setSelectedSort(sortParam);

    
  }, [keywordParam, pageParam, genreParam, sortParam]);

  // 상태 변경 시 URL 쿼리 업데이트
  useEffect(() => {
    const params = new URLSearchParams();

    if (keyword.trim() !== "") {
      params.set("q", keyword.trim());
      params.set("page", page.toString());
      // 검색어 있을 때는 장르/정렬 쿼리 제거 (비워둠)
    } else {
      // 검색어 없으면 장르/정렬 쿼리 포함
      params.set("page", page.toString());
      if (selectedGenre !== "all") params.set("genre", selectedGenre);
      if (selectedSort !== "popular") params.set("sort", selectedSort);
    }

    setSearchParams(params);
  }, [keyword, page, selectedGenre, selectedSort, setSearchParams]);

  // 검색어, 장르, 정렬 변경 시 페이지 초기화
  useEffect(() => {
    setPage(1);
  }, [keyword, selectedGenre, selectedSort]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
    genreId: selectedGenre === "all" ? null : selectedGenre,
    popularValue: sortKeyMap[selectedSort],
  });

  return (
    <Box sx={{ width: "96vw", padding: "2vw" }}>
      <StatusMessage isLoading={isLoading} isError={isError} error={error} data={data} />

      <Grid container spacing={2}>
      <Grid size={12}>
      {/* 검색어 없을 때만 필터 UI 노출 */}
          {keyword.trim() === "" && (
            <Filter
              selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre}
              selectedSort={selectedSort} setSelectedSort={setSelectedSort}
            />
          )}
          {/* 검색어 있을 때 안내 문구 삽입 가능 */}
          {keyword.trim() !== "" && (
            <Box sx={{ p: 1, color: "text.secondary" }}>
              Results for search term "{keyword}"
            </Box>
          )}
        </Grid>

        <Grid size={12}>
        {keyword.trim() !== "" ? (
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
