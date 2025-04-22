import React from 'react'
import Chip from '@mui/material/Chip';
import { useMovieGenreQuery } from "../../hook/useMovieGenre";


const MovieCard = ({ movie }) => {
    const { data: genreData } = useMovieGenreQuery();
    const showGenre=(genreIdList)=>{
        if(!genreData) return []
        const genreNameList= genreIdList.map((id)=>{
            const genreObj = genreData.find((genre)=>genre.id === id)
            return genreObj.name;
        })
        return genreNameList;
    }
    return (
        <div id='MovieCard'
            style={{
                backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` + ")"
            }}
        >

            <div className='cardhover'>
                <div className='card-detail'>

                    <h3>{movie.title}</h3>
                    {showGenre(movie.genre_ids).map((genre,index) =>
                        (<Chip className='moviekeyword' key={index} label={genre} color="warning" size="small" />)
                    )}
                    <div>{movie.vote_average}</div>

                    <Chip label={movie.adult ? "19+" : "safe"} color={movie.adult ? "error" : "success"}size="small" />

                </div>
            </div>

        </div>
    )
}

export default MovieCard
