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
    console.log("API 호출 URL:", url);
  
    const response = await api.get(url);
    console.log("API 응답 데이터:", response.data);
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