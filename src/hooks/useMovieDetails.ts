import React from 'react';
import { Cast, Credits } from '../interfaces/credits';
import movieDB from '../api/movieDB';
import axios from 'axios';
import { MovieDetails } from '../interfaces/MovieDetails';

interface MovieData {
    isLoading: boolean,
    movieDetails: MovieDetails, 
    cast: Cast
}



export const useMovieDetails = (movieId: string) => {
    const [movieData, setMovieData] = React.useState<MovieData>();

    const getMovieDetails = movieDB.get<MovieDetails | Credits>(`/${movieId}`);
    const getCredits = movieDB.get<MovieDetails | Credits>(`/${movieId}/credits`);

    const getMovieData = async () => {
        const resp = await axios.all([getMovieDetails, getCredits]);
        console.log(resp[0].data);
    }

    React.useEffect(() => {
        getMovieData();
    }, [])
}