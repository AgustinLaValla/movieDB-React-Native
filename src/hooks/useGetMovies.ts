import React from 'react';
import movieDB from '../api/movieDB';
import { MovieResponse, Movie } from '../interfaces/movie';
import axios from 'axios';

interface Movies {
    playingNow: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}

const initialState = {
    playingNow: [],
    popular: [],
    topRated: [],
    upcoming: [],
}

export const useGetMovies = () => {

    const [movies, setMovies] = React.useState<Movies>(initialState);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const getPopular = movieDB.get<MovieResponse>('/now_playing');
    const getPlayingNow = movieDB.get<MovieResponse>('/now_playing');
    const getTopRated = movieDB.get<MovieResponse>('/top_rated');
    const getUpcoming = movieDB.get<MovieResponse>('/upcoming');

    const getMovies = async () => {
        setIsLoading(true);
        const resp = await axios.all([getPlayingNow, getPopular, getTopRated, getUpcoming]);
        setMovies({
            playingNow: resp[0].data.results || [],
            popular: resp[1].data.results || [],
            topRated: resp[2].data.results || [],
            upcoming: resp[3].data.results || []
        })
        setIsLoading(false)
    }

    React.useEffect(() => {
        getMovies();
    }, [])

    return { ...movies, isLoading };

}