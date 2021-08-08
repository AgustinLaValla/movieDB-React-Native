import React from 'react';
import { Movie, MovieResponse } from '../interfaces/movie';
import movieDB from '../api/movieDB';

export const useGetTopRated = () => {
    const [topRated, setTopRated] = React.useState<Movie[]>([]);
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        const getPopularMovies = async () => {
            setIsLoading(true);
            const { data } = await movieDB.get<MovieResponse>('/top_rated')
            setTopRated(data.results);
            setIsLoading(false);
        }
        getPopularMovies();
    }, [])

    return { topRated, isLoading }
}