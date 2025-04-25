import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"


const fetchSearchMovie = async ({ keyword, page, genreId, popularValue }) => {
    let url = "";
    if (keyword) {
      url = `/search/movie?query=${encodeURIComponent(keyword)}&page=${page}`;
    } else {
      url = `/discover/movie?page=${page}&sort_by=${popularValue}`;
      if (genreId) {
        url += `&with_genres=${genreId}`;
      }
    }  
    const response = await api.get(url);
    return response;
  };
  
export const useSearchMovieQuery = ({ keyword, page, genreId, popularValue}) => {
    return useQuery({
        queryKey: ["movie-search",{ keyword, page, genreId, popularValue}],
        queryFn: ()=>fetchSearchMovie({ keyword, page, genreId, popularValue }),
        suspense: true,
        select: (result)=>result.data,
    })
}