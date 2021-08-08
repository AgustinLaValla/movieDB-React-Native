import React from 'react';
import movieDB from '../api/movieDB';
import { MovieResponse, Movie } from '../interfaces/movie';

export const useGetUpcoming = () => {

    const [upcoming, setUpcoming] = React.useState<Movie[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    React.useEffect(() => {
        const getNowPlaying = async () => {
            setIsLoading(true);
            const { data } = await movieDB.get<MovieResponse>('/upcoming');
            setUpcoming(data.results);
            setIsLoading(false)
        }

        getNowPlaying();
    }, [])

    return { upcoming, isLoading };

}