import React from 'react'
import Chip from '@mui/material/Chip';
import { useMovieGenreQuery } from "../../hook/useMovieGenre";
import { useNavigate } from "react-router-dom"


const MovieCard = ({ movie }) => {
    const navigate = useNavigate();
    const { data: genreData } = useMovieGenreQuery();
    const showGenre=(genreIdList)=>{
        if(!genreData) return []
        const genreNameList= genreIdList.map((id)=>{
            const genreObj = genreData.find((genre)=>genre.id === id)
            return genreObj.name;
        })
        return genreNameList;
    }
    const movieDetail=({data})=>{
        console.log("data",movie)
        navigate(`/movies/${movie.id}`);
    }
    const posterUrl = movie.poster_path
    ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`
    : "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FZ4Kox%2FbtsNCpX8yYV%2FENMaOKHkufAKksZUk9eBP1%2Fimg.png";
    return (
        <div id='MovieCard'
            style={{
                backgroundImage: `url(${posterUrl})`,
            }}
        >

            <div className='cardhover'  onClick={movieDetail}>
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
