import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"


const fetchSearchMovie = ({ keyword, page, genreId, popularValue }) => {
    return keyword
        ? api.get(`/search/movie?query=${keyword}&page=${page}`)
        : api.get(`/discover/movie?page=${page}&with_genres=${genreId}&sort_by=${popularValue}`)
}
export const useSearchMovieQuery = ({ keyword, page, genreId, popularValue}) => {
    return useQuery({
        queryKey: ["movie-search",{ keyword, page, genreId, popularValue}],
        queryFn: ()=>fetchSearchMovie({ keyword, page, genreId, popularValue }),
        suspense: true,
        select: (result)=>result.data,
    })
}