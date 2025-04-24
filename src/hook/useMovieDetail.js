import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchMovieDetail = async (id) => {
    const movie = await api.get(`movie/${id}`);
    const reviews = await api.get(`movie/${id}/reviews`);
    const videos = await api.get(`movie/${id}/videos`);
    const result = {
        movie: movie.data,
        reviews: reviews.data,
        videos: videos.data,
    };
    return result;
};
export const useMovieDetailQuery = (id) => {
    return useQuery({
        queryKey: ["movie_id", id],
        queryFn: () => fetchMovieDetail(id),
        enabled: !!id,
    })
}
