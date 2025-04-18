import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchPopularMovies=()=>{
    return api.get(`/movie/popular`)
}
export const usePopularMoviesQuery=()=>{
    return useQuery({
        queryKey:['movie-popular'],
        queryFn:fetchPopularMovies,
        select:(result)=>result.data
    })
}
//훅을 쓰는 이유 : 재사용성 + 가독성 