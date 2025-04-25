import React from 'react'
import { useSearchMovieQuery } from "../../../hook/useSearchMovies"


const SearchMovies = ({keyWord}) => {
      const { data } = useSearchMovieQuery({ keyword, page, genreId, popularValue });

    return (
        <>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
                {data.results.map((movie) => (
                    <Grid key={movie.id}>
                        <MovieCard movie={movie} />
                    </Grid>
                ))}
            </Grid>
            {/* Pagination */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                <Pagination
                    className='Pagination'
                    count={Math.min(data.total_pages, 500)}
                    page={page}
                    onChange={handleChange}
                    color="error"
                    siblingCount={0}
                />
            </Box>
        </>
    )
}

export default SearchMovies
