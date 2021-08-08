import React from 'react';
import { Movie, MovieResponse } from '../interfaces/movie';
import movieDB from '../api/movieDB';

export const useGetPopular = () => {
    const [popular, setPopular] = React.useState<Movie[]>([]);
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        const getPopularMovies = async () => {
            setIsLoading(true);
            const { data } = await movieDB.get<MovieResponse>('/popular')
            setPopular(data.results);
            setIsLoading(false);
        }
        getPopularMovies();
    }, [])

    return { popular, isLoading }
}