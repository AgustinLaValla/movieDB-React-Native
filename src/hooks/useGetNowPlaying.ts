import React from 'react';
import movieDB from '../api/movieDB';
import { MovieResponse, Movie } from '../interfaces/movie';

export const useGetNowPlaying = () => {

    const [playingNow, setPlayingNow] = React.useState<Movie[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    React.useEffect(() => {
        const getNowPlaying = async () => {
            setIsLoading(true);
            const { data } = await movieDB.get<MovieResponse>('/now_playing');
            setPlayingNow(data.results);
            setIsLoading(false)
        }

        getNowPlaying();
    }, [])

    return { playingNow, isLoading };

}