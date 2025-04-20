import React from 'react'
import Badge from '@mui/material/Badge';
import Chip from '@mui/material/Chip';


const MovieCard = ({ movie }) => {
    return (
        <div id='MovieCard'
            style={{
                backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` + ")"
            }}
        >

            <div className='cardhover'>
                <div className='card-detail'>

                    <h3>{movie.title}</h3>
                    {movie.genre_ids.map((id) =>
                        (<Chip className='moviekeyword' label={id} color="success" size="small" />)
                    )}
                    <div>{movie.vote_average}</div>

                    <Chip label={movie.adult ? "19+" : "safe"} color="error" size="small" />

                </div>
            </div>

        </div>
    )
}

export default MovieCard
